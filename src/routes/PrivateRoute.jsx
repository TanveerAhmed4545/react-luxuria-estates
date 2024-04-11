import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate,useLocation } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    
 
    if(loading){
       return <span className="loading loading-infinity loading-lg text-center"></span>
    }

    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;