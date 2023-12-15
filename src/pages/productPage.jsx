import NavbarComponent from "../component/layout/NavbarComponent";
import FooterLayout from "../component/layout/FooterLayout";
import ProductLayout from "../component/layout/ProductLayout";
import { useState, useEffect } from "react";
import CardComp from "../component/CardComp";
import productService from "../services/product.service";
import Modal from "../component/Elements/Modal/Modal";
import Button from "../component/Elements/Button";
import CartList from "../component/Fragments/CartList";

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
        <div>
          <Button
            onClick={() => document.getElementById("cart_modal").showModal()}
          >
            <div className="absolute  badge">{cart.length}</div>
            Cart
          </Button>
          <Modal idModal="cart_modal">
            <CartList cart={cart} totalPrice={totalPrice} products={products} />
          </Modal>
        </div>
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
      </ProductLayout>
      <FooterLayout />
    </>
  );
};

export default productPage;
