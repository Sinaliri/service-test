import logo from "./logo.svg";
import "./App.css";
import { Box, ThemeProvider } from "@mui/material";
import { theme } from "./Components/MuiShared/Theme";
import DefaultTemplate from "./Components/Authentication/DefaultTemplate/DefaultTemplate";
import Login from "./Components/Authentication/Login/Login";
import SignUp from "./Components/Authentication/SignUp/SignUp";
import HomePage from "./Components/MainPages/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import ServicePage from "./Components/MainPages/ServicePage/ServicePage";
import ServiceDetail from "./Components/MainPages/ServiceDetail/ServiceDetail";
import Bookmarks from "./Components/MainPages/Bookmarks/Bookmarks";
import Notifications from "./Components/MainPages/Notifications/Notifications";
import SpecialOffer from "./Components/MainPages/SpecialOffer/SpecialOffer";
import Profile from "./Components/MainPages/Profile/Profile";
import EditProfile from "./Components/MainPages/EditProfile/EditProfile";
import MostPopularServices from "./Components/MainPages/MostPopularServices/MostPopularServices";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        paddingX={"20px"}
        maxWidth="390px"
        minHeight={"845px"}
        className="serviceCenter"
        alignItems={"start"}
        // border={"1px solid #000"}
        margin={"auto"}
      >
        <Routes>
          <Route path="/" element={<DefaultTemplate />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/main/services/:id" element={<ServiceDetail />} />
          <Route path="/main/services" element={<ServicePage />} />
          <Route path="/main/bookmarks" element={<Bookmarks />} />
          <Route path="/main/notifications" element={<Notifications />} />
          <Route path="/main/specialOffers" element={<SpecialOffer />} />
          <Route
            path="/main/mostPopularServices"
            element={<MostPopularServices />}
          />
          <Route path="/main/profile/editprofile" element={<EditProfile />} />
          <Route path="/main/profile" element={<Profile />} />
          <Route path="/main" element={<HomePage />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
