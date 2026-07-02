import hashlib

def generateResumeHash(fileBytes: bytes):
    return hashlib.sha256(fileBytes).hexdigest()