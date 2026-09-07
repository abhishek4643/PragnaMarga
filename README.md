# PragnaMarga

An AI-powered mobile career trajectory navigator and skill gap intelligence platform designed to empower students and professionals with customized learning roadmaps, resume analysis, and career milestone tracking.

[![Platform](https://img.shields.io/badge/Platform-React_Native-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactnative.dev/)
[![Framework](https://img.shields.io/badge/Framework-Expo_54-000000?style=for-the-badge&logo=expo&logoColor=white)](https://expo.dev/)
[![Language](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Navigation](https://img.shields.io/badge/Navigation-React_Navigation_7-6B46C1?style=for-the-badge)](https://reactnavigation.org/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

---

## Project Overview

Choosing and navigating career trajectories in rapidly evolving technological fields presents significant complexity. PragnaMarga functions as an intelligent career copilot. By evaluating a user's current background through resume document parsing and interactive assessment, the platform identifies concrete skill discrepancies against market requirements and calculates an actionable step-by-step roadmap.

**Vision:** Bridge the gap between academic education and modern industry demands through personalized, data-driven career navigation for every learner.

---

## Key Features

- **Intelligent Document Ingestion:** Built-in mobile document picker supporting PDF and docx uploads for instant resume evaluation.
- **Skill Gap Discrepancy Engine:** Algorithmic comparison of user experience against benchmark job profiles (Software Engineer, Cloud Architect, AI Specialist).
- **Dynamic Learning Roadmaps:** Hierarchical visual milestones detailing technical competencies, project goals, and estimated completion timelines.
- **Native Mobile Experience:** High-performance cross-platform application built on Expo 54 and React Native 0.81.
- **Type-Safe Screen Navigation:** Smooth transition pipelines orchestrated via React Navigation 7 Native Stack.
- **Offline Progress Persistence:** Retains user milestone completion and personalized career roadmaps on-device.

---

## Use Cases

### For Students & Recent Graduates
- Discover realistic career paths matching academic specialization and project experience.
- Understand exact technical requirements before applying to entry-level engineering roles.

### For Mid-Career Transitioners
- Identify transferable skills when switching disciplines (e.g., Traditional QA to DevOps/Cloud).
- Follow a structured curriculum of high-impact skills to accelerate career mobility.

### For Academic Mentors & Career Advisors
- Leverage standardized skill benchmarks to guide student career development.
- Monitor student milestone completion and portfolio readiness.

---

## System Architecture

```
+---------------------------------------------------------------+
|              Mobile Client (Expo 54 + React Native)           |
|  - React Navigation 7          - Native Document Picker       |
|  - Interactive Roadmap UI      - Skill Benchmark Screens      |
+---------------------------------------------------------------+
                                |
                                v
+---------------------------------------------------------------+
|                  Career Intelligence Engine                   |
|  - Document & Profile Parser   - Competency Scoring Model     |
|  - Pathway Optimization        - Gap Analysis Algorithms      |
+---------------------------------------------------------------+
                                |
                                v
+---------------------------------------------------------------+
|                    Curated Knowledge Base                     |
|  - Role Skill Benchmarks       - Learning Resources Index     |
|  - Industry Trajectory Graphs  - Certification Roadmaps       |
+---------------------------------------------------------------+
```

---

## Technology Stack

| Layer | Technologies |
|---|---|
| Core Runtime | React Native 0.81.5, React 19.1 |
| Mobile Platform | Expo 54.0 |
| Language | TypeScript 5.9 |
| Navigation | @react-navigation/native 7.0, @react-navigation/native-stack |
| Hardware & Native APIs | expo-document-picker, react-native-screens, react-native-safe-area-context |
| Build Tool | Expo Application Services (EAS) / Metro Bundler |

---

## Project Structure

```
PragnaMarga/
├── assets/               # Application icons, splash screens, and static graphics
├── src/                  # Application source code
│   ├── screens/          # Career assessment, Roadmap, ResumeUpload, Profile
│   ├── components/       # MilestoneCard, ProgressBar, SkillBadge
│   ├── navigation/       # RootNavigator and navigation param types
│   ├── services/         # Skill gap calculation and roadmap generator logic
│   └── types/            # TypeScript data contracts and role models
├── App.tsx               # Application root component with theme providers
├── app.json              # Expo configuration and mobile bundle identifiers
├── index.ts              # Native runtime entrypoint
├── package.json          # Dependency definitions
└── tsconfig.json         # TypeScript compiler configuration
```

---

## Getting Started

### Prerequisites
- Node.js >= 18.0.0
- Expo Go application installed on your iOS or Android device (or an emulator)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/abhishek4643/PragnaMarga.git
   cd PragnaMarga
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Expo development server:
   ```bash
   npx expo start
   ```

4. Run on your desired platform:
   - Scan the terminal QR code with your mobile camera (iOS) or Expo Go app (Android).
   - Press `a` for Android emulator.
   - Press `i` for iOS simulator.
   - Press `w` for Web preview.

---

## Future Roadmap

- Integration with OpenAI / Gemini APIs for real-time natural language resume feedback.
- Live job board integration syncing roadmaps directly with active postings.
- Peer study group matching based on shared career milestones.
- Automated certificate verification via digital credential standards.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
