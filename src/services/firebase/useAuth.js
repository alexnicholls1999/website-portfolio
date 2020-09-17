import {useState} from "react";


function useAuth(fbAuth) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState({});
    
    fbAuth().onAuthStateChanged(fbUser => {
        if (fbUser) {
            setIsAuthenticated(true);
            debugger;
            setUser(fbUser);
            return;
        }

        setIsAuthenticated(false);
    });

    const signInEmailUser = (email, password) =>
    fbAuth().signInWithEmailAndPassword(email, password);

    const signOut = () => fbAuth().signOut();

    return {
        isAuthenticated,
        user,
        signInEmailUser,
        signOut
    };
}

export default useAuth;