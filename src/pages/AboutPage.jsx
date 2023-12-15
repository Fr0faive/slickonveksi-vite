import NavbarComponent from "../component/layout/NavbarComponent";
import FooterLayout from "../component/layout/FooterLayout";
import about from "../assets/images/about.jpg";
const AboutPage = () => {
  return (
    <>
      <NavbarComponent />
      <div className="w-full min-h-screen bg-white text-gray-900">
        <img
          src={about}
          alt="image-contact"
          className="w-full h-auto object-cover"
        />
        {/* Create about us page */}
        <div className="px-10 py-10 lg:p-60 flex flex-warp gap-64 items-center text-start">
          <h1 className="text-6xl font-serif">About Us</h1>
          <div className="flex flex-col gap-5">
            <h1 className="text-5xl text-gray-900 font-mono">Our Story</h1>
            <p className="text-3xl font-thin font-sans mb-5">
              Welcome to our online store. We are committed to providing our
              customers with the best possible shopping experience.
            </p>
            <h1 className="text-5xl text-gray-900 font-mono">Our Vision</h1>
            <p className="text-3xl font-thin font-sans">
              Our vision is to become the leading online retailer in the
              industry.
            </p>
          </div>
        </div>
      </div>
      <FooterLayout />
    </>
  );
};

export default AboutPage;
