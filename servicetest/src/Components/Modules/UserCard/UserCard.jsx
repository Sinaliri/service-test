import { Box, Grid, Typography } from "@mui/material";
import styles from "./UserCard.module.scss";
import BookmarkCheckBox from "../../MuiShared/BookmarkCheckBox";
import { useDispatch } from "react-redux";
import { updatebookmarks } from "../../../Redux/WorkerSlice/WorkerSlice";

const UserCard = ({
  image,
  categoryId,
  userName,
  position,
  price,
  rate,
  views,
  bookmarked,
  id,
  bookmarkAvailable = false,
}) => {
  const dispatch = useDispatch();
  const handleBookmarks = (id) => {
    dispatch(updatebookmarks(id));
  };
  return (
    <Grid
      item
      xs={12}
      container
      spacing={2}
      className={styles.UserCardContainer}
      padding={0}
    >
      <Grid item xs={4} className="serviceCenter" padding={"0 !important"}>
        <Box className={`${styles.UserImageWrapper} serviceCenter`}>
          <img src={image} alt={id} />
        </Box>
      </Grid>
      <Grid item xs={7} className={styles.UserDescription}>
        <Typography variant="smallText">{userName}</Typography>
        <Typography variant="boldText">{position}</Typography>
        <Typography variant="boldText" color={"primary"}>
          $ {price}
        </Typography>
        <Typography variant="smallText">{`${rate} | ${views} views`}</Typography>
      </Grid>
      {bookmarkAvailable && (
        <Grid
          item
          xs={1}
          justifyContent={"flex-end"}
          display={"flex"}
          alignItems={"flex-start"}
        >
          <BookmarkCheckBox
            id={id}
            value={bookmarked}
            onChangleHandler={handleBookmarks}
          />
        </Grid>
      )}
    </Grid>
  );
};

export default UserCard;
