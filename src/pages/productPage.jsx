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
      if (
        cart.find((item) => item.id === id).qty <
        products.find((p) => p.product_id === id).stock
      ) {
        setCart(
          cart.map((item) =>
            item.id === id ? { ...item, qty: item.qty + 1 } : item
          )
        );
      } else {
        alert(
          "Stok hanya tersisa " +
            products.find((p) => p.product_id === id).stock
        );
      }
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };
  return (
    <>
      <NavbarComponent />
      <div className="flex">
        <div className="pl-5 mx-auto h-screen fixed flex justify-center items-center">
          <Button
            onClick={() => document.getElementById("cart_modal").showModal()}
          >
            <div className="relative">
              <div className="absolute bottom-0 right-0 badge">
                {cart.length}
              </div>
            </div>
            Cart
          </Button>
          <Modal idModal="cart_modal">
            <CartList cart={cart} totalPrice={totalPrice} products={products} />
            <Button
              onClick={() => document.getElementById("cart_modal").close()}
            >
              Close
            </Button>
          </Modal>
        </div>
        <ProductLayout>
          {products.map((product) => (
            <CardComp
              key={product.product_id}
              img={product.image}
              name={product.name}
              stock={product.stock}
              price={product.price.toLocaleString("id-ID")}
              text={product.description}
              onClick={() => handleToCart(product.product_id)}
            />
          ))}
        </ProductLayout>
      </div>
      <FooterLayout />
    </>
  );
};

export default productPage;
