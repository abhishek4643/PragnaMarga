# Design System
### PragnaMarga — Clean. Simple. Productive.

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=rect&color=gradient&customColorList=12,20,26&height=8&section=header&width=100%" width="100%" />
</div>

This document defines the mobile visual design system, UI components, design tokens, and user experience standards for the **PragnaMarga** AI career navigator. The goal is to establish an engaging, modern, minimal mobile interface with consistent styling across assessment flows, competency summaries, and interactive roadmap timelines.

---

### 1. Design Principles

<p align="center" style="margin: 20px 0;">
  <img src="./principles.svg" alt="PragnaMarga Design Principles" width="100%" />
</p>

---

### 2. Color Palette
*Primary colors used across the mobile application screens, assessment states, and roadmap timelines:*

<p align="center" style="margin: 20px 0;">
  <img src="./palette.svg" alt="PragnaMarga Design System Color Palette" width="100%" />
</p>

---

### 3. Typography
*We use Inter as the primary interface font and JetBrains Mono for scores, milestone IDs, and code snippets:*

<div style="background-color: #0D1117; border: 1px solid #30363D; border-radius: 8px; padding: 18px 20px; margin: 14px 0;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td width="90" align="center" style="font-size: 40px; font-weight: 800; background-color: #161B22; color: #818CF8; border: 1px solid #30363D; border-radius: 8px; padding: 8px 12px;">Aa</td>
      <td style="padding-left: 20px;">
        <div style="font-size: 18px; font-weight: 700; color: #F0F6FC;">Inter &amp; JetBrains Mono</div>
        <div style="color: #818CF8; font-size: 12px; font-weight: 600; margin-top: 2px;">Primary mobile font family</div>
        <div style="color: #8B949E; font-size: 12px; margin-top: 4px;">Clean, modern, and highly legible across mobile screens, quiz questions, and roadmap milestones.</div>
      </td>
    </tr>
  </table>
</div>

| Role | Font Family | Size / Weight | Usage |
| :-- | :-- | :-- | :-- |
| **Screen Title** | Inter | 22px / 700 Bold | Top mobile navigation headers |
| **Card Header** | Inter | 16px / 600 Semi-Bold | Milestone and quiz option titles |
| **Body Regular** | Inter | 14px / 400 Regular | Explanatory text and descriptions |
| **Score / Badge** | JetBrains Mono | 12px / 600 Semi-Bold | Percentage scores, stage indexes, timestamps |

---

### 4. UI Components & Visual Tokens

#### 4.1 Skill Competency Badges

| Level | Background | Text Color | Border | Meaning |
| :-- | :-- | :-- | :-- | :-- |
| **MASTERED** | `#ECFDF5` | `#059669` | `1px solid #A7F3D0` | Score $\ge 80\%$ &bull; Verified competence |
| **IN PROGRESS** | `#FFFBEB` | `#D97706` | `1px solid #FDE68A` | Score $50\% - 79\%$ &bull; Moderate gap |
| **CRITICAL GAP** | `#FEF2F2` | `#DC2626` | `1px solid #FECACA` | Score $< 50\%$ &bull; Prerequisite priority |

#### 4.2 Active Milestone Roadmap Card

<div style="background-color: #0D1117; border: 1px solid #30363D; border-radius: 8px; padding: 18px 20px; margin: 14px 0;">
  <div style="display: flex; justify-content: space-between; align-items: center;">
    <div>
      <span style="font-size: 11px; font-weight: 600; color: #8B949E; text-transform: uppercase; letter-spacing: 0.05em;">Stage 02 &bull; Active Milestone</span>
      <div style="font-size: 20px; font-weight: 700; color: #F0F6FC; margin-top: 4px;">FastAPI &amp; Asynchronous Microservices</div>
    </div>
    <div style="text-align: right;">
      <span style="background-color: #1E1B4B; color: #818CF8; border: 1px solid #4338CA; padding: 4px 10px; border-radius: 12px; font-size: 11px; font-weight: 600;">IN PROGRESS (65%)</span>
      <div style="font-size: 11px; color: #8B949E; margin-top: 6px;">Next: <code style="color: #34D399;">SQLAlchemy 2.0 ORM</code></div>
    </div>
  </div>
</div>
