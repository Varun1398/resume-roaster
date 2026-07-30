from pydantic import BaseModel
from app.aiClients.Client import generate_response
import json


class StructuredResumeParser(BaseModel):
    name: str | None
    email: str | None
    skills: list[str]
    education: list[str]
    experience: list[str]
    projects: list[str]
    totalExperienceYears: float | None


def parsedResume(text: str):
    SYSTEM_PROMPT = f"""
    You are an expert resume parser.

    Your task is to extract structured information from the USER'S RESUME.

    Read the entire resume carefully.

    Extract the following information from the resume:

    - name
    - email
    - skills
    - education
    - experience
    - projects
    - totalExperienceYears (estimate if not explicitly mentioned)

    Rules:

    - Extract actual values from the resume.
    - Do NOT invent information.
    - Do NOT leave fields empty if the information exists.
    - Only use null if the information is genuinely missing.
    - Only use [] if no values exist.
    - Estimate totalExperienceYears from the work experience if necessary.

    IMPORTANT:

    Return ONLY a valid JSON object.

    Do NOT:
    - return markdown
    - wrap the response in ```json
    - explain anything
    - include any text before or after the JSON

    The JSON MUST follow this schema:

    {json.dumps(StructuredResumeParser.model_json_schema(), indent=2)}
"""
    return generate_response(
        system_prompt=SYSTEM_PROMPT,
        user_prompt=text,
        output_format=StructuredResumeParser,
    )
