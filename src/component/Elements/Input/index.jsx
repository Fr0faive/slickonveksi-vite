import Input from "./Input";
import Label from "./Label";

const InputElement = (props) => {
  const { labelText, name, type, placeholder } = props;
  return (
    <>
      <Label labelText={labelText} htmlFor={name} />
      <Input name={name} type={type} placeholder={placeholder} />
    </>
  );
};

export default InputElement;
