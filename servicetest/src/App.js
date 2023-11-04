import logo from "./logo.svg";
import "./App.css";
import { Box, ThemeProvider } from "@mui/material";
import { theme } from "./Components/MuiShared/Theme";
import DefaultTemplate from "./Components/Authentication/DefaultTemplate/DefaultTemplate";
import Login from "./Components/Authentication/Login/Login";
import SignUp from "./Components/Authentication/SignUp/SignUp";
import HomePage from "./Components/MainPages/HomePage/HomePage";
import { Route, Routes, useNavigate } from "react-router-dom";
import ServicePage from "./Components/MainPages/ServicePage/ServicePage";
import ServiceDetail from "./Components/MainPages/ServiceDetail/ServiceDetail";
import Bookmarks from "./Components/MainPages/Bookmarks/Bookmarks";
import Notifications from "./Components/MainPages/Notifications/Notifications";
import SpecialOffer from "./Components/MainPages/SpecialOffer/SpecialOffer";
import Profile from "./Components/MainPages/Profile/Profile";
import EditProfile from "./Components/MainPages/EditProfile/EditProfile";
import MostPopularServices from "./Components/MainPages/MostPopularServices/MostPopularServices";
import Booking from "./Components/MainPages/Booking/Booking";
import Calendar from "./Components/MainPages/Calender/Calendar";
import Inbox from "./Components/MainPages/Inbox/Inbox";
import Navbar from "./Components/Navbar/Navbar";
import { Provider, useDispatch } from "react-redux";
import store from "./Redux/Store";
import { useEffect } from "react";
import { fetchData } from "./Redux/WorkerSlice/WorkerSlice";
import ExtraPages from "./Components/MainPages/ExtraPages/ExtraPages";
import Messages from "./Components/MainPages/Inbox/Messages/Messages";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Box
          paddingX={"20px"}
          maxWidth="390px"
          minHeight={"845px"}
          height={"100vh"}
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
            <Route path="/profile/extrapages/:id" element={<ExtraPages />} />
            <Route path="/profile/editprofile" element={<EditProfile />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/inbox/Messages/:id" element={<Messages />} />
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/main" element={<HomePage />} />
          </Routes>
        </Box>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
