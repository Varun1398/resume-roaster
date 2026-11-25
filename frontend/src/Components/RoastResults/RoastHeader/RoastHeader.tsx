import { Avatar, Box, Divider, Typography, useTheme } from "@mui/material";
import React from "react";

interface RoastHeader{
  name: string | null
  jobTitle: string
}

const RoastHeader = ({name, jobTitle}: RoastHeader) => {
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
            color: theme.palette.roast.buttonText,
            fontWeight: 700,
            borderRadius: 1,
          }}
        >
          {name!== null && name[0]}
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
