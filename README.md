# 🔥 Roastly

Roastly is an AI-powered resume roaster that analyzes resumes and predicts how vulnerable a career might be to AI replacement.

Upload your resume, let AI analyze your experience, skills, and career path, and receive a brutally honest roast along with an AI replacement score.

---

## Features

* 📄 PDF and DOCX resume upload
* 🤖 AI-powered resume parsing
* 🔥 Funny but critical career roasting
* 📊 AI replacement score (0–10)
* 📈 Recent roast history
* 🌗 Dark and Light mode support
* ⚡ Fast React + FastAPI architecture

---

## Tech Stack

### Frontend

* React
* Vite
* Material UI
* React Query
* Axios

### Backend

* FastAPI
* OpenAI API
* Pydantic

---

## Project Structure

```text
roaster/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── app/
│   ├── uploads/
│   ├── meta/
│   ├── requirements.txt
│   └── .env
│
└── README.md
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Runs on:

```text
http://localhost:5173
```

---

## Backend Setup

Create a virtual environment:

```bash
cd backend

python -m venv .venv
```

Activate it:

### Windows

```bash
.venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Create a `.env` file:

```env
OPENAI_API_KEY=your_api_key_here
```

Run the server:

```bash
uvicorn app.main:app --reload
```

Runs on:

```text
http://localhost:8000
```

---

## Environment Variables

```env
OPENAI_API_KEY=your_openai_key
```

---

## Screenshots

Add screenshots here after deployment.

---

## Future Improvements

* Database integration
* Roast history persistence
* User authentication
* Resume analytics dashboard
* Shareable roast links
* Leaderboard of most roasted careers

---

## Author

Created by Varun Sharma
