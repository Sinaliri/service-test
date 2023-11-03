import { Box, Divider, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import styles from "./Profile.module.scss";
import PushBack from "../../Modules/PushBack/PushBack";
import { useSelector } from "react-redux";
import { userSelector } from "../../../Redux/selector";
import { ProfileMenu } from "../../../Utils/Variant";
import ProfileButton from "./Modules/ProfileButton/ProfileButton";
import Navbar from "../../Navbar/Navbar";
const Profile = () => {
  const user = useSelector((state) => userSelector(state));
  return (
    <Grid container my={"50px"} position={"relative"}>
      <Grid item xs={12}>
        <PushBack title={"Profile"} />
      </Grid>
      <Grid item xs={12} container my={"40px"}>
        <Grid item xs={12} className="serviceCenter" flexDirection={"column"}>
          <Box className={styles.UserImage}>
            <img src={user.image} alt={user.name} />
          </Box>
          <Typography variant="h3">{user.name}</Typography>
        </Grid>
        <Divider sx={{ width: "100%", marginY: "30px" }} />
        {ProfileMenu.map((item) => {
          return <ProfileButton key={item.title} item={item} />;
        })}
      </Grid>
      <Navbar />
    </Grid>
  );
};

export default Profile;
