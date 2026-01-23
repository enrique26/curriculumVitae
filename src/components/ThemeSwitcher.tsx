import { FC } from 'react';
import { Theme } from '../types';
import { themes } from '../config/themes';

interface ThemeSwitcherProps {
  currentTheme: string;
  onThemeChange: (themeName: string) => void;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ currentTheme, onThemeChange }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <details className="relative">
        <summary className="cursor-pointer flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-shadow list-none">
          <span className="text-xl">🎨</span>
          <span className="font-semibold">Tema</span>
        </summary>

        <div className="absolute bottom-full right-0 mb-2 bg-background border-2 border-primary rounded-lg shadow-xl overflow-hidden min-w-max">
          {Object.entries(themes).map(([key, theme]: [string, Theme]) => (
            <button
              key={key}
              onClick={() => {
                onThemeChange(key);
                // Close the dropdown by clicking summary (tricky approach)
                const summary = document.querySelector('summary');
                if (summary) {
                  (summary as HTMLElement).click();
                }
              }}
              className={`w-full px-6 py-3 text-left font-semibold border-b last:border-b-0 transition-colors ${
                currentTheme === key
                  ? 'bg-primary-light text-text'
                  : 'text-text hover:bg-background-alt'
              }`}
            >
              {theme.label}
            </button>
          ))}
        </div>
      </details>
    </div>
  );
};
