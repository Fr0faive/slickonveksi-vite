import { useEffect, useState } from "react";
import Button from "../Elements/Button";
import FormProduct from "../Fragments/FormProduct";
import Modal from "../Elements/Modal/Modal";
import FormEditProduct from "../Fragments/FormEditProduct";
import authService from "../../services/auth.service";
import FormUser from "../Fragments/FormUser";
const TableUser = () => {
  const [dataUsers, setDataUsers] = useState([]);
  const [selectedData, setSelectedData] = useState({});

  const handleEdit = async (data) => {
    setSelectedData(data);
    document.getElementById("modal_edit").showModal();
  };

  useEffect(() => {
    authService.getUser((data) => {
      setDataUsers(data);
    });
  }, []);
  return (
    <div className="overflow-x-auto text-gray-900">
      <h1 className="text-3xl font-bold text-gray-900 text-center">User</h1>
      <div>
        <Button
          onClick={() => document.getElementById("my_modal_2").showModal()}
        >
          Tambah
        </Button>
        <Modal
          title="Tambah User"
          content="masukkan data User"
          idModal="my_modal_2"
        >
          <FormUser idModal="my_modal_2" />
        </Modal>
      </div>
      <table className="table ">
        {/* head */}
        <thead className="text-gray-900">
          <tr>
            <th>User Id</th>
            <th>Nama User</th>
            <th>Email</th>
            <th>Roles</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {dataUsers.map((user) => (
            <tr key={user.user_id}>
              <th>{user.user_id}</th>
              <td className="text-justify max-w-xs">{user.username}</td>
              <td className="text-justify max-w-xl font-sans">{user.email}</td>
              <td>{user.roles}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableUser;
