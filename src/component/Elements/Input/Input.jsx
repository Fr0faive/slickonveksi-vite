const Input = (props) => {
  const { type, placeholder, name } = props;
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      className="input input-bordered input-secondary w-full bg-white text-gray-900 dark:text-white"
    />
  );
};
export default Input;
