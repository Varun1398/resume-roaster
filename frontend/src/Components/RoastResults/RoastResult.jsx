import React from "react";
import RoastHeader from "./RoastHeader/RoastHeader";
import { Container, Skeleton } from "@mui/material";
import RoastScore from "./RoastScore/RoastScore";
import RoastHighlight from "./RoastHighlight/RoastHighlight";
import RoastCategories from "./RoastCategories/RoastCategories";
import RoastShare from "./RoastShare/RoastShare";
import { Navigate, useParams } from "react-router-dom";
import { useGetRoastById } from "../../assets/Hooks/useGetRoastById";

const RoastResult = () => {
  const {roastId} = useParams()
  const {data, isLoading} = useGetRoastById(roastId)

  const roast = data?.data?.roast;
  if(isLoading){
    return <Skeleton variant="rectangular"/>
  }
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
