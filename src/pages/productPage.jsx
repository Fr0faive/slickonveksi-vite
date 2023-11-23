import NavbarComponent from "../component/layout/NavbarComponent";
import FooterLayout from "../component/layout/FooterLayout";
import ProductLayout from "../component/layout/ProductLayout";

const productPage = () => {
  return (
    <>
      <NavbarComponent />
      <ProductLayout />
      <FooterLayout />
    </>
  );
};

export default productPage;
