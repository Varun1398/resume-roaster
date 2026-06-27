from fastapi import APIRouter
from app.routes import resumeRoutes
from app.routes import fetchCountAndRecentRoast

api_router = APIRouter()

# connect api routes to a common router

api_router.include_router(fetchCountAndRecentRoast.router)
api_router.include_router(resumeRoutes.router, prefix="/resume")