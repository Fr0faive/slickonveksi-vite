import NavbarComponent from "../component/layout/NavbarComponent";
import HeroLayout from "../component/layout/HeroLayout";
import FooterLayout from "../component/layout/FooterLayout";
import ProductLayout from "../component/layout/ProductLayout";
const homePage = () => {
  return (
    <>
      <NavbarComponent />
      <HeroLayout />
      <ProductLayout />
      <FooterLayout />
    </>
  );
};

export default homePage;
