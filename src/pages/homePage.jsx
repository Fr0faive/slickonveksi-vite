import NavbarComponent from "../component/layout/NavbarComponent";
import HeroLayout from "../component/layout/HeroLayout";
import FooterLayout from "../component/layout/FooterLayout";
import ProductLayout from "../component/layout/ProductLayout";
import { useState, useEffect } from "react";
import CardComp from "../component/CardComp";
import { getProducts } from "../services/product.service";

const homePage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);
  return (
    <>
      <NavbarComponent />
      <HeroLayout />
      <ProductLayout>
        {products.slice(0, 8).map((product) => (
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

export default homePage;
