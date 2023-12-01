const Button = (props) => {
  const { children, onClick, type = "button" } = props;
  return (
    <button
      type={type}
      className="flex h-11 my-5 w-fit items-center justify-center rounded-box bg-[#FFD7C3] px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
