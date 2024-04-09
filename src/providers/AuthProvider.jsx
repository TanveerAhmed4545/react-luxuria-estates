import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { createContext } from "react";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);
// console.log(auth);


// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
     
    
    // createUser
    const createUser = (email,password)=>{

        return createUserWithEmailAndPassword(auth,email,password);
    }


    const authInfo = {
        createUser
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;