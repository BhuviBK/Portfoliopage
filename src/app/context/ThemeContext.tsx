import { createContext, useContext, useState, type ReactNode } from "react";

export type Theme = "illustration" | "glass";

interface ThemeContextType {
  theme: Theme;
  isGlass: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "illustration",
  isGlass: false,
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("illustration");
  const toggleTheme = () =>
    setTheme((t) => (t === "illustration" ? "glass" : "illustration"));

  return (
    <ThemeContext.Provider value={{ theme, isGlass: theme === "glass", toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
