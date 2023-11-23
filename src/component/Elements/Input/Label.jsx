const Label = (props) => {
  const { labelText, name } = props;
  return (
    <label className="label" htmlFor={name}>
      <span className="label-text text-gray-900">{labelText}</span>
    </label>
  );
};

export default Label;
