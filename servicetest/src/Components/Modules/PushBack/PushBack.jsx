import { Box } from "@mui/material";
import React from "react";
import BackAngel from "../../../assets/Icons/BackAngel";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const PushBack = ({ link }) => {
  const navigate = useNavigate();
  return (
    <Box
      display={"flex"}
      className="serviceCenter"
      justifyContent={"flex-start"}
    >
      <Box onClick={() => navigate(-1)}>
        <BackAngel />
      </Box>
    </Box>
  );
};

export default PushBack;
