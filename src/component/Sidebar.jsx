import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import Logo from "./Elements/Logo/Logo";
import { Link } from "react-router-dom";
import Button from "./Elements/Button";
import authService from "../services/auth.service";

const Sidebar = () => {
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await authService.logoutUser();
      alert("Logout success");
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-screen w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-10 p-4 flex flex-wrap justify-center items-center gap-4">
        <Logo size="w-1/4" />
        <span>Slickonveksi</span>
      </div>
      <div className="flex flex-col gap-5">
        <Link className="flex flex-row gap-3 px-6 items-center">
          <PresentationChartBarIcon className="h-5 w-5" />
          <span>Dashboard</span>
        </Link>
        <Link className="flex flex-row gap-3 px-6 items-center">
          <ShoppingBagIcon className="h-5 w-5" />
          <span>Products</span>
        </Link>
        <Link className="flex flex-row gap-3 px-6 items-center">
          <InboxIcon className="h-5 w-5" />
          <span>Inbox</span>
        </Link>
        <Link className="flex flex-row gap-3 px-6 items-center">
          <UserCircleIcon className="h-5 w-5" />
          <span>Profile</span>
        </Link>
        <Link className="flex flex-row gap-3 px-6 items-center">
          <Cog6ToothIcon className="h-5 w-5" />
          <span>Settings</span>
        </Link>
        <div className="my-auto divide-y divide-blue-gray-500/10">
          <Button children="Logout" type="button" onClick={handleLogout} />
        </div>
      </div>
    </div>
    // <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
    //   <div className="mb-2 p-4">
    //     <Typography variant="h5" color="blue-gray">
    //       Sidebar
    //     </Typography>
    //   </div>
    //   <List>
    //     <ListItem>
    //       <ListItemPrefix>
    //         <PresentationChartBarIcon className="h-5 w-5" />
    //       </ListItemPrefix>
    //       Dashboard
    //     </ListItem>
    //     <ListItem>
    //       <ListItemPrefix>
    //         <ShoppingBagIcon className="h-5 w-5" />
    //       </ListItemPrefix>
    //       E-Commerce
    //     </ListItem>
    //     <ListItem>
    //       <ListItemPrefix>
    //         <InboxIcon className="h-5 w-5" />
    //       </ListItemPrefix>
    //       Inbox
    //       <ListItemSuffix>
    //         <Chip
    //           value="14"
    //           size="sm"
    //           variant="ghost"
    //           color="blue-gray"
    //           className="rounded-full"
    //         />
    //       </ListItemSuffix>
    //     </ListItem>
    //     <ListItem>
    //       <ListItemPrefix>
    //         <UserCircleIcon className="h-5 w-5" />
    //       </ListItemPrefix>
    //       Profile
    //     </ListItem>
    //     <ListItem>
    //       <ListItemPrefix>
    //         <Cog6ToothIcon className="h-5 w-5" />
    //       </ListItemPrefix>
    //       Settings
    //     </ListItem>
    //     <ListItem>
    //       <ListItemPrefix>
    //         <PowerIcon className="h-5 w-5" />
    //       </ListItemPrefix>
    //       Log Out
    //     </ListItem>
    //   </List>
    // </Card>
  );
};

export default Sidebar;
