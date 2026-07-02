import pdfplumber
from docx import Document
import io


def extractText(fileBytes: bytes, fileName: str):
    extenstion = fileName.split(".")[-1].lower()
    if extenstion == "pdf":
        return extractPDF(fileBytes)

def extractPDF(fileBytes: bytes):
    text = ""

    with pdfplumber.open(io.BytesIO(fileBytes)) as pdf:
        for page in pdf.pages:
            pageText = page.extract_text()
            text += pageText + "\n"
    return cleanText(text)


def cleanText(text: str):
    text = text.replace("\n", " ")
    text = " ".join(text.split())
    return text
