import { createStore } from "./createStore";
import themes from "../../daisy.themes";
import { useCallback } from "react";

type Themes = (typeof themes)[number];
const [useThemeSelector, useSetTheme, ThemeProvider] = createStore<{ theme: Themes }>({
  theme: themes[0],
});

export const useTheme = () => {
  return useThemeSelector(({ theme }) => theme);
};

export const useThemeToggle = () => {
  const set = useSetTheme();

  return useCallback(
    (theme: (typeof themes)[number]) => {
      return set({ theme });
    },
    [set]
  );
};

export { useSetTheme, ThemeProvider };
