<div align="center">

# PragnaMarga

### **AI-Powered Career Path Navigator & Guidance Platform**

_Intelligent career mapping powered by machine learning_

[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![AI Powered](https://img.shields.io/badge/_AI-Powered-blueviolet?style=for-the-badge)](https://github.com/abhishek4643/PragnaMarga)

</div>

---

## About

**PragnaMarga** (Sanskrit: _"The Path of Wisdom"_) is an AI-driven career guidance platform that helps students and professionals discover their ideal career paths. By analyzing skills, interests, academic background, and market trends, PragnaMarga generates personalized career roadmaps with actionable steps.

> _"Navigate your career journey with the wisdom of AI."_

---

## Key Features

| Feature | Description |
|---------|-------------|
| **AI Career Analysis** | ML-powered matching of skills to career opportunities |
| **Interactive Roadmaps** | Visual career path with milestones and timelines |
| **Skills Gap Analysis** | Identify what you need to learn for your dream role |
| **Learning Resources** | Curated courses, certifications, and tutorials |
| **Market Insights** | Real-time job market trends and salary data |
| **Goal Tracking** | Set career goals and track progress over time |
| **AI Career Advisor** | Chat-based AI assistant for career queries |

---

## Tech Stack

```
Frontend:       TypeScript · React · Next.js
Backend:        Node.js · Express
AI/ML:          OpenAI API · LangChain
Database:       PostgreSQL · Prisma ORM
Styling:        Tailwind CSS
Authentication: NextAuth.js
Deployment:     Vercel
License:        MIT
```

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/abhishek4643/PragnaMarga.git
cd PragnaMarga

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Add your database URL and API keys

# Run database migrations
npx prisma migrate dev

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## How It Works

```
┌──────────────┐    ┌─────────────────┐    ┌──────────────────┐
│   User Input  │───▶│  AI Analysis    │───▶│  Career Roadmap  │
│  (Skills,     │    │  Engine         │    │  Generation      │
│   Interests)  │    │  (LLM + ML)    │    │  & Visualization │
└──────────────┘    └─────────────────┘    └──────────────────┘
                            │
                    ┌───────┴───────┐
                    │  Market Data  │
                    │  & Trends DB  │
                    └───────────────┘
```

---

## Project Structure

```
PragnaMarga/
├── src/
│   ├── app/              # Next.js App Router
│   ├── components/       # UI components
│   ├── lib/              # Utility functions & AI logic
│   ├── services/         # API services & integrations
│   └── types/            # TypeScript type definitions
├── prisma/               # Database schema & migrations
├── public/               # Static assets
└── package.json
```

---

## License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

_Guiding careers with the wisdom of AI_

</div>
