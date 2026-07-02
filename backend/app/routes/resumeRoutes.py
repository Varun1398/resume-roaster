from fastapi import APIRouter, File, UploadFile, HTTPException, status
from app.services.textExtractor import extractText
from app.services.agent import roaster
from app.services.resumeParser import parsedResume
from app.services.saveRoastMeta import saveRoastMeta
from app.config.database import SessionLocal
from app.models.roast import Roast
from app.utils.hash_utils import generateResumeHash

# fastApi router client
router = APIRouter()

MAX_FILE_SIZE = 5 * 1024 * 1024

FileErrors = {
    "size": "Bro what kind of resume is this large 💀",
    "format": "Only PDF and DOCX resumes allowed.",
}


@router.post("/upload", status_code=status.HTTP_200_OK)
async def uploadResume(file: UploadFile = File(...)):

    if not file.filename.endswith((".pdf", ".docx")):
        raise HTTPException(status_code=400, detail=FileErrors["format"])

    fileBytes = await file.read()

    if len(fileBytes) > MAX_FILE_SIZE:
        raise HTTPException(status_code=400, detail=FileErrors["size"])

    resume_hash = generateResumeHash(fileBytes) 

    try:
        db = SessionLocal()
        existing = db.query(Roast).filter(Roast.resume_hash == resume_hash).first()

        if existing:
            return {
                "id": existing.id,
                "cached": True,
            }

        text = extractText(fileBytes=fileBytes, fileName=file.filename)
        parserText = parsedResume(text=text)
        roast = roaster(parserText)
        savedRoast = await saveRoastMeta(roast, parserText, resume_hash)

        return {
            "id": savedRoast.id,
            "status": "success",
            "status_code": 200,
            "data": {"roast": roast.model_dump()},
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        db.close()