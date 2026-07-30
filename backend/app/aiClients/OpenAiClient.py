from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()

openai_client = OpenAI()

def parse_with_openai(system_prompt, user_prompt, output_format):
    response = openai_client.responses.parse(
    model="gpt-4o-mini",
    input=[
        {
            "role": "system",
            "content": system_prompt,
        },
        {
            "role": "user",
            "content": user_prompt,
        },
    ],
    text_format=output_format,
)

    return response.output_parsed