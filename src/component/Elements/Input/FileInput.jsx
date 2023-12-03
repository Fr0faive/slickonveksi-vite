const FileInput = (props) => {
  const { placeholder, name, onChange } = props;
  return (
    <input
      type="file"
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      accept="image/*"
      className="file-input file-input-bordered w-full bg-white text-gray-900"
    />
  );
};
export default FileInput;
