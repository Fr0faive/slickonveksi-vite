import NavbarComponent from "../component/layout/NavbarComponent";
import FooterLayout from "../component/layout/FooterLayout";
import imgContact from "../assets/images/img-contact.jpg";
import { Link } from "react-router-dom";
const ContactPage = () => {
  return (
    <>
      <NavbarComponent />
      <div className="w-full min-h-screen flex flex-col lg:flex-row items-center pt-20 bg-white text-gray-900 mb-5">
        <div className="w-1/2 mx-auto">
          <img
            src={imgContact}
            alt="image-contact"
            className="w-full h-auto lg:h-screen object-cover rounded-xl lg:rounded-l-none lg:rounded-r-xl"
          />
        </div>
        <div className="w-1/2 mx-auto h-full">
          <div className="py-10 lg:p-60 flex flex-col gap-4 text-start">
            <h1 className="text-6xl font-serif">Hi, howdy, heya</h1>
            <h2 className="text-5xl text-gray-500 font-mono mb-8">
              Drop us a line
            </h2>
            <p className="text-xl font-thin font-sans">
              Reach out to us on social media
            </p>
            <a href="https://www.instagram.com/fai.krr" className="font-bold">
              &rarr; Instagram
            </a>
            <a href="https://wa.me/" className="font-bold">
              &rarr; Whatsapp
            </a>
            <a href="mailto:faikarmocht@outlook.com" className="font-bold">
              &rarr; Email
            </a>
          </div>
        </div>
      </div>
      <FooterLayout />
    </>
  );
};

export default ContactPage;
