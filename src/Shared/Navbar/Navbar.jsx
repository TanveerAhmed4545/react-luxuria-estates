import demoUserPic from '../../assets/demoUser.png';
import { useContext} from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { Tooltip } from "@material-tailwind/react";


const Navbar = () => {

    // const [isHovered, setIsHovered] = useState(false);
    const {user,logOut,loading} = useContext(AuthContext);
     
    if(loading){
      return <div className="flex justify-center items-center">
        <span className="loading loading-infinity loading-lg"></span>
      </div>
   }

    const handleSignOut = () =>{
         

      logOut()
      .then(result =>{
        console.log(result.user);
      })
      .catch(error =>{
        console.log(error);
      })

    }

   

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
       <li><NavLink to='/userProfile'  className={({ isActive, isPending }) =>
         isActive
           ? "bg-none border text-[#007CFF] font-semibold border-[#AACBFF] mr-3"
           : isPending
           ? "pending"
           : "mr-3"
       }>User Profile</NavLink></li>

       
       
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






  


      {/* <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar relative">
  <div className="w-10 rounded-full ">
    <img src={user?.photoURL} />
  </div>
  <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 transition-opacity duration-300 bg-black bg-opacity-50 text-white hover:opacity-100">
    
    <span >{user?.displayName}</span>
  </div>
</div> */}


  { user && <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          
          <Tooltip content={user?.displayName}>
          <img  src={user?.photoURL? user?.photoURL : demoUserPic} />
    </Tooltip>
        </div>
      </div> } 



{/* <div>
{
  user && <div 
  className="avatar mx-4 " 
  onMouseEnter={() => setIsHovered(true)} 
  onMouseLeave={() => setIsHovered(false)}
>
  <div className="w-10 h-10 rounded-full">
    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"  />
  </div>
  <div  className="flex items-center">
  {isHovered && <h2>{user?.displayName}</h2>
  }
  </div>     
</div>
}
</div> */}


   
    {
        user ? <button onClick={handleSignOut} className="btn bg-[#AACBFF] font-bold text-[#007CFF]">Sign Out</button> : <Link  to='/login'>
        <button  className="btn bg-[#AACBFF] font-bold text-[#007CFF]" >Login</button>
    </Link>
      }
    

    {/* <Link to='/login'><button className="btn bg-[#AACBFF] font-bold text-[#007CFF]">Login</button></Link> */}
  </div>
</div>
    );
};

export default Navbar;