import logo from "./logo.svg";
import "./App.css";
import { Box, ThemeProvider } from "@mui/material";
import { theme } from "./Components/MuiShared/Theme";
import DefaultTemplate from "./Components/Authentication/DefaultTemplate/DefaultTemplate";
import Login from "./Components/Authentication/Login/Login";
import SignUp from "./Components/Authentication/SignUp/SignUp";
import HomePage from "./Components/MainPages/HomePage/HomePage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        paddingX={"20px"}
        maxWidth="390px"
        minHeight={"845px"}
        className="serviceCenter"
        alignItems={"start"}
        border={"1px solid #000"}
        margin={"80px auto"}
      >
        {/* <DefaultTemplate /> */}
        {/* <Logi n /> */}
        {/* <SignUp /> */}
        <HomePage />
      </Box>
    </ThemeProvider>
  );
}

export default App;
