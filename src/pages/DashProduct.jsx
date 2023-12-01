import Table from "../component/Table";
import Sidebar from "../component/layout/Sidebar";

const DashProduct = () => {
  return (
    <>
      <Sidebar>
        <div className="p-44">
          <Table />
        </div>
      </Sidebar>
    </>
  );
};

export default DashProduct;
