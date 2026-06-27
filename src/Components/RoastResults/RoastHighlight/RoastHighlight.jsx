import { Box, Divider, Typography, useTheme } from "@mui/material";
import React from "react";

const RoastHighlight = ({roastHighlight}) => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        justifyContent: "center",
        py: 4,
      }}
    >
      <Box
        sx={{
          borderLeft: `4px solid ${theme.palette.roast.progressBar}`,
          pl: 3,
          maxWidth: "75%",
          mx: "auto",
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: "0.5rem",
              md: "1rem",
            },
            lineHeight: 2,
          }}
        >
          {roastHighlight}
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
            borderColor: theme.palette.divider,
          }}
        />
      </Box>
    </Box>
  );
};

export default RoastHighlight;
