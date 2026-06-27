import React from "react";
import RoastHeader from "./RoastHeader/RoastHeader";
import { Container } from "@mui/material";
import RoastScore from "./RoastScore/RoastScore";
import RoastHighlight from "./RoastHighlight/RoastHighlight";
import RoastCategories from "./RoastCategories/RoastCategories";
import RoastShare from "./RoastShare/RoastShare";
import { Navigate, useLocation } from "react-router-dom";
const RoastResult = () => {
  const { state } = useLocation();
  if (!state?.roast) {
  return <Navigate to="/" replace />;
}
  const roast = state?.roast;
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <RoastHeader name={roast.name} jobTitle={roast.jobTitle} />
      <RoastScore score={roast.roastScore} careerStatus={roast.careerStatus} />
      <RoastHighlight roastHighlight={roast.summary} />
      {roast?.categories.map((category, index) => (
        <RoastCategories
          key={index}
          category={category}
          lastCategory={index === roast?.categories.length - 1}
        />
      ))}
      <RoastShare />
    </Container>
  );
};

export default RoastResult;
