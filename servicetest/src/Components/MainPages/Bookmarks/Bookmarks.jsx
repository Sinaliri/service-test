import { Grid } from "@mui/material";
import React, { useState } from "react";
import PushBack from "../../Modules/PushBack/PushBack";
import { SpecialOffers, uniqueServices } from "../../../Utils/Variant";
import GroupButton from "../../Modules/GroupButton/GroupButton";
import UsersFilterByCategory from "../../Modules/UsersFilterByCategory/UsersFilterByCategory";
import { useSelector } from "react-redux";
import { workerSelector } from "../../../Redux/selector";
const Bookmarks = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    uniqueServices[0].id
  );
  const clickHandler = (id) => {
    setSelectedCategory(id);
  };
  const Users = useSelector((state) => workerSelector(state));

  let Bookmarks = Users.filter((item) => item.bookmarked === true);

  return (
    <Grid container my={"50px"}>
      <Grid item xs={12}>
        <PushBack title={"My Bookmarks"} />
      </Grid>
      <Grid item xs={12} container my={"40px"}>
        <GroupButton
          Array={uniqueServices}
          value={selectedCategory}
          ClickHandler={clickHandler}
        />
        <UsersFilterByCategory
          id={selectedCategory}
          Array={Bookmarks}
          bookmarkAvailable={true}
        />
      </Grid>
    </Grid>
  );
};

export default Bookmarks;
