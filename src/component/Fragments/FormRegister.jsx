import Button from "../Elements/Button";
import InputElement from "../Elements/Input";
const FormRegister = () => {
  return (
    <form action="">
      <InputElement
        name="username"
        labelText="Username"
        type="text"
        placeholder="Enter your username/email"
      />
      <InputElement
        name="email"
        labelText="Email"
        type="email"
        placeholder="Enter your email"
      />
      <InputElement
        name="password"
        labelText="Password"
        type="password"
        placeholder="Password"
      />
      <Button children="SignUp" />
    </form>
  );
};

export default FormRegister;
