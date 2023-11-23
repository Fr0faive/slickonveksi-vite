import FormLogin from "../component/Fragments/FormLogin";
import AuthLayout from "../component/layout/AuthLayout";

const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <FormLogin />
    </AuthLayout>
  );
};

export default LoginPage;
