from app.config.database import SessionLocal
from app.models.roast import Roast

db = SessionLocal()


async def saveRoastMeta(roast, parserText, resume_hash):
    dbRoast = Roast(    
    resume_hash=resume_hash,
    name=roast.name,
    job_title=roast.jobTitle,
    experience_years=parserText.totalExperienceYears,
    roast_score=float(roast.roastScore),
    career_status=roast.careerStatus,
    summary=roast.summary,
    survival_tip=roast.survivalTip,
    categories=[c.model_dump() for c in roast.categories],
    )
    db.add(dbRoast)
    db.commit()
    db.refresh(dbRoast)

    return dbRoast

async def getRoastMeta():
    try:
        roastCount = db.query(Roast).count()
        recent = db.query(Roast).order_by(Roast.id.desc()).limit(6).all()
        recentRoast = [
            {
                "jobTitle": roast.job_title,
                "roastScore": f"{roast.roast_score:.1f}",
                "careerStatus": roast.career_status,
                "experience": roast.experience_years,
            }
            for roast in recent
        ]
    finally:
        db.close()

    return roastCount, recentRoast