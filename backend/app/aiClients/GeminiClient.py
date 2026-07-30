from google import genai
from dotenv import load_dotenv
from google.genai import types

load_dotenv()

google_client = genai.Client()


def parse_with_gemini(system_prompt, user_prompt, output_format):
    response = google_client.models.generate_content(
        model="gemini-3.5-flash-lite",
        contents=user_prompt,
        config=types.GenerateContentConfig(
            system_instruction=system_prompt,
            response_mime_type="application/json",
            response_schema=output_format,
            temperature=0,
        ),
    )
    return response.parsed
