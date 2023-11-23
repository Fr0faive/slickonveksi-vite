const Input = (props) => {
  const { type, placeholder, name, onChange } = props;
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      className="input input-bordered input-secondary w-full bg-white text-gray-900"
    />
  );
};
export default Input;
