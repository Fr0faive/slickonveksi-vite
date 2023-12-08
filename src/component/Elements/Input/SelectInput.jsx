const SelectInput = (props) => {
  const { title } = props;

  return (
    <select className="select select-bordered w-full mt-8 bg-white text-gray-900 select-secondary">
      <option disabled selected>
        Pilih {title}
      </option>
      <option value="admin">Admin</option>
      <option value="user">User</option>
    </select>
  );
};

export default SelectInput;
