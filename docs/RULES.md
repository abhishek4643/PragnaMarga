# Engineering Rules & Standards
### PragnaMarga — Code Conventions, Mobile Guardrails, and Navigation Standards

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=rect&color=gradient&customColorList=12,20,26&height=8&section=header&width=100%" width="100%" />
</div>

This document specifies the non-negotiable coding conventions, TypeScript standards, and mobile performance guardrails governing the **PragnaMarga** codebase.

---

## 1. TypeScript & React Native Standards

### 1.1 Typed Navigation Routes (`RootStackParamList`)
- Every screen and navigation action MUST declare explicit route parameters in `types/navigation.ts`:
  ```typescript
  // CORRECT
  export type RootStackParamList = {
    Home: undefined;
    Assessment: { trackId: string; title: string };
    Result: { score: number; skillGaps: SkillGapItem[] };
    Roadmap: { trackId: string };
    Profile: undefined;
    AccountDetails: undefined;
    HelpSupport: undefined;
    Privacy: undefined;
  };
  ```
- NEVER use untyped `navigation.navigate('UnknownRoute')`. Always reference typed stack helpers.

### 1.2 Explicit Component Props
- All reusable components (`Button`, `Card`, `ProgressBar`) MUST specify strongly typed interfaces:
  ```typescript
  interface ButtonProps {
    title: string;
    onPress: () => void;
    variant?: 'primary' | 'secondary' | 'outline';
    disabled?: boolean;
    loading?: boolean;
  }
  ```

---

## 2. Mobile Hardware & Layout Guardrails

### 2.1 Safe Area Normalization
- Every root screen MUST wrap its content in `SafeAreaView` imported from `react-native-safe-area-context`:
  ```typescript
  import { SafeAreaView } from 'react-native-safe-area-context';

  export const HomeScreen = () => {
    return (
      <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
        {/* Screen content */}
      </SafeAreaView>
    );
  };
  ```
- NEVER import legacy `SafeAreaView` from `react-native` directly, as it fails to account for modern hardware notches on Android.

### 2.2 List Virtualization
- For multi-item displays (e.g., question lists, roadmap milestones, history), always use `FlatList` with an explicit `keyExtractor`:
  ```typescript
  <FlatList
    data={milestones}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => <MilestoneCard item={item} />}
    initialNumToRender={10}
    maxToRenderPerBatch={10}
  />
  ```
- Never use unvirtualized `.map()` over large arrays inside scroll views.

---

## 3. Styling & Theming Consistency

### 3.1 Centralized Theme Tokens
- All colors, fonts, and spacing MUST reference `src/theme/`:
  - `theme.colors.primary` (`#536DFE`)
  - `theme.colors.secondary` (`#8B5CF6`)
  - `theme.colors.success` (`#10B981`)
  - `theme.colors.warning` (`#F59E0B`)
  - `theme.colors.error` (`#EF4444`)
  - `theme.colors.background` (`#F7F8FC`)
  - `theme.colors.surface` (`#FFFFFF`)
  - `theme.colors.text` (`#182033`)
- NEVER hardcode arbitrary hex colors directly inside `StyleSheet.create()`.

