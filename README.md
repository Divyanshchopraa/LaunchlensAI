# LaunchLens
Turn Ideas Into Decisions

LaunchLens is an AI-powered startup mentor that helps founders validate ideas, analyze markets, and build actionable execution strategies.

Instead of generating generic responses, LaunchLens provides structured insights that guide founders from idea to validation and execution.

---

# Problem

Early-stage founders often struggle not because of bad ideas, but because of a lack of clarity and direction.

They rely on scattered sources such as:
- Google
- YouTube
- Generic AI tools

These sources provide unstructured and inconsistent information, which leads to:

- Guesswork-based decisions
- Weak market validation
- Poor execution strategies

In addition, expert mentorship is often expensive or inaccessible, making it difficult for beginners to move forward with confidence.

---

# Solution

LaunchLens transforms raw startup ideas into structured, decision-ready insights.

It helps founders understand:

- Idea viability
- Potential risks
- Market positioning
- Execution roadmap

All outputs are organized in a structured format that improves clarity and decision-making.

---

# Features

- AI-powered startup analysis
- Structured output instead of raw AI text
- Startup scoring system  
  - Viability score  
  - Risk level  
  - Execution difficulty
- Competitor insights (simulated)
- Roadmap generation
- Investor feedback simulation
- Reality Check Mode for honest evaluation
- Expert Connect (planned feature)

---

# Tech Stack

## Frontend
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Backend
- Node.js
- Express.js
- Firebase
- LLM API (llama-3.3-70b-versatile)
- Zod

---

# Project Structure

```
root
│
├── backend/      # API logic and AI processing
│
├── frontend/     # Next.js user interface
```

---

# API Integration

Endpoint

```
POST /api/analyze
```

Request Body

```json
{
  "idea": "string",
  "industry": "string",
  "budget": "string",
  "location": "string",
  "stage": "string",
  "timeline": "string"
}
```

Example Response

```json
{
  "summary": "...",
  "competitors": ["..."],
  "roadmap": ["..."],
  "investor": "...",
  "score": 78,
  "risk": "Medium"
}
```

---

# Getting Started

Clone the repository

```
git clone <your-repository-url>
cd your-project
```

Run Backend

```
cd backend
npm install
npm run dev
```

Run Frontend

```
cd frontend
npm install
npm run dev
```

---

# Environment Variables

Create a `.env.local` file inside the frontend directory:

```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

---

# Demo Flow

1. User enters a startup idea  
2. User clicks "Analyze Idea"  
3. The system processes the input using AI  
4. LaunchLens generates structured insights including:

- Idea summary
- Competitor analysis
- Execution roadmap
- Investor feedback

---

# Future Scope

- Fine-tuned startup-specific AI model
- Real-time market data integration
- Startup simulation engine
- Personalized AI memory system
- Smart expert-founder matching system

---

# Core Idea

LaunchLens is not just an AI tool.

It is a decision system that helps founders move from uncertainty to clarity and execution.

---

# Team

Sehaj  
Siya  
Krish  
Divyansh

---

# License

This project was developed for hackathon and educational purposes