import { AppBar, Box, Container, Divider, Toolbar, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        mt: 6,
        mb: 3,
      }}
    >
      <Divider
        sx={{
          borderColor: "#D4D4D4",
          mb: 2,
        }}
      />

      <Typography
        variant="caption"
        sx={{
          display: "block",
          textAlign: "center",
          letterSpacing: 2,
          textTransform: "uppercase",
          color: "text.secondary",
        }}
      >
        Created by Varun
      </Typography>
    </Box>
  );
};

export default Footer;
