// app/context/ThemeContext.tsx
import React, { createContext, useContext, useState } from "react";

type Theme = "light" | "dark";

const themes = {
  light: {
    background: "#fefefe",
    text: "#111",
    secondaryText: "#555",
    squircle: "#eee",
    icon: "#333",
    circle: "#fff",
  },
  dark: {
    background: "#000",
    text: "#fff",
    secondaryText: "#ccc",
    squircle: "#000",
    icon: "#fff",
    circle: "#111",
  },
};

interface ThemeColors {
  background: string;
  text: string;
  secondaryText: string;
  squircle: string;
  icon: string;
  circle: string;
}

interface ThemeContextType {
  theme: Theme;
  colors: ThemeColors;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  colors: themes.light,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const value = {
    theme,
    colors: themes[theme],
    toggleTheme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
