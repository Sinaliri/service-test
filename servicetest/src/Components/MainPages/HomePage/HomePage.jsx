import { Divider, Grid } from "@mui/material";
import React, { useState } from "react";
import UserSummerizeInfo from "./Modules/UserSummerizeInfo";
import SearchBar from "./Modules/SearchBar";
import SpecialOffer from "./Modules/SpecialOffer";
import Services from "./Modules/Services";
import Categories from "./Modules/Categories";

const HomePage = () => {
  const [searchText, setSearchtext] = useState("");
  return (
    <Grid container spacing={2} margin={"0 auto"} flexDirection={"column"}>
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
    </Grid>
  );
};

export default HomePage;
