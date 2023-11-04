import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const Terms = ({ id, name, count, decreaseFunction, increaseFunction }) => {
  return (
    <Grid
      item
      xs={12}
      container
      alignItems={"center"}
      height={"58px"}
      border={"1px solid #FBFFF1"}
      borderRadius={"20px"}
      boxShadow={"2px 2px 5px 1px rgba(0, 0, 0, 0.1608)"}
      my={"10px"}
      justifyContent={"space-between"}
    >
      <Grid item xs={8}>
        <Typography ml={"10px"} variant="serviceTitle">
          {name}
        </Typography>
      </Grid>
      <Grid item xs={3} container spacing={2} mr={1}>
        <Grid
          item
          xs={4}
          className="serviceCenter"
          color={"#fff"}
          onClick={() => increaseFunction(id)}
          padding={0}
        >
          <Box
            color={"primary.main"}
            className="serviceCenter"
            bgcolor={"secondary.main"}
            width={"28px"}
            height={"28px"}
            borderRadius={"50%"}
            fontSize={"18px"}
            fontWeight={700}
          >
            {" "}
            +{" "}
          </Box>
        </Grid>
        <Grid
          item
          xs={4}
          className="serviceCenter"
          color={"primary.main"}
          fontSize={"14px"}
          fontWeight={700}
        >
          {count}
        </Grid>
        <Grid
          item
          xs={4}
          className="serviceCenter"
          color={"primary.main"}
          onClick={() => decreaseFunction(id)}
        >
          <Box
            color={"primary.main"}
            className="serviceCenter"
            bgcolor={"secondary.main"}
            width={"28px"}
            height={"28px"}
            borderRadius={"50%"}
            fontSize={"18px"}
            fontWeight={700}
          >
            -
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Terms;
