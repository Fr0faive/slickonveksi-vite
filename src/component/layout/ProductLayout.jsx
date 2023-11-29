const ProductLayout = (props) => {
  const { children } = props;

  return (
    <div className="w-full min-h-screen px-6 pt-20 lg:px-8 bg-white">
      <h2 className="text-2xl font-bold my-12 text-gray-900 text-center">
        Produk
      </h2>
      <div className="flex justify-center items-center">
        <div className="flex flex-wrap justify-center mb-8 gap-9 xl:gap-5 min-h-[6rem] ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ProductLayout;
