import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";

const Steps = () => {
  const theme = useTheme()
  const steps = [
    { id: "01", title: "Upload Your Resume" },
    { id: "02", title: "AI Scans your career" },
    { id: "03", title: "Get Your Threat Level" },
  ];

  return (
    <Box>
      <Container maxWidth="md">
        <Grid container spacing={1} justifyContent={"center"}>
          {steps.map((card) => (
            <Grid item xs={12} sm={4} key={card.id}>
              <Card
                sx={{
                    p: 1,
                    bgcolor: theme.palette.background.paper,
                    border: `1px solid ${theme.palette.roast.border}`,
                    borderRadius: 0,
                    boxShadow: "none",
                    height: "100%",
                    maxWidth: "80%",
                    textAlign: "center",
                    transition: "0.2s ease",
                    "&:hover": {
                      borderColor: theme.palette.roast.border,
                      transform: "translateY(-4px)",
                    },
                  }}
              >
                <CardContent>
                  <Typography variant="h5" sx={{ mb: 2 }}>
                    {card.id}
                  </Typography>
                  <Typography>{card.title.toUpperCase()}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Steps;
