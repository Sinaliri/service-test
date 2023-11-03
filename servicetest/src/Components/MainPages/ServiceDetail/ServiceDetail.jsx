import { Grid } from "@mui/material";
import React, { useState } from "react";
import PushBack from "../../Modules/PushBack/PushBack";
import UsersFilterByCategory from "../../Modules/UsersFilterByCategory/UsersFilterByCategory";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { workerSelector } from "../../../Redux/selector";
const ServiceDetail = () => {
  const params = useParams();
  console.log(params);
  const id = params.id;
  const Users = useSelector((state) => workerSelector(state));
  return (
    <Grid container my={"50px"}>
      <Grid item xs={12}>
        <PushBack title={id} />
      </Grid>
      <Grid item xs={12} container my={"40px"}>
        <UsersFilterByCategory id={id} Array={Users} bookmarkAvailable={true} />
      </Grid>
    </Grid>
  );
};

export default ServiceDetail;
