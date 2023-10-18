import NavbarComponent from "../component/NavbarComponent";
import HeroLayout from "../layout/HeroLayout";
import FooterLayout from "../layout/FooterLayout";
import CardComp from "../component/CardComp";
import ProductLayout from "../layout/ProductLayout";
const homePage = () => {
  return (
    <>
      <NavbarComponent />
      <HeroLayout />
      <ProductLayout/>
      <FooterLayout />
    </>
  );
};

export default homePage;
