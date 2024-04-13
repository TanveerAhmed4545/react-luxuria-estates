import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";

const Root = () => {
    return (
        
            <div className="max-w-7xl mx-auto  mt-6   ">
            <Navbar></Navbar>
            
            <Outlet></Outlet>
            
            <Footer></Footer>
            </div>
            
        
    );
};

export default Root;