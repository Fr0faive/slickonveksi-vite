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

  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((p) => p.product_id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  // useEffect(() => {
  //   const localCart = JSON.parse(localStorage.getItem("cart"));
  //   setCart(localCart || []);
  // }, []);

  const handleToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };
  return (
    <>
      <NavbarComponent />
      <ProductLayout>
        {products.map((product) => (
          <CardComp
            key={product.product_id}
            img={product.image}
            title={product.name}
            price={product.price.toLocaleString("id-ID")}
            text={product.description}
            onClick={() => handleToCart(product.product_id)}
          />
        ))}
        <div className="flex flex-col  text-gray-900">
          <h1>Cart</h1>
          <table className="table-auto border-spacing-x-5 border-separate">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find((p) => p.product_id === item.id);
                return (
                  <tr key={item.id}>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{item.qty}</td>
                    <td>{product.price * item.qty}</td>
                  </tr>
                );
              })}
              <tr className="font-semibold">
                <td colSpan={3}>Total</td>
                <td>Rp{totalPrice.toLocaleString("id-ID")}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ProductLayout>
      <FooterLayout />
    </>
  );
};

export default productPage;
