const CartList = (props) => {
  const { cart, totalPrice, products } = props;
  return (
    <div className="flex flex-col text-gray-900 pb-5">
      <h1 className="text-3xl text-gray-900 text-center mb-10">Cart</h1>
      <table className="table-auto border-spacing-x-5 border-separate">
        <thead>
          <tr className="font-semibold text-justify">
            <th>Nama</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => {
            const product = products.find((p) => p.product_id === item.id);
            return (
              <tr key={item.id} className="text-justify font-thin">
                <td>{product.name}</td>
                <td>Rp{product.price.toLocaleString("id-ID")}</td>
                <td>{item.qty}</td>
                <td>Rp{(product.price * item.qty).toLocaleString("id-ID")}</td>
              </tr>
            );
          })}
          <tr className="font-semibold ">
            <td colSpan={3}>Total</td>

            <td className="text-justify">
              Rp{totalPrice.toLocaleString("id-ID")}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default CartList;
