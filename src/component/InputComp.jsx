const InputComp = (props) => {
  const { labelText, type, placeholder } = props;
  return (
    <div>
      <label className="label">
        <span className="label-text text-gray-900 dark:text-white">
          {labelText}
        </span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        required
        className="input input-bordered input-secondary w-full mb-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
      />
    </div>
  );
};

export default InputComp;
