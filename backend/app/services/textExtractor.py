import pdfplumber
from docx import Document
import os


def extractText(filePath: str):
    extenstion = os.path.splitext(filePath)[1].lower()
    if extenstion == ".pdf":
        return extractPDF(filePath)

def extractPDF(filePath: str):
    text = ""

    with pdfplumber.open(filePath) as pdf:
        for page in pdf.pages:
            pageText = page.extract_text()
            text += pageText + "\n"
    return cleanText(text)


def cleanText(text: str):
    text = text.replace("\n", " ")
    text = " ".join(text.split())
    return text
