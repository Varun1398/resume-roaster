import { Avatar, Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { CloudUpload } from "@mui/icons-material";
import HeroSection from "./HeroSection/HeroSection";
import Upload from "./HeroSection/Buttons/Upload";
import SocialProof from "./HeroSection/SocialProof/SocialProof";
import Steps from "./MiddleSection/Steps";
import useUploadResume from "../../assets/Hooks/useUploadResume";
const Content = () => {
  const uploadMutation = useUploadResume();

  return (
    <Box
      sx={{
        minHeight: "55vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="md">
        <Box textAlign="center">
          {/* HeroSection */}
          <HeroSection />

          {/* Dropzone section */}
          <Upload
            showLoader={uploadMutation.isPending}
            showSnackBar={uploadMutation.openSnackBar}
            onClose={uploadMutation.closeSnackBar}
            errorMsg={uploadMutation.error?.response?.data?.detail}
            onUploadRequest={uploadMutation.mutate}
          />

          {/* Social Proof */}
          <SocialProof />
        </Box>
      </Container>
    </Box>
  );
};

export default Content;
