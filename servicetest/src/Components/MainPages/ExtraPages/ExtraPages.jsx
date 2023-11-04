import { Grid } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import PushBack from "../../Modules/PushBack/PushBack";

const ExtraPages = () => {
  const params = useParams();
  const id = params.id;
  return (
    <Grid container my={"50px"}>
      <Grid item xs={12}>
        <PushBack title={id} />
      </Grid>
    </Grid>
  );
};

export default ExtraPages;
