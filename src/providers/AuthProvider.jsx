import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);
// console.log(auth);
const googleProvider = new GoogleAuthProvider();


// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
     
    const [user,setUser] = useState([]);
    const [loading,setLoading] = useState(true);
    
    // createUser
    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    // signIn 
    const signIn = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    // googleLogin
    const googleLogin = () =>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    } 

    // logOut
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);

    }



    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            console.log("user in the auth state changed",currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () =>{
            unSubscribe();
        }
    },[]);


    const authInfo = {
        user,
        createUser,
        signIn,
        loading,
        logOut,
        googleLogin

    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;