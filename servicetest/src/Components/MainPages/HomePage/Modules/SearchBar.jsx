import { Grid } from "@mui/material";
import Custominput from "../../../MuiShared/Custominput";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
const SearchBar = ({ value, ChangeHandler, placeHolder }) => {
  return (
    <Grid item xs={12}>
      <Custominput
        value={value}
        onChangeHandler={ChangeHandler}
        type="text"
        placeHolder={placeHolder}
        icon={<SearchOutlinedIcon />}
      />
    </Grid>
  );
};

export default SearchBar;
