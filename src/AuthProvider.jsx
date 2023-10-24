import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.config";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

// Register 
const Register = (email,password) =>{
   setLoading(true)
   return createUserWithEmailAndPassword(auth,email,password)
}
// update user profile 
const UserUpdate = (name, photo)=>{
    setLoading(true)
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
      })
}


// login user 

const LoginUser= (email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

// google login 

const googleLogin = (provider)=>{
    return signInWithPopup(auth,provider)
}


// logout 
const LogOut = () =>{
    return signOut(auth)
}

// user observer 
useEffect(()=>{
    const UserState=  onAuthStateChanged(auth,currentUser =>{
        setUser(currentUser)
        setLoading(false)
        
       }
     
       )
       return UserState
    },[])


    const authInfo = {
        user,
        Register,
        UserUpdate,
        LoginUser,
        googleLogin,
        LogOut,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
