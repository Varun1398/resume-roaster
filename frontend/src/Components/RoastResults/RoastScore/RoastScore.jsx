import { Box, Divider, Typography, useTheme } from "@mui/material";
import React from "react";

const RoastScore = ({score, careerStatus}) => {
  const theme = useTheme()
  return (
    <Box sx={{ textAlign: "center", py: 2 }}>
      <Typography
        variant="overline"
        sx={{ letterSpacing: 4, color: theme.palette.text.secondary }}
      >
        AI REPLACEMENT LEVEL
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "5rem", md: "7rem" },
          fontWeight: 700,
          lineHeight: 1,
          mt: 2,
        }}
      >
        {score}
      </Typography>
      <Typography sx={{ color: theme.palette.text.secondary, mb: 2 }}>/10</Typography>
      <Typography sx={{ letterSpacing: 3, fontWeight: 500 }}>
        {careerStatus}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 5,
        }}
      >
        <Divider
          sx={{
            width: "75%",
            borderColor: theme.palette.divider,
          }}
        />
      </Box>
    </Box>
  );
};

export default RoastScore;
