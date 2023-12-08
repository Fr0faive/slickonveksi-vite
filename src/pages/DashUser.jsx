import Sidebar from "../component/layout/Sidebar";
import TableUser from "../component/layout/TableUser";

const DashUser = () => {
  return (
    <>
      <Sidebar>
        <div className="px-44">
          <TableUser />
        </div>
      </Sidebar>
    </>
  );
};

export default DashUser;
