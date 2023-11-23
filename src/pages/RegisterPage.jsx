import FormRegister from "../component/Fragments/FormRegister";
import AuthLayout from "../component/layout/AuthLayout";

const registerPage = () => {
  return (
    <AuthLayout title="Register">
      <FormRegister />
    </AuthLayout>
  );
};

export default registerPage;
