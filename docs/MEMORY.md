# Project Memory
### PragnaMarga — Engineering Context, Operational State, and Architectural History

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=rect&color=gradient&customColorList=12,20,26&height=8&section=header&width=100%" width="100%" />
</div>

This document maintains operational context, key architectural decisions, and runtime constraints to ensure continuity across development sessions, automated agent workflows, and human contributors.

---

### Current Phase: Phase 5 — Production Release
* **Last Updated**: October 31, 2026
* **Status**: Complete &amp; Verified (100% Mobile Workflow Navigation Verified)

### High-Level Checklist
- [x] Phase 1: Core Navigation &amp; Screen Scaffolding
- [x] Phase 2: Resume Ingestion &amp; Assessment Flow
- [x] Phase 3: Skill Gap Analysis &amp; Results Engine
- [x] Phase 4: Interactive Roadmap &amp; Milestone Timeline
- [x] Phase 5: Verification, Support Screens &amp; Production Delivery

---

### Current Status

<div style="background-color: #0D1117; border-left: 4px solid #10B981; border-radius: 6px; padding: 16px 20px; margin: 12px 0;">
  <p style="margin: 6px 0; color: #F0F6FC;">[x] <b>React Navigation v7 Native Stack Operational</b> (buttery-smooth screen push/pop transitions across all 8 views).</p>
  <p style="margin: 6px 0; color: #F0F6FC;">[x] <b>Expo Document Picker Integrated</b> (native document ingestion for resumes and academic transcripts).</p>
  <p style="margin: 6px 0; color: #F0F6FC;">[x] <b>Deterministic Skill Gap Scoring Engine Active</b> (three-tier classification into Mastered, In Progress, and Critical Gap).</p>
  <p style="margin: 6px 0; color: #F0F6FC;">[x] <b>Offline-First Roadmap Milestone Persistence</b> (local progress cache with milestone checkmarks).</p>
</div>

---

### Key Architectural Decisions (ADR Summary)

1. **Expo 54 Managed Workflow**: Single TypeScript codebase delivers native 60 FPS mobile performance across iOS and Android without native maintenance fragmentation.
2. **React Navigation v7 Native Stack Navigator**: Utilizes platform-native Android `Fragment` and iOS `UINavigationController` views to eliminate JS thread transition stutter.
3. **Deterministic Competency Graph Engine**: Eliminates generative hallucinations by anchoring roadmaps on verified computer science prerequisite trees.
4. **Safe Area Context Normalization**: Normalizes hardware notches and home-indicator offsets across physical mobile form factors.

---

### Completed Milestones

* **Milestone 1 (Navigation Stack)**: Configured `@react-navigation/native-stack` with typed routes in `RootStackParamList`.
* **Milestone 2 (Assessment Flow)**: Created timed multiple-choice questionnaire with progress state machine.
* **Milestone 3 (Gap Scoring)**: Authored `src/utils/scoring.ts` implementing deterministic three-tier categorization.
* **Milestone 4 (Interactive Timeline)**: Built step-by-step roadmap viewer with stage completion badges.
* **Milestone 5 (Documentation Suite)**: Published complete 6-file engineering documentation and custom vector assets.

---

### Operational Constraints & Boundaries

- **Safe Area Insets**: Always wrap root screen content in `SafeAreaView` from `react-native-safe-area-context`.
- **List Optimization**: Always use `FlatList` with `keyExtractor` for long question and milestone arrays. Never use `.map()` in `ScrollView`.
- **Theme Centralization**: Always reference `src/theme/` design tokens for colors and typography; avoid hardcoding raw hex values in screen styles.
