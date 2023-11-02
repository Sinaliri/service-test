import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const SectionHeader = ({ sectionName, link }) => {
  return (
    <Box
      display={"flex"}
      width={1}
      justifyContent={"space-between"}
      alignItems={"center"}
      mb={"22px"}
    >
      <Typography variant="sectionHeader">{sectionName}</Typography>
      <Typography variant="SeeAll">
        <Link to={link}>See All</Link>
      </Typography>
    </Box>
  );
};

export default SectionHeader;
