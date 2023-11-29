import NavbarComponent from "../component/layout/NavbarComponent";
import FooterLayout from "../component/layout/FooterLayout";
import ProductLayout from "../component/layout/ProductLayout";
import { useState, useEffect } from "react";
import CardComp from "../component/CardComp";
import { getProducts } from "../services/product.service";

const productPage = () => {
  return (
    <>
      <NavbarComponent />
      <ProductLayout></ProductLayout>
      <FooterLayout />
    </>
  );
};

export default productPage;
