import NavbarComponent from "../component/layout/NavbarComponent";
import FooterLayout from "../component/layout/FooterLayout";
import ProductLayout from "../component/layout/ProductLayout";
import { useState, useEffect } from "react";
import CardComp from "../component/CardComp";
import productService from "../services/product.service";

const productPage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    productService.getAllProducts((data) => {
      setProducts(data);
    });
  }, []);
  return (
    <>
      <NavbarComponent />
      <ProductLayout>
        {products.map((product) => (
          <CardComp
            key={product.id}
            img={product.image}
            title={product.name}
            price={product.price.toLocaleString("id-ID")}
            text={product.description}
          />
        ))}
      </ProductLayout>
      <FooterLayout />
    </>
  );
};

export default productPage;
