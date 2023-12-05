// import {
//   Card,
//   Typography,
//   List,
//   ListItem,
//   ListItemPrefix,
//   ListItemSuffix,
//   Chip,
// } from "@material-tailwind/react";
// import {
//   PresentationChartBarIcon,
//   ShoppingBagIcon,
//   UserCircleIcon,
//   Cog6ToothIcon,
//   InboxIcon,
//   PowerIcon,
// } from "@heroicons/react/24/solid";
import Logo from "../Elements/Logo/Logo";
// import { Link } from "react-router-dom";
// import Button from "../Elements/Button";
import authService from "../../services/auth.service";
import React from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme, ConfigProvider } from "antd";
import { Link } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;

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
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const itemNav = [
    {
      key: "1",
      icon: <PieChartOutlined />,
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      key: "2",
      icon: <DesktopOutlined />,
      label: "Product",
      href: "/dashboard/products",
    },
    {
      key: "3",
      icon: <UserOutlined />,
      label: "User",
    },
    {
      key: "4",
      icon: <FileOutlined />,
      label: "Logout",
      onClick: handleLogout,
    },
  ];
  return (
    <>
      <Layout className="min-h-screen">
        <Sider
          style={{
            background: "#FFF0E7",
          }}
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="demo-logo-vertical text-gray-900 flex flex-wrap px-6 py-3 gap-2">
            <Logo size="w-7" />
            <span className="text-lg">Slickonveksi</span>
          </div>
          <Menu
            theme="dark"
            className="bg-[#FFF0E7] text-gray-900"
            mode="inline"
            // items={[
            //   UserOutlined,
            //   VideoCameraOutlined,
            //   UploadOutlined,
            //   UserOutlined,
            // ].map((icon, index) => ({
            //   key: String(index + 1),
            //   icon: React.createElement(icon),
            //   label: `nav ${index + 1}`,
            // }))}
          >
            {itemNav.map((item) => (
              <Menu.Item key={item.key} icon={item.icon} onClick={item.onClick}>
                <Link to={item.href}>{item.label}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          />
          <Content
            style={{
              margin: "24px 16px 0",
            }}
          >
            <div
              className="flex justify-center items-center"
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
              }}
            >
              {children}
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            Slickonveksi ©2023
          </Footer>
        </Layout>
      </Layout>
    </>
    // <div className="drawer lg:drawer-open">
    //   <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
    //   <div className="drawer-content flex flex-col items-center justify-center">
    //     <label
    //       htmlFor="my-drawer-2"
    //       className="btn btn-primary drawer-button lg:hidden text-gray-900"
    //     >
    //       Open drawer
    //     </label>
    //     {children}
    //   </div>
    //   <div className="drawer-side bg-[#FFF0E7] text-gray-900 font-semibold">
    //     <label
    //       htmlFor="my-drawer-2"
    //       aria-label="close sidebar"
    //       className="drawer-overlay"
    //     ></label>
    //     <div className="menu p-4 w-80 min-h-full">
    //       <div className="mb-10 p-5 flex flex-wrap justify-center items-center gap-4">
    // <Logo size="w-10" />
    // <span className="text-3xl">Slickonveksi</span>
    //       </div>
    //       <div className="flex flex-col gap-5 justify-center">
    //         <Link
    //           to={"/dashboard"}
    //           className="flex flex-row gap-3 px-6 py-3 rounded-box items-center hover:bg-white"
    //         >
    //           <PresentationChartBarIcon className="h-10 w-10" />
    //           <span className="text-2xl">Dashboard</span>
    //         </Link>
    //         <Link
    //           to={"/dashboard/products"}
    //           className="flex flex-row gap-3 px-6 py-3 rounded-box items-center hover:bg-white"
    //         >
    //           <ShoppingBagIcon className="h-10 w-10" />
    //           <span className="text-2xl">Products</span>
    //         </Link>
    //         <Link className="flex flex-row gap-3 px-6 py-3 rounded-box items-center hover:bg-white">
    //           <InboxIcon className="h-10 w-10" />
    //           <span className="text-2xl">Inbox</span>
    //         </Link>
    //         <Link className="flex flex-row gap-3 px-6 py-3 rounded-box items-center hover:bg-white">
    //           <UserCircleIcon className="h-10 w-10" />
    //           <span className="text-2xl">Profile</span>
    //         </Link>
    //         <Link className="flex flex-row gap-3 px-6 py-3 rounded-box items-center hover:bg-white">
    //           <Cog6ToothIcon className="h-10 w-10" />
    //           <span className="text-2xl">Settings</span>
    //         </Link>
    //         <div className="p-5">
    //           <Button children="Logout" type="button" onClick={handleLogout} />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Sidebar;
