import { Grid } from "@mui/material";
import React from "react";
import CallItem from "../CallItem/CallItem";

const CallLayout = ({ Array=[] }) => {
  return (
    <Grid container spacing={1}>
      {Array && Array.length > 0
        ? Array.map((item) => {
            return <CallItem key={item.id} item={item} />;
          })
        : "no Calls recieved"}
    </Grid>
  );
};

export default CallLayout;
