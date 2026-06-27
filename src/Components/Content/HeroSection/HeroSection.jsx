import { Typography } from "@mui/material";
import React from "react";

const HeroSection = () => {
  return (
    <>
      <Typography variant="h2" fontWeight={700} sx={{ mb: 2 }}>
        WILL AI REPLACE YOU ?
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="h6"
        color="text.secondary"
        sx={{ mb: 5, maxWidth: 600, mx: "auto" }}
      >
        Upload your resume and let AI roast your career decisions.
      </Typography>
    </>
  );
};

export default HeroSection;
