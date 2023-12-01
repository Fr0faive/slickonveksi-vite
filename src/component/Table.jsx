import { useEffect, useState } from "react";
import { getProducts } from "../services/product.service";

const Table = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);
  return (
    <div className="overflow-x-auto text-gray-900">
      <table className="table ">
        {/* head */}
        <thead className="text-gray-900">
          <tr>
            <th>No</th>
            <th>Nama Produk</th>
            <th>Deskripsi</th>
            <th>Harga</th>
            <th>Stok</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {products.map((product) => (
            <tr key={product.id}>
              <th>{product.id}</th>
              <td className="text-justify max-w-xs">{product.title}</td>
              <td className="text-justify max-w-xl font-sans">
                {product.description}
              </td>
              <td>Rp{product.price.toLocaleString("id-ID")}</td>
              <td>{product.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
