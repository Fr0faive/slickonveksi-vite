import { useEffect } from "react";
import NavbarComponent from "../component/NavbarComponent";
import CardComp from "../component/CardComp";
import { useState } from "react";
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
      {console.log(products)}
      <NavbarComponent />
      <div className="w-full min-h-screen px-6 pt-20 lg:px-8 bg-white">
        <div className="flex justify-center">
          <div className="flex flex-wrap gap-5 min-h-[6rem] min-w-[18rem] max-w-4xl">
            {products.map((product) => (
              <CardComp
                key={product.id}
                img={product.image}
                title={product.title}
                text={product.description}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default productPage;
