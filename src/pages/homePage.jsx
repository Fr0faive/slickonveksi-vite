import NavbarComponent from "../component/layout/NavbarComponent";
import HeroLayout from "../component/layout/HeroLayout";
import FooterLayout from "../component/layout/FooterLayout";
import ProductLayout from "../component/layout/ProductLayout";
import { useState, useEffect } from "react";
import CardComp from "../component/CardComp";
import productService from "../services/product.service";
import { Outlet } from "react-router-dom";

const homePage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    productService.getAllProducts((data) => {
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
            name={product.name}
            price={product.price.toLocaleString("id-ID")}
            stock={product.stock}
            text={product.description}
            onClick={() => {
              window.location.href = `/products`;
            }}
          />
        ))}
      </ProductLayout>
      <FooterLayout />
      <Outlet />
    </>
  );
};

export default homePage;
