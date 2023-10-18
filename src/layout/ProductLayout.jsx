import CardComp from "../component/CardComp";
import { useState } from "react";
import { getProducts } from "../services/product.service";
import { useEffect } from "react";
const ProductLayout = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);
  return (
    <div className="w-full min-h-screen px-6 pt-20 lg:px-8 bg-white">
      <div className="flex justify-center items-center">
        <div className="flex flex-wrap mb-8 justify-between gap-9 xl:gap-5 min-h-[6rem] min-w-[18rem] max-w-4xl">
          {products.map((product) => (
            <CardComp
              key={product.id}
              img={product.image}
              title={product.title}
              price={product.price}
              text={product.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductLayout;
