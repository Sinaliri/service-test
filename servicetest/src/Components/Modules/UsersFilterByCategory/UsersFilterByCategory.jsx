import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import UserCard from "../UserCard/UserCard";

const UsersFilterByCategory = ({ id, Array, bookmarkAvailable = false }) => {
  const [filterUsers, setfilterUsers] = useState([]);
  console.log(Array);

  useEffect(() => {
    console.log(Array);
    if (Array) {
      if (id === "All") {
        return setfilterUsers(Array);
      }
      const newUsers = Array.filter((item) => item["categoryId"] === id);
      return setfilterUsers(newUsers);
    }
  }, [id, Array]);
  return (
    <Grid item xs={12} container>
      {filterUsers.length > 0 ? (
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
              bookmarkAvailable={bookmarkAvailable}
            />
          );
        })
      ) : (
        <Box marginTop={"100px"} width={1} className="serviceCenter">
          <Typography color={"gray.main"}> not founded </Typography>
        </Box>
      )}
    </Grid>
  );
};

export default UsersFilterByCategory;
