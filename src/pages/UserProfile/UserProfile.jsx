import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import demoUserPic from '../../assets/demoUser.png';

const UserProfile = () => {

    const {user} = useContext(AuthContext);

  return (
    <div className="hero py-6 md:py-9 lg:py-12 rounded-2xl bg-[#dbe7f9]">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <div className="card bg-base-100 shadow-xl p-6">
            <figure>
              <img className="rounded-2xl"
                src={user?.photoURL ? user?.photoURL : demoUserPic}
                
              />
            </figure>
            <div  className="space-y-5">
              <h2 className="card-title pt-5">Name : <span>{user?.displayName}</span></h2>
              <p className="card-title">Email : <span>{user?.email}</span></p>
              <p className="card-title ">Photo Url : <span className="break-all">{user?.photoURL}</span></p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
