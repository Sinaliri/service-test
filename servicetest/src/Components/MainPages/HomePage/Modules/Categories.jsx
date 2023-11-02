import { Grid } from "@mui/material";
import React, { useState } from "react";
import SectionHeader from "../../../Modules/SectionHeader/SectionHeader";
import { uniqueServices } from "../../../../Utils/Variant";
import CustomButton from "../../../MuiShared/Button";
import GroupButton from "../../../Modules/GroupButton/GroupButton";
import UsersFilterByCategory from "../../../Modules/UsersFilterByCategory/UsersFilterByCategory";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    uniqueServices[0].id
  );
  const clickHandler = (id) => {
    setSelectedCategory(id);
  };
  return (
    <Grid item xs={12} container mb={"22px"}>
      <SectionHeader
        sectionName={"Most Popular Services"}
        link={"/main/mostPopularServices"}
      />
      <GroupButton
        Array={uniqueServices}
        value={selectedCategory}
        ClickHandler={clickHandler}
      />
      <UsersFilterByCategory id={selectedCategory} />
    </Grid>
  );
};

export default Categories;
