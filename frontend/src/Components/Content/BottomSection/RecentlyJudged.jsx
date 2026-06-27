import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Skeleton,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import useFetchRoastCount from "../../../assets/Hooks/useFetchRoastCount";

export const RecentlyJudgedSection = () => {
  const theme = useTheme()
  const { isLoading, data } = useFetchRoastCount();
  const getScoreColor = (score) => {
    if (score >= 8) return "#ff4d4d"; // Red
    if (score >= 5) return "#f59e0b"; // Orange/Yellow
    return "#22c55e"; // Green
  };
  return (
    <Box sx={{ pt: 4 }}>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ textAlign: "center", mb: 3, letterSpacing: 1 }}
      >
        Recently Judged
      </Typography>
      {isLoading ? (
        <Skeleton variant="rectangular" />
      ) : (
        <Grid container spacing={3}>
          {data?.recentRoast.map((recent, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Box
                sx={{
                  border: `1px solid ${theme.palette.roast.border}`,
                  bgcolor: theme.palette.background.paper,
                  p: 3,
                  minHeight: 150,
                  transition: "0.2s ease",
                  wordBreak: "break-word",
                  "&:hover": {
                    borderColor: theme.palette.roast.border,
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: 2,
                    mb: 2,
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 600,
                      lineHeight: 1.4,
                      flex: 1,
                    }}
                  >
                    {recent.jobTitle}, {recent.experience} YOE
                  </Typography>

                  <Typography
                    sx={{
                      color: getScoreColor(Number(recent.roastScore)),
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                  >
                    {Number(recent.roastScore).toFixed(1)}
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    color: theme.palette.text.secondary,
                    fontStyle: "italic",
                    lineHeight: 1.6,
                  }}
                >
                  {recent.careerStatus}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};
