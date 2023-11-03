import FaceBook from "../assets/Icons/Facebook.svg";
import Google from "../assets/Icons/Google Plus.svg";
import Apple from "../assets/Icons/Apple.svg";
import Cleaning from "../assets/Icons/image 8.svg";
import More from "../assets/Icons/image 12.svg";
import Repairing from "../assets/Icons/image 9.svg";
import Painting from "../assets/Icons/image 10.svg";
import Laundry from "../assets/Icons/image 11.svg";
import Shifting from "../assets/Icons/image 13.svg";
import Plumbing from "../assets/Icons/image 14.svg";
import user1 from "../assets/Images/user1.png";
import user2 from "../assets/Images/user2.png";
// Special offers
import SectionHeaderimg from "../assets/Images/specialOfferBanner/banner.png";
import SectionHeaderimg2 from "../assets/Images/specialOfferBanner/banner2.png";
import HomeIcon from "@mui/icons-material/Home";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import LanguageIcon from "@mui/icons-material/Language";
import SecurityIcon from "@mui/icons-material/Security";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Brightness6OutlinedIcon from "@mui/icons-material/Brightness6Outlined";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import LogoutIcon from "@mui/icons-material/Logout";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { v4 as uuidv4 } from "uuid";

export const groupButton = [
  {
    id: "Facebook",
    Text: "Facebook",
    icon: FaceBook,
    onClick: () => console.log("clicked"),
  },
  {
    id: "Google",
    Text: "Google",
    icon: Google,
    onClick: () => console.log("clicked"),
  },
  {
    id: "Apple",
    Text: "Apple",
    icon: Apple,
    onClick: () => console.log("clicked"),
  },
];
export const services = [
  { id: "Cleaning", title: "Cleaning", icon: Cleaning, bgColor: "#7210FF" },
  { id: "Repairing", title: "Repairing", icon: Repairing, bgColor: "#FFEF00" },
  { id: "Painting", title: "Painting", icon: Painting, bgColor: "#10D6FF" },
  { id: "Laundry", title: " Laundry", icon: Laundry, bgColor: "#D110FF" },
  { id: "Painting", title: "Painting", icon: Painting, bgColor: "#10D6FF" },
  { id: "Plumbing", title: "Plumbing", icon: Plumbing, bgColor: "#10FF20" },
  { id: "Shifting", title: "Shifting", icon: Shifting, bgColor: "#10FFB6" },
  { id: "Cleaning", title: "Cleaning", icon: Cleaning, bgColor: "#7210FF" },
  { id: "Repairing", title: "Repairing", icon: Repairing, bgColor: "#FFEF00" },
  { id: "Painting", title: "Painting", icon: Painting, bgColor: "#10D6FF" },
  { id: "Laundry", title: " Laundry", icon: Laundry, bgColor: "#D110FF" },
  { id: "Painting", title: "Painting", icon: Painting, bgColor: "#10D6FF" },
  { id: "Plumbing", title: "Plumbing", icon: Plumbing, bgColor: "#10FF20" },
  { id: "Shifting", title: "Shifting", icon: Shifting, bgColor: "#10FFB6" },
  { id: "More", title: "More", icon: More, bgColor: "#FFBF10" },
];
const uniqueServiceMap = new Map();

for (const service of services) {
  if (service.id !== "More") {
    const key = `${service.id}-${service.title}`;

    if (!uniqueServiceMap.has(key)) {
      uniqueServiceMap.set(key, service);
    }
  }
}

const uniqueServices = Array.from(uniqueServiceMap.values());
uniqueServices.unshift({ id: "All", title: "All" });

console.log(uniqueServices);

// const Users = [
//   {
//     id: 1,
//     position: "House Cleaning",
//     price: "25",
//     userName: "Kaley Danford",
//     bookmarked: true,
//     image: user1,
//     categoryId: "Cleaning",
//     rate: "4.5",
//     views: 1254,
//   },
//   {
//     id: 2,
//     position: "Floor Cleaning",
//     price: "126",
//     userName: "Kaley Danford",
//     bookmarked: false,
//     image: user2,
//     categoryId: "Repairing",
//     rate: "4.2",
//     views: 1354,
//   },
//   {
//     id: 4,
//     position: "Floor Cleaning",
//     price: 360,
//     userName: "John Kanrad",
//     bookmarked: false,
//     image: user1,
//     categoryId: "Laundry",
//     rate: "4.2",
//     views: 1354,
//   },
//   {
//     id: 3,
//     position: "Roof Painting",
//     price: 360,
//     userName: "John Danford",
//     bookmarked: true,
//     image: user2,
//     categoryId: "Painting",
//     rate: "3.2",
//     views: 1254,
//   },
// ];
const SpecialOffers = [
  SectionHeaderimg,
  SectionHeaderimg2,
  SectionHeaderimg,
  SectionHeaderimg2,
  SectionHeaderimg,
];
const navbarItems = [
  { title: "Home", link: "/main", icon: <HomeIcon fontSize="inherit" /> },
  {
    title: "Booking",
    link: "/booking",
    icon: <AutoStoriesOutlinedIcon fontSize="inherit" />,
  },
  {
    title: "Calendar",
    link: "/calenda9r",
    icon: <CalendarMonthIcon fontSize="inherit" />,
  },
  { title: "Inbox", link: "/inbox", icon: <EmailIcon fontSize="inherit" /> },
  {
    title: "Profile",
    link: "/profile",
    icon: <PersonIcon fontSize="inherit" />,
  },
];
const ProfileMenu = [
  {
    title: "Edit Profile",
    link: "/profile/editprofile",
    icon: <PersonIcon fontSize="inherit" />,
  },
  {
    title: "Notification",
    link: "/main/notifications",
    icon: <NotificationsNoneOutlinedIcon fontSize="inherit" />,
  },
  {
    title: "Payment",
    link: "/profile/extrapages",
    icon: <LocalAtmIcon fontSize="inherit" />,
  },
  {
    title: "Security",
    link: "/profile/extrapages",
    icon: <SecurityIcon fontSize="inherit" />,
  },
  {
    title: "Language",
    link: "/profile/extrapages",
    icon: <LanguageIcon fontSize="inherit" />,
  },
  {
    title: "Dark mode",
    link: "/profile/extrapages",
    icon: <Brightness6OutlinedIcon fontSize="inherit" />,
  },
  {
    title: "Privacy Policy",
    link: "/profile/extrapages",
    icon: <CorporateFareIcon fontSize="inherit" />,
  },
  {
    title: "Help Center",
    link: "/profile/extrapages",
    icon: <QuestionMarkIcon fontSize="inherit" />,
  },
  {
    title: "Invite Friends",
    link: "/profile/extrapages",
    icon: <PeopleAltIcon fontSize="inherit" />,
  },
  {
    title: "Logout",
    link: "/",
    icon: <LogoutIcon fontSize="inherit" />,
  },
];
export { uniqueServices, SpecialOffers, ProfileMenu, navbarItems };
