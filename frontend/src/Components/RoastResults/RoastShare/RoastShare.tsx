import { Box, Button, ButtonGroup, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const RoastShare = () => {
  const theme = useTheme()
  const navigate = useNavigate();
  const shareOnX = () => {
    const text = "AI absolutely roasted my resume 🤖🔥 Can yours survive?";
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        text,
      )}&url=${encodeURIComponent(window.location.href)}`,
      "_blank",
    );
  };

  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        window.location.href,
      )}`,
      "_blank",
      "noopener,noreferrer",
    );
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        py: 2,
      }}
    >
      <Box sx={{ maxWidth: "75%", pl: 3, mx: "auto" }}>
        <Button
          onClick={() => navigate("/")}
          variant="contained"
          size="large"
          sx={{
            px: 5,
            py: 1.5,
            letterSpacing: 1,
            fontWeight: 600,
            bgcolor: theme.palette.roast.button,
            "&:hover": {
              bgcolor: theme.palette.roast.buttonHover,
            },
          }}
        >
          Roast Another
        </Button>
        <Typography
          sx={{
            mt: 4,
            mb: 2,
            letterSpacing: 2,
            color: "text.secondary",
            lineHeight: 2,
            fontWeight: 300,
          }}
        >
          Share Your Fate.
        </Typography>
        <Stack direction={"row"} gap={2}>
          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: theme.palette.roast.button,
              "&:hover": {
                bgcolor: theme.palette.roast.buttonHover,
              },
            }}
            onClick={shareOnX}
          >
            Share on X
          </Button>
          <Button
            variant="outlined"
            size="large"
            color="inherit"
            onClick={shareOnLinkedIn}
          >
            Share on LinkedIn
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default RoastShare;
