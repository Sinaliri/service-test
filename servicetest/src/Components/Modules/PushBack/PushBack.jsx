import { Box, Typography } from "@mui/material";
import React from "react";
import BackAngel from "../../../assets/Icons/BackAngel";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const PushBack = ({ title, link = -1 }) => {
  const navigate = useNavigate();
  return (
    <Box
      display={"flex"}
      className="serviceCenter"
      justifyContent={"flex-start"}
      alignItems={"center"}
    >
      <Box onClick={() => navigate(link)}>
        <BackAngel />
      </Box>
      <Typography variant="h2" color={"#000"} ml={"23px"}>
        {title}
      </Typography>
    </Box>
  );
};

export default PushBack;
