from openai import OpenAI
from pydantic import BaseModel
from dotenv import load_dotenv

load_dotenv()

agentClient = OpenAI()


class StructuredResumeParser(BaseModel):
    name: str | None
    email: str | None
    skills: list[str]
    education: list[str]
    experience: list[str]
    projects: list[str]
    totalExperienceYears: float | None

def parsedResume(text: str):
    SYSTEM_PROPMT = """
    You are an expert resume parser.

    Extract structured information from the resume text.

    Return:
    - name
    - email
    - skills
    - education
    - experience (list of jobs/roles)
    - totalExperienceYears (estimated total professional experience in years)
    - projects
    """
    response = agentClient.responses.parse(
    model='gpt-4o-mini',
    input=[
        {
            "role": "system",
            "content": SYSTEM_PROPMT,
        },
        {
            "role": 'user',
            "content": text
        }
    ],
    text_format= StructuredResumeParser
)
    return response.output_parsed