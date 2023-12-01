import FooterLayout from "../component/layout/FooterLayout";
import NavbarComponent from "../component/layout/NavbarComponent";

const NotFoundPage = () => {
  return (
    <>
      <NavbarComponent />
      <div className="flex flex-col items-center h-screen justify-center bg-white">
        <div className="text-indigo-500 font-bold text-7xl">404</div>

        <div className="font-bold text-black text-3xl xl:text-7xl lg:text-6xl md:text-5xl mt-10">
          This page does not exist
        </div>

        <div className="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-8">
          The page you are looking for could not be found.
        </div>
      </div>
      <FooterLayout />
    </>
  );
};
export default NotFoundPage;
