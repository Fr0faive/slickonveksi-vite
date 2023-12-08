import Table from "../component/layout/TableProduct";
import Sidebar from "../component/layout/Sidebar";

const DashProduct = () => {
  return (
    <>
      <Sidebar>
        <div className="px-44">
          <Table />
        </div>
      </Sidebar>
    </>
  );
};

export default DashProduct;
