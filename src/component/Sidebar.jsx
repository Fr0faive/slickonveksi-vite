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

const Sidebar = (props) => {
  const { children } = props;
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
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {children}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
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
    </div>
  );
};

export default Sidebar;
