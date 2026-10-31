# Product Requirements Document (PRD)
### PragnaMarga — AI Career Navigator & Skill Gap Analysis Platform

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=rect&color=gradient&customColorList=12,20,26&height=8&section=header&width=100%" width="100%" />
</div>

## 1. Executive Summary

Computer Science students and aspiring software engineers frequently encounter difficulty deciphering complex job descriptions, identifying their precise technical skill deficiencies, and plotting an effective, milestone-driven learning roadmap. Generic educational platforms offer static course catalogs rather than dynamic, competency-aligned trajectories tailored to real-world engineering roles.

**PragnaMarga** is a cross-platform mobile career navigation application built with **React Native 0.81**, **Expo 54**, and **TypeScript 5.9**. It integrates native resume ingestion, multi-stage skill assessments, and a deterministic gap analysis engine to generate structured, personalized learning roadmaps with measurable milestones for aspiring software engineers.

---

## 2. Target Personas

| Persona | Primary Goal | Pain Points Addressed |
| :-- | :-- | :-- |
| **CS Undergraduates** | Secure internships and entry-level software engineering roles | Unsure which tech stacks and CS fundamentals employers prioritize |
| **Career Transitioners** | Shift into full-stack or AI engineering from non-traditional paths | Overwhelmed by fragmented online tutorials without clear roadmaps |
| **Junior Developers** | Bridge the gap from junior to mid-level engineering competencies | Lack structured feedback on code quality, testing, and system design |

---

## 3. Core Functional Requirements

### 3.1 Profile & Document Ingestion
- **Resume & Transcript Ingestion**:
  - Integration with `expo-document-picker` enabling seamless upload of PDF and text resumes.
  - Profile metadata management including target engineering tracks (Frontend, Backend, AI/ML, DevOps).
- **Interactive Multi-Stage Assessment**:
  - Timed multiple-choice evaluations testing foundational data structures, algorithms, databases, and track-specific frameworks.
  - Progressive question branching based on student's self-reported experience level.

### 3.2 AI Skill Gap Scoring Engine
- **Competency Matrix Evaluation**:
  - Compares student assessment scores against industry benchmark matrices for target roles.
  - Classifies skills into three distinct categories:
    - **Mastered**: Demonstrated proficiency ($\ge 80\%$).
    - **In Progress / Minor Gap**: Basic familiarity ($50\% - 79\%$).
    - **Critical Missing Gap**: Prerequisite deficit ($< 50\%$).
- **Personalized Roadmap Generation**:
  - Produces an ordered milestone trajectory prioritizing critical missing prerequisites before advanced architectural topics.

### 3.3 Milestone Tracking & Offline Cache
- **Interactive Roadmap Screen**:
  - Visual timeline displaying current active stage, completed stages, and upcoming milestones.
  - Stage-by-stage resource links, curated documentation references, and hands-on mini-projects.
- **Offline-First Persistence**:
  - Stores student progress, quiz scores, and roadmap states locally on the device for uninterrupted offline study.

---

## 4. Non-Functional Requirements

- **Cross-Platform Native Performance**:
  - Fluid 60 FPS screen navigation across both iOS and Android physical devices.
  - Cold app startup time: $< 2.0\text{ seconds}$.
- **Accessibility & Safe Area Design**:
  - Strict compliance with `react-native-safe-area-context` across notched and gesture-based mobile screens.
  - WCAG AA compliant contrast ratios across dark/light color tokens.
- **Data Privacy & Security**:
  - Zero unencrypted local caching of sensitive student profile data.

---

## 5. Scope & Out-of-Scope (v1.0)

- **In Scope**:
  - Complete 8-screen mobile application workflow in React Native / Expo 54.
  - Native document picking and structured assessment evaluation.
  - Deterministic skill gap scoring matrix and visual roadmap generation.
  - Local state persistence and offline milestone tracking.
- **Out of Scope (Deferred to v2.0)**:
  - Live 1-on-1 video mentoring sessions.
  - Direct employer job application submission bridges.
