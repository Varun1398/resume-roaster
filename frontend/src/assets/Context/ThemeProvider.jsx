import React, { useMemo, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import { ThemeProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { darkTheme, lightTheme } from "../../Theme/Theme";

const AppThemeProvider = ({children}) => {
  const [mode, setMode] = useState(localStorage.getItem("theme") || "dark");

  const toggleTheme = () => {
    const nextMode = mode === "dark" ? "light" : "dark";
    setMode(nextMode);
    localStorage.setItem("theme", nextMode);
  };

  const theme = useMemo(
    () => (mode === "dark" ? darkTheme : lightTheme),
    [mode],
  );
  return (
    <ThemeContext.Provider value={{mode, toggleTheme}}>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            {children}
        </ThemeProvider>
    </ThemeContext.Provider>
  )
};

export default AppThemeProvider;
