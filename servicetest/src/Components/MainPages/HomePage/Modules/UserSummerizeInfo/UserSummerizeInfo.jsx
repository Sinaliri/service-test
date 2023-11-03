import { Box, Grid, Typography } from "@mui/material";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./UserSummerizeInfo.module.scss";
import { userSelector } from "../../../../../Redux/selector";
const UserSummerizeInfo = () => {
  const user = useSelector((state) => state.user.user);
  return (
    <Grid item xs={12} container alignItems={"center"} m="0" mt="10px">
      <Grid item xs={10} container>
        <Grid item xs={2}>
          <Box className={`serviceCenter ${styles.imageWrapper}`}>
            {user.image && <img src={user.image} alt="user" />}
          </Box>
        </Grid>
        <Grid item xs={10} display={"flex"} flexDirection={"column"}>
          <Typography variant="h5" color={"gray"}>
            Good morning
          </Typography>
          <Typography variant="h3">{user.name}</Typography>
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
