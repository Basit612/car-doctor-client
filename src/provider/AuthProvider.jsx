import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.confij";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user,SetUser]= useState(null);
  const [loading,setLoding]=useState(true);

  const createUser =(email,password)=>{
    setLoding(true)
    return createUserWithEmailAndPassword(auth,email,password)
  };

  const signIn = (email,password) =>{
    setLoding(true);
    return signInWithEmailAndPassword(auth, email,password);
  }

  const logOut = () =>{
    setLoding(true)
    return signOut(auth);
  }

  useEffect(() =>{
  const unsubscribe = onAuthStateChanged(auth, createUser  =>{
    SetUser(createUser);
    console.log("create User", createUser);
    setLoding(false)
   });
   return () =>{
    return unsubscribe();
   }
  },[])


  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
      </AuthContext.Provider>
  );
};

export default AuthProvider;
