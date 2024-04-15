import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import demoUserPic from '../../assets/demoUser.png';
import { Helmet } from "react-helmet-async";

const UserProfile = () => {

    const {user} = useContext(AuthContext);

  return (
    <div className="mx-6">
      <Helmet>
        <title>
        Luxuria Estates || User Profile 
        </title>
      </Helmet>
      <div className="hero py-6 md:py-9 lg:py-12  rounded-2xl bg-[#9cb4c0] my-5 lg:my-10">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <div className="card bg-[#E7F6FD] shadow-xl p-6">
            <figure>
              <img className="rounded-2xl"
                src={user?.photoURL ? user?.photoURL : demoUserPic}
                
              />
            </figure>
            <div  className="space-y-5">
              <h2 className="card-title pt-5 flex flex-col"><span>Name :</span> <span>{user?.displayName}</span></h2>
              <p className="card-title flex flex-col"><span>Email :</span> <span>{user?.email}</span></p>
              <p className="card-title flex flex-col"><span>Photo Url :</span> <span className="break-all">{user?.photoURL}</span></p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default UserProfile;
