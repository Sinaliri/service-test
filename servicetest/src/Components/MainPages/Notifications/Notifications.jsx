import { Grid } from "@mui/material";
import React from "react";
import PushBack from "../../Modules/PushBack/PushBack";

const Notifications = () => {
  return (
    <Grid container my={"50px"} position={"relative"}>
      <Grid item xs={12}>
        <PushBack title={"Notifications"} />
      </Grid>
    </Grid>
  );
};

export default Notifications;
