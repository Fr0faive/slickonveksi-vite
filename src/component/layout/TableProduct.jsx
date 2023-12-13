import { useEffect, useState } from "react";
import productService from "../../services/product.service";
import Button from "../Elements/Button";
import FormProduct from "../Fragments/FormProduct";
import Modal from "../Elements/Modal/Modal";
import FormEditProduct from "../Fragments/FormEditProduct";
const Table = () => {
  const [dataProducts, setDataProducts] = useState([]);
  const [selectedData, setSelectedData] = useState({});

  const handleEdit = async (data) => {
    setSelectedData(data);
    document.getElementById("modal_edit").showModal();
  };

  const handleDelete = async (id) => {
    try {
      confirm("Apakah anda yakin ingin menghapus data ini?");
      if (confirm) {
        await productService.deleteProduct(id);
        alert("Data berhasil di hapus");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    productService.getAllProducts((data) => {
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
        <Modal
          title="Tambah Produk"
          content="masukkan data produk"
          idModal="my_modal_1"
        >
          <FormProduct idModal="my_modal_1" />
        </Modal>
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
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {dataProducts.map((product) => (
            <tr key={product.product_id}>
              <th>{product.product_id}</th>
              <td className="text-justify max-w-xs">{product.name}</td>
              <td className="text-justify max-w-xl font-sans">
                {product.description}
              </td>
              <td>Rp{product.price.toLocaleString("id-ID")}</td>
              <td>{product.stock}</td>
              <td>
                <Button onClick={() => handleEdit(product)}>Edit</Button>
                <Modal
                  title="Edit Produk"
                  content="masukkan data produk"
                  idModal="modal_edit"
                >
                  <FormEditProduct
                    selectedData={selectedData}
                    idModal="modal_edit"
                  />
                </Modal>
              </td>
              <td>
                <Button onClick={() => handleDelete(product.product_id)}>
                  Hapus
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
