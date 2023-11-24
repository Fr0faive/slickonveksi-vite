import { Link } from "react-router-dom";
import Logo from "../Elements/Logo/Logo";

const AuthLayout = (props) => {
  const { children, title } = props;
  return (
    <div className="bg-[#f2e6e0] h-screen backdrop-blur-md flex justify-center items-center">
      <div className="flex flex-wrap w-3/4">
        <div className="w-1/2 mx-auto bg-white flex justify-center items-center rounded-l-2xl">
          <Link to="/" className="flex justify-center">
            <Logo />
          </Link>
        </div>
        <div className="w-1/2 bg-[#F8F3EA] rounded-r-2xl flex flex-col gap-3">
          <div className="my-56 mx-36">
            <h1 className="text-3xl font-bold text-black text-center">
              {title}
            </h1>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
