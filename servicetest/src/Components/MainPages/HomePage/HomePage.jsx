import { Grid } from "@mui/material";
import React from "react";
import UserSummerizeInfo from "./Modules/UserSummerizeInfo";

const HomePage = () => {
  return (
    <Grid
      container
      //   spacing={2}
      margin={"0px"}
      flexDirection={"column"}
    >
      <UserSummerizeInfo />
    </Grid>
  );
};

export default HomePage;
