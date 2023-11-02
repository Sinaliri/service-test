import { Grid } from "@mui/material";
import React from "react";
import SectionHeader from "../../../Modules/SectionHeader/SectionHeader";
import SectionHeaderimg from "../../../../assets/Images/banner.png";

const SpecialOffer = () => {
  return (
    <Grid item xs={12} container>
      <SectionHeader
        sectionName={"Special offer"}
        link={"/main/specialOffers"}
      />
      <img
        src={SectionHeaderimg}
        alt="SectionHeaderimg"
        width={"100%"}
        height={"132px"}
      />
    </Grid>
  );
};

export default SpecialOffer;
