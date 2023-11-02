import { Grid } from "@mui/material";
import React from "react";
import SectionHeader from "../../../Modules/SectionHeader/SectionHeader";
import { services } from "../../../../Utils/Variant";
import Service from "../../../Modules/Service/Service";

const Services = () => {
  const More = services.find((item) => item.id === "More");
  const sevenItems = services.slice(0, 7).concat([More]);
  return (
    <Grid item xs={12} container mb={"22px"}>
      <SectionHeader sectionName={"Services"} link={"/main/services"} />
      <Grid item xs={12} container spacing={1}>
        {sevenItems.map((item) => {
          return (
            <Service
              id={item.id}
              key={item.id}
              title={item.title}
              bgcolor={item.bgColor}
              icon={item.icon}
              link={item.link}
            />
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Services;
