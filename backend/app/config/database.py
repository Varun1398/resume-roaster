from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, sessionmaker
import os
from dotenv import load_dotenv

load_dotenv()

POSTGRES_URL = os.getenv("POSTGRES_URL")

dbEngine = create_engine(POSTGRES_URL)

SessionLocal = sessionmaker(autoflush=False, autocommit=False, bind=dbEngine)

Base = declarative_base()
