import React, { useEffect, useState } from "react";
import { Users } from "../../../Utils/Variant";
import { Grid } from "@mui/material";
import UserCard from "../UserCard/UserCard";

const UsersFilterByCategory = ({ id }) => {
  const [filterUsers, setfilterUsers] = useState([]);

  useEffect(() => {
    if (id === "All") {
      return setfilterUsers(Users);
    }
    const newUsers = Users.filter((item) => item["categoryId"] === id);
    return setfilterUsers(newUsers);
  }, [id]);
  return (
    <Grid item xs={12} container>
      {filterUsers.length > 0 &&
        filterUsers.map((item) => {
          return (
            <UserCard
              image={item.image}
              categoryId={item.categoryId}
              userName={item.userName}
              price={item.price}
              id={item.id}
              views={item.views}
              position={item.position}
              bookmarked={item.bookmarked}
              rate={item.rate}
              key={item.id}
            />
          );
        })}
    </Grid>
  );
};

export default UsersFilterByCategory;
