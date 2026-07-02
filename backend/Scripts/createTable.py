from app.config.database import dbEngine, Base
from app.models.roast import Roast

Base.metadata.create_all(bind = dbEngine)

print("Tables created successfully.")