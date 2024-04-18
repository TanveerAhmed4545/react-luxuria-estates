import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";

const Root = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto  mt-5   ">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>

      <div className="bg-[#E1F6FF]">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
