from app.aiClients.OpenAiClient import parse_with_openai
from app.aiClients.GrokClient import parse_with_groq
from app.aiClients.GeminiClient import parse_with_gemini
import os
from dotenv import load_dotenv

load_dotenv()

PROVIDERS = {
    "groq": parse_with_groq,
    "gemini": parse_with_gemini,
    "openai": parse_with_openai,
}

provider_order = [
    p.strip().lower() for p in os.getenv("AI_PROVIDER_ORDER", "openai").split(",")
]


def generate_response(system_prompt, user_prompt, output_format):
    for provider_name in provider_order:
        provider = PROVIDERS[provider_name]
        if provider is None:
            print(f"Unknown provider: {provider_name}")
            continue
        try:
            print(f"Using : {provider_name}")
            return provider(
                system_prompt=system_prompt,
                user_prompt=user_prompt,
                output_format=output_format,
            )
        except Exception as e:
            print(f"{provider_name} failed : {e}")

    raise Exception("All AI providers Failed")
