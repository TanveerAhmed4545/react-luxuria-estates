import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
// import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
// import { updateProfile } from "firebase/auth";

const UpdateProfile = () => {
  const { user, setReload, setUser, updateUser } = useContext(AuthContext);
  // console.log(user);

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data)

    // updateProfile(user,{
    //     displayName: data.name ? data.name : user.displayName,
    //     photoURL: data.photo ? data.photo : user.photoURL,
    // })


    
    
    // updateProfile(setUser({...user,displayName : data.name , photoURL : data.photo}))
    updateUser(data.name && data.name  , data.photo && data.photo)
      .then(() => {

        setUser((preUser) => {
          return { ...preUser, displayName: data.name ? data.name : user.displayName
            , photoURL: data.photo ? data.photo : user.photoURL
           };
        });
        setReload(true);
        toast.success("Updated");
        
      })
      .catch((error) => {
        console.log(error);
        error && toast.warning("Error, not Updated");
      });
  };

  return (
    <div className="flex justify-center my-5 md:my-10 lg:my-16">
      <Helmet>
        <title>Luxuria Estates || Update Profile</title>
      </Helmet>

      <div className="lg:w-2/3 md:w-3/4 w-full p-5">
        <h2 className="text-center text-2xl md:text-5xl font-semibold">
          Update Profile
        </h2>
        <form className="card-body p-0" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              type="text"
              placeholder={user.email}
              className="input input-bordered"
              disabled
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered"
              {...register("name")}
            />
            {errors.name && (
              <span className="text-red-500 font-semibold pt-2">
                This Name field is required
              </span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Photo Url</span>
            </label>
            <input
              type="text"
              placeholder="Photo Url"
              className="input input-bordered"
              {...register("photo")}
            />
            {errors.photo && (
              <span className="text-red-500 font-semibold pt-2">
                This Photo Url field is required
              </span>
            )}
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#1DB2FF] text-white">
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
