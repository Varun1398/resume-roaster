from fastapi import APIRouter, File, UploadFile, HTTPException, status
from app.config.database import SessionLocal
from app.models.roast import Roast
from app.services.agent import RoastOutput, CategoryScore

router = APIRouter()


@router.get("/roast/{roastId}", status_code=status.HTTP_200_OK)
async def fetchRoastById(roastId: str):
    db = SessionLocal()
    try:
        roast = db.query(Roast).filter(Roast.id == roastId).first()
        roastResponse = RoastOutput(
            roastScore=str(roast.roast_score),
            careerStatus=roast.career_status,
            summary=roast.summary,
            survivalTip=roast.survival_tip,
            name=roast.name,
            jobTitle=roast.job_title,
            categories=[CategoryScore(**category) for category in roast.categories],
        )
        if not roast:
            raise HTTPException(status_code=404, detail="Data not found")
        return {
            "id": roast.id,
            "status": "success",
            "status_code": 200,
            "data": {"roast": roastResponse.model_dump()},
        }
    finally:
        db.close()
