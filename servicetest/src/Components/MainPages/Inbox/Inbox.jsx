import React from "react";
import Navbar from "../../Navbar/Navbar";
import { Grid } from "@mui/material";
import PushBack from "../../Modules/PushBack/PushBack";

const Inbox = () => {
  return (
    <Grid container my={"50px"} position={"relative"}>
      <Grid item xs={12}>
        <PushBack title={"Inbox"} />
      </Grid>

      <Navbar />
    </Grid>
  );
};

export default Inbox;
