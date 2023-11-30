import NavbarComponent from "../component/layout/NavbarComponent";
import FooterLayout from "../component/layout/FooterLayout";
import ProductLayout from "../component/layout/ProductLayout";
import { useState, useEffect } from "react";
import CardComp from "../component/CardComp";
import { getProducts } from "../services/product.service";

const productPage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts((data) => {
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
            title={product.title}
            price={product.price}
            text={product.description}
          />
        ))}
      </ProductLayout>
      <FooterLayout />
    </>
  );
};

export default productPage;
