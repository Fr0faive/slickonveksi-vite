import ButtonComp from "../component/ButtonComp";
import InputComp from "../component/InputComp";
import { Link } from "react-router-dom";
const FormLayout = (props) => {
  const { Children, labelText, submitText } = props;
  return (
    <>
      <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8 min-h-screen">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="public/assets/logo.png"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">
            {Children} your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
          <form className="space-y-6" action="#" method="POST">
            <InputComp
              labelText={labelText}
              type="text"
              placeholder="Enter your username"
            />

            <div>
              <div className="flex items-center justify-between">
                <label className="label">
                  <span className="label-text text-gray-900 dark:text-white">
                    Password
                  </span>
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  type="password"
                  placeholder="•••••••••••"
                  required
                  className="input input-bordered input-secondary input-ghost bg-white dark:bg-gray-900 w-full mb-3 text-gray-900 dark:text-white"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <ButtonComp children={submitText} />
              <p className="text-center text-sm text-gray-500">
                Don't have account?{" "}
                <Link
                  to="/register"
                  className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                >
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormLayout;
