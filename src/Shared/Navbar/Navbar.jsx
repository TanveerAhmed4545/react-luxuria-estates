
import { useState } from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {

    const [isHovered, setIsHovered] = useState(false);

   

    const links = <>
    <li><NavLink  to='/'  className={({ isActive, isPending }) =>
         isActive
           ? "bg-none border text-[#007CFF] font-semibold border-[#AACBFF] mr-3"
           : isPending
           ? "pending"
           : "mr-3"
       }>Home</NavLink></li>
       <li><NavLink  to='/profile'  className={({ isActive, isPending }) =>
         isActive
           ? "bg-none border text-[#007CFF] font-semibold border-[#AACBFF] mr-3"
           : isPending
           ? "pending"
           : "mr-3"
       }>Update Profile</NavLink></li>
       <li><NavLink to='/contact'  className={({ isActive, isPending }) =>
         isActive
           ? "bg-none border text-[#007CFF] font-semibold border-[#AACBFF] mr-3"
           : isPending
           ? "pending"
           : "mr-3"
       }>Contact Us</NavLink></li>

       <li><NavLink to='/register'>Register</NavLink></li>
       
    </>

    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {
            links
        }
      </ul>
    </div>
    <a className=" text-xl">Luxuria <span>Estates</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {
        links
      }
    </ul>
  </div>
  <div className="navbar-end">
  {/* <div className="avatar mr-4">
    <div className="w-12  rounded-full">
      <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
      
    </div>
  </div> */}


{/* <div className="avatar mr-4  ">
      <div className="w-12 rounded-full">
        <img className="group" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="avatar" />
      </div>
      <div className="hidden group-hover:block bg-white text-center">
        Tanveer
      </div>
    </div> */}




<div 
      className="avatar mx-4 " 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-12 h-12 rounded-full">
        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"  />
      </div>
      <div  className="flex items-center">
      {isHovered && <h2>Tanveer</h2>
      }
      </div>     
    </div>




    <a className="btn bg-[#AACBFF] font-bold text-[#007CFF]">Login</a>
  </div>
</div>
    );
};

export default Navbar;