import { Grid } from "@mui/material";
import React, { useState } from "react";
import PushBack from "../../Modules/PushBack/PushBack";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Terms from "./Terms/Terms";
import {
  decreaseCount,
  increaseCount,
} from "../../../Redux/ServiceSlice/ServiceSlice";
import CustomButton from "../../MuiShared/Button";

const ServicesSubServices = () => {
  const params = useParams();
  const dispatch = useDispatch();
  console.log(params);
  const name = params.name;
  const service = useSelector((state) => state.service.service);
  const [user, setUser] = useState({});
  // useEffect(() => {
  //   let user = communications.find((item) => item.id == id);
  //   setUser(user);
  //   console.log(user);
  // }, [id, communications]);
  const increase = (id) => {
    dispatch(increaseCount({ id }));
  };
  const decrease = (id) => {
    dispatch(decreaseCount({ id }));
  };
  return (
    <Grid container my={"50px"} position={"relative"}>
      <Grid item xs={12}>
        <PushBack title={name ?? ""} />
      </Grid>
      <Grid item xs={12} container position={"relative"}>
        {service.length > 0 &&
          service &&
          service.map((item) => {
            return (
              <Terms
                key={item.id}
                id={item.id}
                name={item.name}
                count={item.count}
                price={item.price}
                increaseFunction={increase}
                decreaseFunction={decrease}
              />
            );
          })}
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          position: "fixed",
          bottom: "0",
          right: "0",
          left: "0",
          margin: "auto",
          width: "inherit",
        }}
      >
        <CustomButton
          width="92%"
          variant={"contained"}
          onClickHandler={() => console.log("clicked")}
        >
          continue
        </CustomButton>
      </Grid>
    </Grid>
  );
};

export default ServicesSubServices;
