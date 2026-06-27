import { DarkMode, LightMode } from "@mui/icons-material";
import { AppBar, Avatar, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useThemeMode } from "../../../assets/Context/ThemeContext";

const Header = () => {
  const navigate = useNavigate();
  const { mode, toggleTheme } = useThemeMode();
  return (
    <AppBar
      position="static"
      elevation={0}
      color="transparent"
      sx={{ borderBottom: "1px solid #d4d4d4" }}
    >
      <Toolbar>
        <Avatar
          variant="rounded"
          sx={{
            width: 32,
            height: 32,
            bgcolor: "#111",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.12)",
            fontWeight: 700,
          }}
        >
          R
        </Avatar>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, cursor: "pointer", ml: 1, fontWeight: 700 }}
          onClick={() => navigate("/")}
        >
          Roastly
        </Typography>
        <IconButton color="inherit" onClick={toggleTheme}>
          {mode === "dark" ? <LightMode /> : <DarkMode />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
