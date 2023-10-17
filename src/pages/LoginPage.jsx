import FormLayout from "../layout/FormLayout";

const LoginPage = () => {
  return (
    <div className="bg-white dark:bg-gray-950 backdrop-blur-md">
      <FormLayout Children="Sign in to" labelText="Username" submitText="Login" />
      {/* <div className="flex justify-center min-h-screen items-center">
        <div className="w-full max-w-xs flex flex-col justify-center dark:text-white bg-white/50 backdrop-blur-md">
          <h1 className="text-center mb-5">Login</h1>
          <form action="submit">
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              className="input input-bordered w-full max-w-xs mb-3"
            />
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="********"
              className="input input-bordered w-full max-w-xs mb-3"
            />
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>
      </div> */}
    </div>
  );
};

export default LoginPage;
