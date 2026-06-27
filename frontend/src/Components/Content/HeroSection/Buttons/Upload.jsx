import { CloudUpload } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  Snackbar,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { AiLoaderModal } from "../../../Loader/AiLoaderModal";

const Upload = ({
  showLoader,
  showSnackBar,
  onClose,
  errorMsg,
  onUploadRequest,
}) => {
  const theme = useTheme();
  const onDrop = useCallback((selectedFiles) => {
    const formData = new FormData();

    formData.append("file", selectedFiles[0]);

    onUploadRequest(formData);
  }, []);

  const { getRootProps, getInputProps, open } = useDropzone({
    onDrop,
    accept: { "application/pdf": [".pdf"] },
    noClick: true,
    noKeyboard: true,
  });

  return (
    <Box>
      <AiLoaderModal open={showLoader} />
      <Snackbar
        open={showSnackBar}
        autoHideDuration={3000}
        onClose={onClose}
        message={errorMsg}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        ContentProps={{
          sx: {
            background: "linear-gradient(135deg, #b3261e, #8b0000)",
            color: theme.palette.background.paper,
            fontWeight: 500,
            borderRadius: 3,
            border: `1px solid ${theme.palette.roast.border}`,
          },
        }}
      />
      <Box
        {...getRootProps()}
        sx={{
          border: `2px dashed ${theme.palette.roast.border}`,
          borderRadius: 4,
          p: 4,
          mb: 3,
          backgroundColor: theme.palette.background.paper,
          transition: "all 0.3s ease",
          "&:hover": {
            borderColor: theme.palette.roast.border,
            backgroundColor: theme.palette.background.paper,
            transform: "translateY(-2px)",
          },
        }}
      >
        <CloudUpload color="inherit" sx={{ fontSize: 40, opacity: 0.5 }} />
        <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
          Drop your resume here
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
          PDF or DOCX. Max 5MB.
        </Typography>
        <input {...getInputProps()} />

        <Button
          onClick={open}
          component="span"
          variant="contained"
          size="large"
          sx={{
            px: 3.5,
            py: 1.5,
            letterSpacing: 1,
            fontWeight: 600,
            bgcolor: theme.palette.roast.button,
            color: theme.palette.roast.buttonText,
            "&:hover": {
              bgcolor: theme.palette.roast.buttonHover,
            },
          }}
        >
          Roast Me
        </Button>
      </Box>
    </Box>
  );
};

export default Upload;
