import Input from "./Input";
import FileInput from "./FileInput";
import Label from "./Label";

const InputElement = (props) => {
  const { labelText, name, type, placeholder, onChange, value } = props;
  return (
    <>
      <Label labelText={labelText} htmlFor={name} />
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </>
  );
};

const FileInputElement = (props) => {
  const { labelText, name, type, placeholder, onChange, value } = props;
  return (
    <>
      <Label labelText={labelText} htmlFor={name} />
      <FileInput
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </>
  );
};

export { InputElement, FileInputElement };
