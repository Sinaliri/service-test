import { Divider, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import UserSummerizeInfo from "./Modules/UserSummerizeInfo/UserSummerizeInfo";
import SearchBar from "./Modules/SearchBar";
import SpecialOffer from "./Modules/SpecialOffer";
import Services from "./Modules/Services";
import Categories from "./Modules/Categories";
import Navbar from "../../Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../../../Redux/selector";
import { getUserData } from "../../../Utils/Api";
import { setUser } from "../../../Redux/UserSlice/userSlice";
import { useNavigate } from "react-router-dom";
import { fetchInboxData } from "../../../Redux/InboxSlice/InboxSlice";

const HomePage = () => {
  const [searchText, setSearchtext] = useState("");
  const Users = useSelector((state) => userSelector(state));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (Users.length < 1 && localStorage.getItem("userId")) {
      let userId = localStorage.getItem("userId");
      userId = JSON.parse(userId);
      getUserData(userId.id).then((res) => {
        console.log(res.data);
        dispatch(setUser(res.data));
        navigate("/main");
      });
    }
  }, [Users]);
  useEffect(() => {
    dispatch(fetchInboxData());
  }, []);
  return (
    <Grid
      container
      spacing={2}
      margin={"0 auto"}
      pb={"60px"}
      flexDirection={"column"}
      position={"relative"}
    >
      <>
        {" "}
        <UserSummerizeInfo />
        <SearchBar
          value={searchText}
          ChangeHandler={(e) => setSearchtext(e)}
          placeHolder="search"
        />
        <SpecialOffer />
        <Services />
        <Divider sx={{ width: "100%" }} />
        <Categories />
        <Navbar />{" "}
      </>
    </Grid>
  );
};

export default HomePage;
