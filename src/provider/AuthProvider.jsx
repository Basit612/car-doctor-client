import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.confij";
import axios from "axios";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, SetUser] = useState(null);
  const [loading, setLoding] = useState(true);

  const createUser = (email, password) => {
    setLoding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    // console.log('object');
    setLoding(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (createUser) => {
      // const userEmail = createUser?.email;
      const userEmail = createUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      SetUser(createUser);
      // console.log("create User", createUser);
      setLoding(false);

      // if user exists then issue a token
      if (createUser) {
        // const loggedUser = { email: userEmail };
        axios.post('https://car-doctor-server-d4esldflf-abdul-basits-projects-2ef8b724.vercel.app/jwt',loggedUser, { withCredentials: true }).then((res) => {
          console.log('token response', res.data);
        });
      }
      else{
        axios.post('https://car-doctor-server-d4esldflf-abdul-basits-projects-2ef8b724.vercel.app/logout',loggedUser, {
          withCredentials:true
        })
        .then(res =>{
          console.log(res.data);
        })
      }
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
