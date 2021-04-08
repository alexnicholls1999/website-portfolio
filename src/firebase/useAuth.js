import { useState } from "react";

export default function useAuth(firebaseAuth){
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);

    firebaseAuth().onAuthStateChanged(fbUser => {
        setLoading(false);
        if (fbUser) {
            setIsAuthenticated(true);
            console.log(fbUser);
            setUser(fbUser);
            return;
        }

        setIsAuthenticated(false);
    });

    const signInEmailUser = (email, password) => 
        firebaseAuth().signInWithEmailAndPassword(email, password);

    const signOut = () => firebaseAuth().signOut();

    return {
        isAuthenticated,
        user,
        loading,
        signInEmailUser,
        signOut
    }
}