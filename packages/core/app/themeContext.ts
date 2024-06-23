import { createContext } from "react";

interface ThemeContextType {
  themeValue: "light" | "dark",
  setThemeValue: React.Dispatch<React.SetStateAction<"light" | "dark">>
}

const defaultSetThemeValue: React.Dispatch<React.SetStateAction<"light" | "dark">> = () => { };

export const ThemeContext = createContext<ThemeContextType>({ themeValue: "light", setThemeValue: defaultSetThemeValue })