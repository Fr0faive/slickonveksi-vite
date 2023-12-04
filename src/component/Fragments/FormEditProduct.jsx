import { useEffect, useState } from "react";
import Button from "../Elements/Button";
import { InputElement, FileInputElement } from "../Elements/Input";
import productService from "../../services/product.service";
const FormEditProduct = (props) => {
  const { product_id, idModal } = props;
  const [dataProducts, setDataProducts] = useState({
    name: "",
    price: 0,
    description: "",
    image: "",
    stock: 0,
  });
  useEffect(() => {
    productService.getProductsById(product_id, (data) => {
      setDataProducts(data);
    });
  }, []);
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    setDataProducts((prevProducts) => ({
      ...prevProducts,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  console.log(dataProducts);
  const handleUpdateProduct = async () => {
    try {
      const resultUpdate = await productService.updateProduct(
        product_id,
        dataProducts
      );
      console.log(resultUpdate);
      alert(`Produk ${products.name} berhasil diupdate`);
      document.getElementById(idModal).close();
      window.location.reload();
    } catch (e) {
      console.log(e);
      console.error("Gagal mengupdate produk:", e);
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
        value={dataProducts.name}
        onChange={handleChange}
      />
      <InputElement
        type="text"
        placeholder="Deskripsi Produk"
        name="description"
        labelText="Deskripsi"
        value={dataProducts.description}
        onChange={handleChange}
      />
      <InputElement
        type="number"
        placeholder="Harga Produk"
        name="price"
        labelText="Harga"
        value={dataProducts.price}
        onChange={handleChange}
      />
      <InputElement
        type="number"
        placeholder="Stok Produk"
        name="stock"
        labelText="Stok"
        value={dataProducts.stock}
        onChange={handleChange}
      />
      <FileInputElement
        placeholder="Gambar Produk"
        name="image"
        labelText="Gambar"
        onChange={handleChange}
      />
      <div className="modal-action mt-0">
        <Button onClick={() => document.getElementById(idModal).close()}>
          Close
        </Button>
        <Button onClick={handleUpdateProduct}>Tambahkan</Button>
      </div>
    </form>
  );
};
export default FormEditProduct;
