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
  const theme = useTheme();
  const steps = [
    { id: "01", title: "Upload Your Resume" },
    { id: "02", title: "AI Scans your career" },
    { id: "03", title: "Get Your Threat Level" },
  ];

  return (
    <Box>
      <Container maxWidth="md">
        <Grid container spacing={1} justifyContent={"center"} sx={{paddingTop: {xs: 4, sm: 2}}}>
          {steps.map((card) => (
            <Grid item xs={12} sm={4} key={card.id}>
              <Card
                sx={{
                  width: "100%",
                  minHeight: {
                    xs: 170,
                    sm: 190,
                  },
                  p: {
                    xs: 2,
                    sm: 2.5,
                  },
                  bgcolor: theme.palette.background.paper,
                  border: `1px solid ${theme.palette.roast.border}`,
                  borderRadius: 0,
                  boxShadow: "none",
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
