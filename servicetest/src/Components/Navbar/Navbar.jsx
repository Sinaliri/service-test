import { Box, Typography } from "@mui/material";
import styles from "./Navbar.module.scss";
import { Link, useLocation } from "react-router-dom";

import { useEffect, useState } from "react";
import { navbarItems } from "../../Utils/Variant";
const Navbar = () => {
  const [selectedMenu, setSelectedMenu] = useState("");
  const location = useLocation();
  console.log(location);
  useEffect(() => {
    let pathes = location.pathname.split("/");
    console.log(pathes);
    switch (
      pathes[1] // Use pathes[1] to get the relevant part of the path
    ) {
      case "main":
        setSelectedMenu("Home");
        break;
      case "booking":
        setSelectedMenu("Booking");
        break;
      case "calendar":
        setSelectedMenu("Calendar"); // Fixed the typo
        break;
      case "inbox":
        setSelectedMenu("Inbox");
        break;
      case "profile":
        setSelectedMenu("Profile");
        break;
      default:
        // Set a default value for selectedMenu if none of the cases match
        setSelectedMenu("Default");
    }
  }, []);
  console.log(selectedMenu);
  return (
    <Box className={styles.NavbarContainer} bgcolor={"secondary"}>
      <ul>
        {navbarItems.map((item) => {
          return (
            <Link to={item.link} color="inherit">
              <li onClick={() => setSelectedMenu(item.title)}>
                <Box
                  color={selectedMenu === item.title ? "#7210FF" : "#D4BFBF"}
                  className={styles.navbarItems}
                >
                  {item.icon}
                  <Typography variant="navbarItem" color={"inherit"}>
                    {item.title}
                  </Typography>
                </Box>
              </li>
            </Link>
          );
        })}
      </ul>
    </Box>
  );
};

export default Navbar;
