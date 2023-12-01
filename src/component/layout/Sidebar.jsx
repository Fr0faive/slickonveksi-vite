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
import Logo from "../Elements/Logo/Logo";
import { Link } from "react-router-dom";
import Button from "../Elements/Button";
import authService from "../../services/auth.service";

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
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden text-gray-900"
        >
          Open drawer
        </label>
        {children}
      </div>
      <div className="drawer-side bg-[#FFF0E7] text-gray-900 font-semibold">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu p-4 w-80 min-h-full">
          <div className="mb-10 p-5 flex flex-wrap justify-center items-center gap-4">
            <Logo size="w-10" />
            <span className="text-3xl">Slickonveksi</span>
          </div>
          <div className="flex flex-col gap-5 justify-center">
            <Link
              to={"/dashboard"}
              className="flex flex-row gap-3 px-6 py-3 rounded-box items-center hover:bg-white"
            >
              <PresentationChartBarIcon className="h-10 w-10" />
              <span className="text-2xl">Dashboard</span>
            </Link>
            <Link
              to={"/dashboard/products"}
              className="flex flex-row gap-3 px-6 py-3 rounded-box items-center hover:bg-white"
            >
              <ShoppingBagIcon className="h-10 w-10" />
              <span className="text-2xl">Products</span>
            </Link>
            <Link className="flex flex-row gap-3 px-6 py-3 rounded-box items-center hover:bg-white">
              <InboxIcon className="h-10 w-10" />
              <span className="text-2xl">Inbox</span>
            </Link>
            <Link className="flex flex-row gap-3 px-6 py-3 rounded-box items-center hover:bg-white">
              <UserCircleIcon className="h-10 w-10" />
              <span className="text-2xl">Profile</span>
            </Link>
            <Link className="flex flex-row gap-3 px-6 py-3 rounded-box items-center hover:bg-white">
              <Cog6ToothIcon className="h-10 w-10" />
              <span className="text-2xl">Settings</span>
            </Link>
            <div className="p-5">
              <Button children="Logout" type="button" onClick={handleLogout} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
