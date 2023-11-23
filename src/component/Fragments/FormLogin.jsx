import Button from "../Elements/Button";
import InputElement from "../Elements/Input";

const FormLogin = () => {
  return (
    <form action="">
      <InputElement
        name="username"
        labelText="Username/Email"
        type="text"
        placeholder="Enter your username/email"
      />

      <InputElement
        name="password"
        labelText="Password"
        type="password"
        placeholder="Password"
      />
      <Button children="Login" />
    </form>
  );
};

export default FormLogin;
