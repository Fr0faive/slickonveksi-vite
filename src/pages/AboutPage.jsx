import NavbarComponent from "../component/NavbarComponent";
import FooterLayout from "../layout/FooterLayout";
const AboutPage = () => {
  return (
    <>
      <NavbarComponent />
      <div className="w-full min-h-screen px-6 pt-20 lg:px-8 bg-white text-gray-900">
        Tentang
      </div>
      <FooterLayout />
    </>
  );
};

export default AboutPage;
