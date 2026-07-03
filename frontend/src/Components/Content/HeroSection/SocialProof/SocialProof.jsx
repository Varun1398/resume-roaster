import {
  Avatar,
  AvatarGroup,
  Box,
  Skeleton,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import useFetchRoastCount from "../../../../assets/Hooks/useFetchRoastCount";

const SocialProof = () => {
  const { data, isLoading } = useFetchRoastCount();

  const avatarsToShow = Math.min(data?.roastCount, 4);
  const theme = useTheme();

  const showAvatars = () => {
    if (isLoading) return <Skeleton variant="rectangular" />;
    return (
      <AvatarGroup max={3} spacing={"small"}>
        {Array.from({ length: avatarsToShow }).map((_, idx) => (
          <Avatar
            key={idx}
            sx={{
              background: theme.palette.roast.avatar,
              border: `1px solid ${theme.palette.roast.border}`,
              fontSize: 14,
              fontWeight: 600,
            }}
          />
        ))}
      </AvatarGroup>
    );
  };
  return (
    <Box display="flex" justifyContent="center" alignItems="center" gap={2}>
      <Box display="flex">{showAvatars()}</Box>
      <Typography variant="body1" color={theme.palette.text.secondary}>
        {!data?.roastCount
          ? "Be the first brave soul 💀"
          : `${data.roastCount} ${data.roastCount > 3 ? " +resumes" : "resumes"} roasted`}
      </Typography>
    </Box>
  );
};

export default SocialProof;
