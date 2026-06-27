import {
  Box,
  Divider,
  LinearProgress,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";

const RoastCategories = ({ category, lastCategory }) => {
  const { skill, score, skillRoast } = category;
  const theme = useTheme();
  return (
    <Box
      sx={{
        justifyContent: "center",
        py: 4,
      }}
    >
      <Box sx={{ maxWidth: "75%", pl: 3, mx: "auto" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: 2,
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              letterSpacing: 3,
              fontSize: "1rem",
              fontWeight: 600,
              mb: 2,
            }}
          >
            {skill.toUpperCase()}
          </Typography>
          <Typography
            sx={{
              fontWeight: 600,
              letterSpacing: 3,
              fontSize: "1rem",
            }}
          >
            {Number(score).toFixed(1)}/10
          </Typography>
        </Box>
        <LinearProgress
          sx={{
            height: 3,
            bgcolor: theme.palette.roast.border,
            "& .MuiLinearProgress-bar": {
              backgroundColor: theme.palette.roast.progressBar,
            },
            mb: 3,
          }}
          variant="determinate"
          value={score * 10}
        />
        <Typography
          sx={{
            fontSize: {
              xs: "0.8rem",
            },
            color: theme.palette.text.secondary,
            lineHeight: 2,
            fontWeight: 300,
          }}
        >
          {skillRoast}
        </Typography>
      </Box>
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
            borderColor: lastCategory ? "text.primary" : "divider",
          }}
        />
      </Box>
    </Box>
  );
};

export default RoastCategories;
