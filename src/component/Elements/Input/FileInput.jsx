const FileInput = (props) => {
  const { placeholder, name, onChange, value = "" } = props;
  return (
    <input
      type="file"
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      accept="image/*"
      value={value}
      className="file-input file-input-bordered w-full bg-white text-gray-900"
    />
  );
};
export default FileInput;
