import { GoogleAuthProvider,GithubAuthProvider , createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null);
const auth = getAuth(app);
// console.log(auth);
// social auth provider
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
     const [reload,setReload] = useState(false);
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

    // githubLogin
    const githubLogin = () =>{
        setLoading(true);
        return signInWithPopup(auth,githubProvider);
    } 

    // logOut
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);

    }



    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            // console.log("user in the auth state changed",currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () =>{
            unSubscribe();
        }
    },[reload]);


    const authInfo = {
        user,
        createUser,
        signIn,
        loading,
        logOut,
        googleLogin,
        setReload,
        githubLogin

    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;