"use client";

import tailwindConfig from "tailwind.config.cjs";
import resolveConfig from "tailwindcss/resolveConfig";
import { useThemeToggle, useTheme } from "~/stores/themeStore";

const themes: string[] = (resolveConfig(tailwindConfig) as any).daisyui;
export const ThemeSelector = () => {
  const currentTheme = useTheme();
  const setTheme = useThemeToggle();

  return (
    <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      {themes.map((theme) => (
        <div data-theme={theme} className="relative">
          <div data-theme={currentTheme} className="absolute top-0 left-0 right-0 bottom-0"></div>
          <label className="z-100 btn-primary btn relative grid w-full grid-cols-[auto_1fr] gap-4 rounded text-left">
            <input
              type="radio"
              className="radio-secondary"
              onClick={() => setTheme(theme as any)}
              checked={currentTheme === theme}
            />
            {theme}
          </label>
        </div>
      ))}
    </div>
  );
};
