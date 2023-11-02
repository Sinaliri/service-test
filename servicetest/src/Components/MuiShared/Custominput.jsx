import {
  FilledInput,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import styles from "./Styles.module.scss";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
const Custominput = ({
  onChangeHandler,
  value,
  type = "text",
  helperText = "",
  name,
  icon,
}) => {
  const [showPassword, setShowPassword] = useState(
    type === "password" ? false : true
  );
  const [error, setError] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const Validation = () => {
    if (!value) {
      setError(true, () => console.log(error));
    } else {
      setError(false, () => console.log(error));
    }
  };
  return (
    <FormControl
      sx={{
        m: 1,
        height: "56px",
        width: "100%",
        borderRadius: "20px",
        mb: "20px",
      }}
      style={{ borderRadius: "20px" }}
      variant="filled"
    >
      <FilledInput
        placeholder=""
        className={styles.CustomInput}
        id="filled-adornment-password"
        type={showPassword ? "text" : type}
        value={value}
        onChange={(e) => {
          if (name) {
            onChangeHandler(e.target.value, name);
          } else {
            onChangeHandler(e.target.value);
          }
        }}
        onBlur={Validation}
        error={error}
        sx={{ borderRadius: "20px", height: "56px" }}
        style={{ borderRadius: "20px" }}
        inputProps={{
          className: "",

          placeholder: name,
          style: {
            display: "flex",
            fontSize: "15px",
            padding: "10px",
            borderRadius: "20px",
          },
        }}
        startAdornment={
          <InputAdornment
            position="start"
            className="serviceCenter"
            sx={{ mb: "15px", color: "grey" }}
          >
            <IconButton
              className="serviceCenter"
              onClick={name === "password" ? handleClickShowPassword : null}
              onMouseDown={name === "password" ? handleMouseDownPassword : null}
              edge="end"
              sx={{ fontSize: "20px" }}
            >
              {name === "password" && showPassword ? (
                <VisibilityOff sx={{ fontSize: "inherit", color: "inherit" }} />
              ) : (
                name === "password" && (
                  <Visibility sx={{ fontSize: "inherit", color: "inherit" }} />
                )
              )}
              {name === "email" && icon}
            </IconButton>
          </InputAdornment>
        }
      />
      <FormHelperText
        sx={{ color: "red", position: "absolute", bottom: "-25px" }}
      >
        {error === true && helperText}
      </FormHelperText>
    </FormControl>
  );
};

export default Custominput;
