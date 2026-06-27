import { Box, Container } from "@mui/material";
import React from "react";
import Content from "../Content/Content";
import Steps from "../Content/MiddleSection/Steps";
import { RecentlyJudgedSection } from "../Content/BottomSection/RecentlyJudged";
import Footer from "../Layout/Footer/Footer";

const RoastHome = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Container maxWidth={"lg"}>
        <Content />
        <Steps />
        <RecentlyJudgedSection />
      </Container>
      <Footer />
    </Box>
  );
};

export default RoastHome;
