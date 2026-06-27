import { createContext, useContext } from "react";

export const ThemeContext = createContext();

export const useThemeMode = () => {
  return useContext(ThemeContext)
}