import { useEffect, useState } from "react";
import productService from "../services/product.service";
import Button from "./Elements/Button";
import InputElement from "./Elements/Input";

const Table = () => {
  const [products, setProducts] = useState([]);
  const [dataProducts, setDataProducts] = useState([]);
  const handleChange = (e) => {
    setProducts((prevProducts) => ({
      ...prevProducts,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAddProduct = async () => {
    try {
      const resultAdd = await productService.addProduct(products);
      console.log("Berhasil Menambahkan Produk:", resultAdd);
      alert("Berhasil Menambahkan Produk");
    } catch (e) {
      console.log(e);
      console.error("Gagal menambahkan produk:", e);
    }
  };
  useEffect(() => {
    productService.getProducts((data) => {
      setDataProducts(data);
    });
  }, []);
  return (
    <div className="overflow-x-auto text-gray-900">
      <h1 className="text-3xl font-bold text-gray-900 text-center">Produk</h1>
      <div>
        <Button
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          Tambah
        </Button>
        <dialog id="my_modal_1" className="modal bg-white/30 backdrop-blur-lg">
          <div className="modal-box bg-[#FFF0E7]">
            <h3 className="font-bold text-lg">Tambah Produk</h3>
            <p className="py-4">Masukkan data produk</p>
            <div className="font-semibold">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <InputElement
                  type="text"
                  placeholder="Nama Produk"
                  name="name"
                  labelText="Nama"
                  onChange={handleChange}
                />
                <InputElement
                  type="text"
                  placeholder="Deskripsi Produk"
                  name="description"
                  labelText="Deskripsi"
                  onChange={handleChange}
                />
                <InputElement
                  type="number"
                  placeholder="Harga Produk"
                  name="price"
                  labelText="Harga"
                  onChange={handleChange}
                />
                <InputElement
                  type="number"
                  placeholder="Stok Produk"
                  name="stock"
                  labelText="Stok"
                  onChange={handleChange}
                />
                <div className="modal-action mt-0">
                  <Button
                    onClick={() =>
                      document.getElementById("my_modal_1").close()
                    }
                  >
                    Close
                  </Button>
                  <Button onClick={handleAddProduct}>Tambahkan</Button>
                </div>
              </form>
            </div>
          </div>
        </dialog>
      </div>
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
          {dataProducts.map((product) => (
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
