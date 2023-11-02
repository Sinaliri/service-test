import { Box } from "@mui/material";
import React from "react";
import BackAngel from "../../../assets/Icons/BackAngel";
import { Link } from "react-router-dom";

const PushBack = ({ link }) => {
  return (
    <Box
      display={"flex"}
      className="serviceCenter"
      justifyContent={"flex-start"}
    >
      <Link to={link}>
        <BackAngel />
      </Link>
    </Box>
  );
};

export default PushBack;
