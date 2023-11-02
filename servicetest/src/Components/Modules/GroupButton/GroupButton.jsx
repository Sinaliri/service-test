import { Grid } from "@mui/material";
import styles from "./GroupButton.module.scss";
import { uniqueServices } from "../../../Utils/Variant";
import CustomButton from "../../MuiShared/Button";

const GroupButton = ({ Array, value, ClickHandler }) => {
  return (
    <Grid item xs={12} container className={styles.GroupButtonContainer}>
      {Array.map((item) => {
        return (
          <Grid item mr={"5px"}>
            <CustomButton
              key={item.id}
              id={item.id}
              variant={value === item.id ? "contained" : "outlined"}
              onClickHandler={() => ClickHandler(item.id)}
              width="fit-content"
              height="32px"
            >
              {item.title}
            </CustomButton>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default GroupButton;
