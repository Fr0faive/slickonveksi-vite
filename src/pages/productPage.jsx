import NavbarComponent from "../component/NavbarComponent";
import FooterLayout from "../layout/FooterLayout";
import ProductLayout from "../layout/ProductLayout";

const productPage = () => {
  return (
    <>
      <NavbarComponent />
      <ProductLayout />
      <FooterLayout/>
    </>
  );
};

export default productPage;
