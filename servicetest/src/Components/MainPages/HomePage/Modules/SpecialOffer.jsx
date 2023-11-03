import { Grid } from "@mui/material";
import React from "react";
import SectionHeader from "../../../Modules/SectionHeader/SectionHeader";
import { SpecialOffers } from "../../../../Utils/Variant";

const SpecialOffer = () => {
  return (
    <Grid item xs={12} container>
      <SectionHeader
        sectionName={"Special offer"}
        link={"/main/specialOffers"}
      />
      <img
        src={SpecialOffers[0]}
        alt="SectionHeaderimg"
        width={"100%"}
        height={"132px"}
      />
    </Grid>
  );
};

export default SpecialOffer;
