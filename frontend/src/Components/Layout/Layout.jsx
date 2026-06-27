import React from "react";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

const Layout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />

      <Box sx={{ flex: 1 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
