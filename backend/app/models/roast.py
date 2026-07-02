from sqlalchemy import (
    Column,
    String,
    Float,
    DateTime,
    JSON
)
from datetime import datetime

from app.config.database import Base
import uuid

class Roast(Base):
    __tablename__ = "roasts"

    id = Column(
    String(32),
    primary_key=True,
    default=lambda: uuid.uuid4().hex,
)

    resume_hash = Column(String(64), unique=True, nullable=True, index=True)

    # Basic Info
    name = Column(String)
    job_title = Column(String)
    experience_years = Column(Float)

    # Roast
    roast_score = Column(Float)
    career_status = Column(String)
    summary = Column(String)
    survival_tip = Column(String)

    # Skill-wise roast
    categories = Column(JSON)

    created_at = Column(DateTime, default=datetime.utcnow)