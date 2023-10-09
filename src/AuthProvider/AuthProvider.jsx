/* eslint-disable no-unused-vars */
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import  { createContext, useEffect, useState } from 'react';
import app from '../FireBase/firebase.config';
export const AuthContext = createContext (null)

const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user , setUser] =useState(null);
const createUser = (email , password) =>{
    return createUserWithEmailAndPassword (auth , email , password)
}
const signIn = (email , password) =>{
    return createUserWithEmailAndPassword(auth , email , password)
}
const logOut = () =>{
    return signOut(auth);
}
useEffect ( () => {
  const unSubscribe =   onAuthStateChanged(auth , createUser => {
        console.log('user in the auth state changed ' , createUser);
        setUser(createUser)
    });
    return() =>{
        unSubscribe();
    }
}, [])
    const authInfo ={
           user,
        createUser,
        signIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;