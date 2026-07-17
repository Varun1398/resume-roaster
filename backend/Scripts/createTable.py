from app.config.database import dbEngine, Base
from app.models.roast import Roast

# Deprecated
# Database schema is now managed by Alembic.
# Do NOT use Base.metadata.create_all() anymore.
# Use:
#   alembic revision --autogenerate -m "<message>"
#   alembic upgrade head

# Base.metadata.create_all(bind=dbEngine)

# Base.metadata.create_all(bind = dbEngine)

print("Tables created successfully.")