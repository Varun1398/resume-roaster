from groq import Groq
from dotenv import load_dotenv

load_dotenv()

Grok_client = Groq()


def parse_with_groq(
    system_prompt,
    user_prompt,
    output_format,
):
    response = Grok_client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "system",
                "content": system_prompt,
            },
            {
                "role": "user",
                "content": user_prompt,
            },
        ],
        response_format={"type": "json_object"},
        temperature=0,
    )
    content = response.choices[0].message.content
    return output_format.model_validate_json(content)
