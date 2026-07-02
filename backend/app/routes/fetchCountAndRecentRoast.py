from fastapi import APIRouter, File, UploadFile, HTTPException, status
import os
from app.services.saveRoastMeta import getRoastMeta

router = APIRouter()

uploadDir = "uploads"


@router.get("/getCountAndRecentRoast", status_code=status.HTTP_200_OK)
async def fetchRoastCountAndRoastMeta():
    try:
        roastCount, recentRoast = await getRoastMeta()
        return {
            "status": "success",
            "status_code": 200,
            "roastCount": roastCount,
            "recentRoast": recentRoast
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e)) 
