import { Avatar, Box, Divider, Typography, useTheme } from "@mui/material";
import React from "react";

const RoastHeader = ({name, jobTitle}) => {
  const theme = useTheme()
  return (
    <Box sx={{ mb: 6 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          gap: 2,
          alignItems: "center",
        }}
      >
        <Avatar
          sx={{
            width: 40,
            height: 40,
            bgcolor: theme.palette.roast.avatar,
            color: "#fff",
            fontWeight: 700,
            borderRadius: 1,
          }}
        >
          {name[0]}
        </Avatar>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 600, lineHeight: 1.2 }}>
          {name}
          </Typography>
          <Typography variant="body2" color={theme.palette.text.secondary}>
          {jobTitle}
          </Typography>
        </Box>
      </Box>
      <Divider sx={{ mt: 3, borderColor: theme.palette.divider }} />
    </Box>
  );
};

export default RoastHeader;
