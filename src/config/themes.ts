import { Theme } from '../types';

// Blue Tech Theme
const blueTech: Theme = {
  name: 'blue-tech',
  label: 'Blue Tech',
  colors: {
    primary: '#0366d6',
    'primary-light': '#54a3ff',
    'primary-dark': '#0256c7',
    secondary: '#6f42c1',
    background: '#ffffff',
    'background-alt': '#f6f8fa',
    text: '#24292f',
    'text-muted': '#57606a',
    accent: '#0366d6',
  },
};

// Slate Minimal Theme
const slateMinimal: Theme = {
  name: 'slate-minimal',
  label: 'Slate Minimal',
  colors: {
    primary: '#475569',
    'primary-light': '#cbd5e1',
    'primary-dark': '#1e293b',
    secondary: '#64748b',
    background: '#f8fafc',
    'background-alt': '#f1f5f9',
    text: '#0f172a',
    'text-muted': '#64748b',
    accent: '#475569',
  },
};

// Emerald Night Theme
const emeraldNight: Theme = {
  name: 'emerald-night',
  label: 'Emerald Night',
  colors: {
    primary: '#059669',
    'primary-light': '#6ee7b7',
    'primary-dark': '#047857',
    secondary: '#0891b2',
    background: '#0f172a',
    'background-alt': '#1e293b',
    text: '#f1f5f9',
    'text-muted': '#cbd5e1',
    accent: '#10b981',
  },
};

export const themes: Record<string, Theme> = {
  'blue-tech': blueTech,
  'slate-minimal': slateMinimal,
  'emerald-night': emeraldNight,
};

// Change this to switch themes
export const DEFAULT_THEME = 'blue-tech';

export function getTheme(themeName?: string): Theme {
  return themes[themeName || DEFAULT_THEME] || themes[DEFAULT_THEME];
}

export function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.style.setProperty('--color-primary', theme.colors.primary);
  root.style.setProperty('--color-primary-light', theme.colors['primary-light']);
  root.style.setProperty('--color-primary-dark', theme.colors['primary-dark']);
  root.style.setProperty('--color-secondary', theme.colors.secondary);
  root.style.setProperty('--color-background', theme.colors.background);
  root.style.setProperty('--color-background-alt', theme.colors['background-alt']);
  root.style.setProperty('--color-text', theme.colors.text);
  root.style.setProperty('--color-text-muted', theme.colors['text-muted']);
  root.style.setProperty('--color-accent', theme.colors.accent);
}
