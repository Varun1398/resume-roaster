import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    roast: {
      button: string;
      buttonText: string;
      buttonHover: string;
      card: string;
      border: string;
      avatar: string;
      progressBar: string;
    };
  }

  interface PaletteOptions {
    roast?: {
      button: string;
      buttonText: string;
      buttonHover: string;
      card: string;
      border: string;
      avatar: string;
      progressBar: string;
    };
  }
}