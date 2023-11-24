import { Link } from "react-router-dom";
import Logo from "../Elements/Logo/Logo";

const AuthLayout = (props) => {
  const { children, title } = props;
  return (
    <div className="bg-auth bg-cover h-screen flex justify-center items-center">
      <div className="flex flex-wrap w-3/4 drop-shadow-xl">
        <div className="w-1/2 mx-auto bg-white/70 backdrop-blur-lg flex justify-center items-center rounded-l-2xl">
          <Link
            to="/"
            className="flex flex-col gap-3 items-center justify-center"
          >
            <Logo />
            <h1 className="text-4xl font-bold text-black">Slickonveksi.</h1>
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
