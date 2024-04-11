import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEyeSlash, FaGoogle } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const Login = () => {

    const [showPassword,setShowPassword] = useState(false);
    const {signIn,googleLogin} = useContext(AuthContext);

    const {
        register,
        handleSubmit,
        
        formState: { errors },
      } = useForm()
      

      const onSubmit = (data) => {
        
        console.log(data);
        signIn(data.email,data.password)
        .then(result =>{
          console.log(result.user);
        })
        .catch(error =>{
          console.log(error);
        })
    }


    return (
        <div>
        <div className="hero min-h-screen bg-[#7DD6FE] rounded-xl">
<div className="hero-content  flex-col lg:flex-row-reverse">
<div className="text-center lg:text-left ml-0 lg:ml-10">
  {/* <h1 className="text-5xl font-bold mb-5  text-[#007CFF]">Login now </h1> */}
  <div className=" max-w-[500px] md:md:max-w-md lg:max-w-[550px]  ">
    <img className="rounded-2xl" src={"https://i.ibb.co/1X4y5H1/log.jpg"}  />
  </div>
</div>
<div className="card shrink-0 w-full   max-w-md shadow-2xl bg-[#E7F6FD]">
  <form className="card-body pb-0 " onSubmit={handleSubmit(onSubmit)} >
    
  <h1 className="text-5xl font-bold mb-5  text-blue-gray-700">Login now </h1>
    
    <div className="form-control ">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" placeholder="email" className="input input-bordered" 
      {...register("email", { required: true })}
      />
      {errors.email && <span className="text-red-500 font-semibold pt-2">This Email field is required</span>}
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <div className="w-full relative">
      <input  type={showPassword ? 'text' :"password" } placeholder="password" className="w-full input input-bordered" 
      {...register("password", { required: true })}
      />
      <span className="absolute top-3 right-2"  onClick={() => setShowPassword(!showPassword)}>
                {
                    showPassword ?  <FaEyeSlash></FaEyeSlash>  : <IoMdEye></IoMdEye> 
                }
            </span>
      </div>
      {errors.password && <span className="text-red-500 font-semibold pt-2">This Password field is required</span>}
     
    </div>
    <div className="form-control mt-6">
      <button className="btn bg-[#007CFF] border-none text-white">Login</button>
    </div>
  </form>
  <div className="px-8 pt-6">
     <button onClick={() => googleLogin()} className="btn bg-[#1DB2FF] border-none text-white w-full">
        <FaGoogle></FaGoogle>
          Google
        </button>
     </div>
  <div className="text-center py-4">
     <p>Do not have an account <Link className="text-blue-600 font-bold" to='/register'>Register</Link></p>
     </div>

     
</div>
</div>
</div>
    </div>
    );
};

export default Login;