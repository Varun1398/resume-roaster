import { Box, CircularProgress, Dialog, Fade, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import useUploadResume from "../../assets/Hooks/useUploadResume";

const loadingSteps = [
  "📄 Reading your resume...",
  "🧠 Analyzing questionable career choices...",
  "☕ Judging your tech stack...",
  "💀 Calculating AI replacement probability...",
  "🔥 Preparing emotional damage...",
];

export const AiLoaderModal = ({ open }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!open) {
      setStep(0);
      return;
    }

    const interval = setInterval(() => {
      setStep((prev) => {
        if (prev < loadingSteps.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 1500);
    return () => clearInterval(interval);
  }, [open]);

  return (
    <Dialog
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "background.paper",
          color: "text.primary",
          borderRadius: 3,
          p: 4,
          minWidth: 400,
          textAlign: "center",
          border: "1px solid rgba(255,255,255,0.08)",
        },
      }}
    >
      <Box>
        <CircularProgress color="inherit" size={"3rem"} aria-label="Loading…" />
        <Fade in timeout={500} key={step}>
          <Typography mt={4} variant="h6">
            {loadingSteps[step]}
          </Typography>
        </Fade>
      </Box>
    </Dialog>
  );
};
