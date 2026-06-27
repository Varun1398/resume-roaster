import { Box, CircularProgress } from "@mui/material";
import React from "react";

const FallbackLoader = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <CircularProgress />
    </Box>
  );
};

export default FallbackLoader;
