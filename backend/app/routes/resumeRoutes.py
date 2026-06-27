from fastapi import APIRouter, File, UploadFile, HTTPException, status
import os
import shutil
from app.services.textExtractor import extractText
from app.services.agent import roaster
from app.services.resumeParser import parsedResume
import uuid
import secrets
from app.services.saveRoastMeta import saveRoastMeta
# fastApi router client
router = APIRouter()

# Upload Dir

uploadDir = "uploads"

# Check if Uploads folder exists
os.makedirs(uploadDir, exist_ok=True)

MAX_FILE_SIZE = 5 * 1024 * 1024

FileErrors = {
    "size": "Bro what kind of resume is this large 💀",
    "format": "Only PDF and DOCX resumes allowed.",
}


@router.post("/upload", status_code=status.HTTP_200_OK)
async def uploadResume(file: UploadFile = File(...)):

    uniqueFileName = f"{uuid.uuid4()}-{file.filename}"

    filePath = f"{uploadDir}/{uniqueFileName}"

    if not file.filename.endswith((".pdf", ".docx")):
        raise HTTPException(status_code=400, detail=FileErrors["format"])
    contents = await file.read()

    if len(contents) > MAX_FILE_SIZE:
        raise HTTPException(status_code=400, detail=FileErrors["size"])
    await file.seek(0)

    try:
        # save file in uploads folder as binary
        with open(filePath, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)

        text = extractText(filePath)[:4000]
        parserText = parsedResume(text=text)
        roast = roaster(parserText)
        roastMeta = {
            "jobTitle": roast.jobTitle,
            "roastScore": roast.roastScore,
            "careerStatus": roast.careerStatus,
            "experience": parserText.totalExperienceYears
        }
        await saveRoastMeta(roastMeta)

        return {
            "id": secrets.token_urlsafe(8),
            "status": "success",
            "status_code": 200,
            "data": {"roast": roast.model_dump()},
        }
    except Exception as e:
        if os.path.exists(filePath):
            os.remove(filePath)
        raise HTTPException(status_code=500, detail=str(e))
