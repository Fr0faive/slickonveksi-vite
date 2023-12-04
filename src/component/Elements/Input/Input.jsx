const Input = (props) => {
  const { type, placeholder, name, onChange, value } = props;
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      value={value}
      className="input input-bordered input-secondary w-full bg-white text-gray-900"
    />
  );
};
export default Input;
