import { useState } from "react";
import Button from "../Elements/Button";
import { InputElement, FileInputElement } from "../Elements/Input";
import productService from "../../services/product.service";
const FormProduct = (props) => {
  const { idModal } = props;
  const [products, setProducts] = useState({});
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    setProducts((prevProducts) => ({
      ...prevProducts,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleAddProduct = async () => {
    try {
      const resultAdd = await productService.addProduct(products);
      console.log(resultAdd);
      alert(`Produk ${products.name} berhasil ditambahkan`);
      document.getElementById(idModal).close();
      window.location.reload();
    } catch (e) {
      console.log(e);
      console.error("Gagal menambahkan produk:", e);
    }
  };
  return (
    <form encType="multipart/form-data">
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
      <FileInputElement
        placeholder="Gambar Produk"
        name="image"
        labelText="Gambar"
        onChange={handleChange}
      />
      <div className="modal-action mt-0">
        <Button onClick={() => document.getElementById(`${idModal}`).close()}>
          Close
        </Button>
        <Button onClick={handleAddProduct}>Tambahkan</Button>
      </div>
    </form>
  );
};
export default FormProduct;
