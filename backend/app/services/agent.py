from openai import OpenAI
from pydantic import BaseModel
from dotenv import load_dotenv
import json
import secrets

load_dotenv()

client = OpenAI()


class CategoryScore(BaseModel):
    skill: str
    score: str
    skillRoast: str


class RoastOutput(BaseModel):
    roastScore: str
    careerStatus: str
    summary: str
    survivalTip: str
    categories: list[CategoryScore]
    name: str
    jobTitle: str


def roaster(parsedText):

    resumeData = json.dumps(parsedText.model_dump(), indent=2)

    SYSTEM_PROMPT = """
    You are a brutally honest but funny resume critic.

Your job is to evaluate how vulnerable this person's career is to AI replacement.

Scoring Guide:

0-2:
Exceptional AI resistance.
Strong leadership, architecture, strategy, research, or highly specialized expertise.

3-4:
Low risk.
Experienced professional with valuable domain knowledge and problem-solving ability.

5-6:
Moderate risk.
Some tasks can be automated, but significant human judgment is still required.

7-8:
High risk.
Large portions of the work can already be assisted or automated by AI.

9-10:
Extreme risk.
The role consists mainly of repetitive, procedural, or easily automated work.

Important:
- Use the full 0-10 range.
- Do NOT default to high scores.
- Consider:
  - totalExperienceYears
  - project complexity
  - technical depth
  - leadership
  - specialization
  - evidence of problem solving
- A long career does not automatically mean low risk.
- A junior engineer does not automatically mean high risk.
- Score based on evidence from the resume.
    """

    response = client.responses.parse(
        model="gpt-4o-mini",
        input=[
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": resumeData},
        ],
        text_format=RoastOutput,
    )
    return response.output_parsed
