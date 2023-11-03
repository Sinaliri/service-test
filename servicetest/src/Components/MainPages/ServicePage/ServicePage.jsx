import { Grid } from "@mui/material";
import React from "react";
import PushBack from "../../Modules/PushBack/PushBack";
import { services } from "../../../Utils/Variant";
import Service from "../../Modules/Service/Service";

const ServicePage = () => {
  const AllServices = services.filter((item) => item.id !== "More");
  return (
    <Grid container my={"50px"}>
      <Grid item xs={12}>
        <PushBack title={"All Service"} />
      </Grid>
      <Grid item xs={12} container my={"40px"}>
        {AllServices.map((item) => {
          return (
            <Service
              title={item.title}
              id={item.id}
              key={item.id}
              bgcolor={item.bgColor}
              icon={item.icon}
            />
          );
        })}
      </Grid>
    </Grid>
  );
};

export default ServicePage;
