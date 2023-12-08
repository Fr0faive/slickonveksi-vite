import { useEffect, useState } from "react";
import productService from "../../services/product.service";
import authService from "../../services/auth.service";
const DashboardContent = () => {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState([]);
  useEffect(() => {
    productService.getAllProducts((data) => {
      setProducts(data);
    });
  }, []);
  useEffect(() => {
    authService.getUser((data) => {
      setUser(data);
    });
  }, []);
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-wrap gap-10 lg:gap-40">
          <div className="w-fit rounded-box bg-[#FFD7C3] text-gray-900">
            <div className="p-6 flex flex-col gap-3">
              <h1 className="text-4xl">Total Produk</h1>
              <p className="text-5xl">{products.length}</p>
            </div>
          </div>
          <div className="w-fit rounded-box bg-[#FFD7C3] text-gray-900">
            <div className="p-6 flex flex-col gap-3">
              <h1 className="text-4xl">Total User</h1>
              <p className="text-5xl">{user.length}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DashboardContent;
