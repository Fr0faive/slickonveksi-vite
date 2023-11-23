const Button = (props) => {
  const { children, onClick = () => {}, type = "button" } = props;
  return (
    <button
      type={type}
      className="flex h-11 my-5 w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

export default Button;
