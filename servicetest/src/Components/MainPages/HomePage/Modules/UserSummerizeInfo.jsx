import { Box, Grid, Typography } from "@mui/material";
import user from "../../../../assets/Images/user.png";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { Link } from "react-router-dom";
const UserSummerizeInfo = () => {
  return (
    <Grid item xs={12} container alignItems={"center"} m="0" mt="10px">
      <Grid item xs={10} container>
        <Grid item xs={2}>
          <Box
            borderRadius={"50%"}
            width={"39px"}
            height="36px"
            className="serviceCenter"
            sx={{ objectFit: "cover" }}
          >
            <img src={user} alt="user" />{" "}
          </Box>
        </Grid>
        <Grid item xs={10} display={"flex"} flexDirection={"column"}>
          <Typography variant="h5" color={"gray"}>
            Good morning
          </Typography>
          <Typography variant="h3">Andrew kidman</Typography>
        </Grid>
      </Grid>
      <Grid item xs={2} display={"flex"} justifyContent={"space-around"}>
        <Link to={"/main/bookmarks"}>
          <BookmarkBorderOutlinedIcon
            sx={{ color: "#6f6f6f", fontSize: "25px" }}
          />
        </Link>
        <Link to={"/main/notifications"}>
          <NotificationsNoneOutlinedIcon
            sx={{ color: "#6f6f6f", fontSize: "25px" }}
          />
        </Link>
      </Grid>
    </Grid>
  );
};

export default UserSummerizeInfo;
