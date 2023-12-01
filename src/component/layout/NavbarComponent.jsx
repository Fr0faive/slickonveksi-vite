import { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog } from "@headlessui/react";
import authService from "../../services/auth.service";

const navigation = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "Product", href: "/products" },
  { id: 3, name: "Contact", href: "/contact" },
  { id: 4, name: "Tentang Kami", href: "/tentang" },
];

const NavbarComponent = () => {
  const hasToken = localStorage.getItem("Authorization");
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <header
      className={
        colorChange
          ? "bg-white/30 backdrop-blur-md fixed inset-x-0 top-0 z-50"
          : "fixed inset-x-0 top-0 z-50"
      }
    >
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link
            to={"/"}
            className="-m-1.5 p-1.5 flex justify-between items-center"
          >
            <img
              className="h-8 w-auto"
              src="/assets/logo.png"
              alt="slickonveksi"
            />
            <span className="text-black ml-3 font-semibold">Slickonveksi.</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.id}
              to={item.href}
              className="text-sm font-semibold leading-6 py-2 px-4 rounded-full hover:bg-[#FFD7C3] text-gray-900"
            >
              {item.name}
            </Link>
          ))}
        </div>
        {hasToken ? (
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <div className="dropdown dropdown-hover dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="text-sm font-semibold leading-6 text-gray-900 rounded-xl py-2 px-4 bg-[#FFD7C3]"
              >
                User <span aria-hidden="true">&rarr;</span>
              </div>
              <ul className="menu dropdown-content z-[1] p-2 shadow bg-white rounded-box w-52 mt-2">
                <li>
                  <Link to={"/dashboard"} className="text-gray-900 text-sm">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="text-sm font-semibold leading-6 text-gray-900 rounded-box py-2 px-4 bg-[#FFD7C3]"
                  >
                    Logout <span aria-hidden="true">&rarr;</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              to={"/auth/login"}
              className="text-sm font-semibold leading-6 text-gray-900 rounded-box py-2 px-4 bg-[#FFD7C3]"
            >
              Login <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        )}
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link
              to={"/"}
              className="-m-1.5 p-1.5 flex justify-between items-center"
            >
              <img className="h-8 w-auto" src="/assets/logo.png" alt="" />
              <span className="text-black ml-3 font-semibold">
                Slickonveksi.
              </span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.id}
                    to={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>

    // <div className="navbar fixed items-center bg-blue-primary text-white  font-sans">
    //   <div className="text-center navbar-start ml-10">
    //     <Link to="/" className="uppercase font-bold text-2xl">
    //       Slickonveksi.
    //     </Link>
    //   </div>
    //   <div className="text-center">
    //     <Link to="/products" className="mx-5">
    //       Products
    //     </Link>
    //     <Link to="/products" className="mx-5">
    //       About
    //     </Link>
    //     <Link to="/products" className="mx-5">
    //       Contact
    //     </Link>
    //   </div>
    //   <div className="text-center navbar-end mr-10">
    //     <Link to="/products" className="mx-5">
    //       Login
    //     </Link>
    //   </div>
    // </div>
  );
};

export default NavbarComponent;
