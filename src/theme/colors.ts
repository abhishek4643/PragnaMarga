export interface ThemeColors {
  primary: string;
  primaryContainer: string;
  onPrimaryContainer: string;
  surface: string;
  onSurface: string;
  onSurfaceVariant: string;
  outline: string;
  success: string;
  white: string;
  accent: string;
  text: string;
  textMuted: string;
  background: string;
  cardSurface: string;
}

export const lightColors: ThemeColors = {
  primary: '#1e40af', // blue-800
  primaryContainer: '#dbeafe', // blue-100
  onPrimaryContainer: '#1e3a8a',
  surface: '#f8fafc', // slate-50
  onSurface: '#0f172a', // slate-900
  onSurfaceVariant: '#475569', // slate-600
  outline: '#cbd5e1', // slate-300
  success: '#16a34a', // green-600
  white: '#ffffff',
  accent: '#00F0FF', 
  text: '#0f172a',
  textMuted: '#475569',
  background: '#f8fafc',
  cardSurface: '#ffffff',
};

export const darkColors: ThemeColors = {
  primary: '#3b82f6', // blue-500
  primaryContainer: 'rgba(59, 130, 246, 0.15)',
  onPrimaryContainer: '#bfdbfe', // blue-200
  surface: '#0f172a', // slate-900
  onSurface: '#f8fafc', // slate-50
  onSurfaceVariant: '#94a3b8', // slate-400
  outline: '#334155', // slate-700
  success: '#22c55e', // green-500
  white: '#ffffff',
  accent: '#f59e0b', // amber-500
  text: '#f8fafc',
  textMuted: '#94a3b8',
  background: '#020617', // slate-950
  cardSurface: '#1e293b', // slate-800
};
