import { createTheme } from "@mui/material";
import "@fontsource/space-grotesk";

const typography = {
  fontFamily: '"Space Grotesk", sans-serif',

  h1: {
    fontWeight: 700,
    letterSpacing: "-1px",
  },
  h2: {
    fontWeight: 700,
    letterSpacing: "-0.5px",
  },
  h3: {
    fontWeight: 600,
  },
  body1: {
    fontWeight: 400,
  },
  button: {
    textTransform: "none",
    fontWeight: 600,
  },
};

export const darkTheme = createTheme({
  palette: {
    mode: "dark",

    background: {
      default: "#000",
      paper: "#111",
      
    },

    text: {
      primary: "#fff",
      secondary: "#b0b0b0",
    },

    divider: "rgba(255,255,255,0.15)",

    roast: {
      button: "#fff",
      buttonText: "#000",
      buttonHover: "#e6e6e6",
      card: "#111",
      border: "rgba(255,255,255,0.15)",
      avatar: "#fff", 
      progressBar: "#fff"
    },
  },
});
export const lightTheme = createTheme({
  palette: {
    mode: "light",

    background: {
      default: "#fafafa",
      paper: "#fff",
    },

    text: {
      primary: "#111",
      secondary: "#666",
    },

    divider: "rgba(0,0,0,0.12)",

    roast: {
      button: "#111",
      buttonText: "#fff",
      buttonHover: "#333",
      card: "#fff",
      border: "rgba(0,0,0,0.12)",
      avatar: "#111",
      progressBar: "#111",
    },
  },
});
