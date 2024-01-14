import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
const [user , setUser] =useState(null)

const createUser =(email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
}

const signInUser = (email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}

const logout = ()=>{
    return signOut(auth)
}


// storing current user info
useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        console.log(currentUser);
        setUser(currentUser);
       
            
    });


    return () => {
        return unsubscribe();
    }
}, [])
    const authInfo = { user, createUser, signInUser , logout}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
};
