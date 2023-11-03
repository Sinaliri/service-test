import { Grid } from "@mui/material";
import React from "react";
import PushBack from "../../Modules/PushBack/PushBack";
import { SpecialOffers } from "../../../Utils/Variant";

const SpecialOffer = () => {
  return (
    <Grid container my={"50px"}>
      <Grid item xs={12}>
        <PushBack title={"Special Offers"} />
      </Grid>
      <Grid item xs={12} container my={"40px"}>
        {SpecialOffers.map((item, index) => {
          return (
            <Grid item xs={12} key={index} mb={"16px"}>
              <img src={item} alt={index} width={"100%"} height={"132px"} />
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default SpecialOffer;
