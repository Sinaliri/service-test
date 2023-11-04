import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import PushBack from "../../Modules/PushBack/PushBack";
import Navbar from "../../Navbar/Navbar";

const Calendar = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Grid container my={"50px"} position={"relative"}>
      <Grid item xs={12}>
        <PushBack title={"Calender"} />
      </Grid>

      <Navbar />
    </Grid>
  );
};

export default Calendar;
