import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import { updateProfile } from "firebase/auth";


const Register = () => {
    const {createUser} = useContext(AuthContext);
    // console.log(createUser);


    const {
        register,
        handleSubmit,
        
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) =>{

        if(data.password.length < 6){
            console.log("Password should be at least 6 characters or longer");
            return;
        }else if(!/(?=.*[A-Z])(?=.*[a-z])/.test(data.password)){
            console.log("Your password should have at least one Upper case and one lower case characters.");
            return;
        }

        //  console.log(data)
         createUser(data.email,data.password)
         .then(result =>{
            console.log(result.user);

            updateProfile(result.user,{
                displayName: data.name,
                photoURL: data.photo
            })
            .then(()=>{
                console.log("update");
            })
            .catch((error)=>{
                console.log(error);
            })
         })
         .catch(error=>{
           console.log(error);
         })
        }
    

    return (
        <div>
            <div className="hero min-h-screen bg-[#dbe7f9] rounded-xl">
  <div className="hero-content  flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold mb-6 lg:mb-10 text-[#007CFF]">Register now </h1>
      <div className=" max-w-[600px]">
        <img className="rounded-2xl" src={"https://i.ibb.co/KXk84XP/reg.jpg"}  />
      </div>
    </div>
    <div className="card shrink-0 w-full max-w-md shadow-2xl bg-[#AACBFF]">
      <form className="card-body" onSubmit={handleSubmit(onSubmit)} >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" className="input input-bordered" 
          {...register("name", { required: true })}
          />
          {errors.name && <span className="text-red-500 font-semibold pt-2">This Name field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="text" placeholder="Photo Url" className="input input-bordered" 
          {...register("photo")}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" 
          {...register("email", { required: true })}
          />
          {errors.name && <span className="text-red-500 font-semibold pt-2">This Email field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" 
          {...register("password", { required: true })}
          />
          {errors.password && <span className="text-red-500 font-semibold pt-2">This Password field is required</span>}
         
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#007CFF] border-none text-white">Register</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;