import React, {useState} from 'react'
import PropTypes from "prop-types";
// import LoginForm from '../Components/Organisms/LoginForm'
// import Logo from '../Components/Atoms/Logo';

function Login({signInEmailUser}) {
    const [error, setError] = useState();

    const handleSubmit = async data => {
        const {email, password} = data;

        console.log(data);

        // try {
        //     await signInEmailUser(email, password);
        // } catch (error) {

        //     setError(error.message);
        // }
    }

    return (
        <>            
        
            <Logo />
            <LoginForm serverError={error} onSubmit={handleSubmit} />
        </>
    )
}

Login.propTypes = {
    signInEmailUser: PropTypes.func.isRequired
}

export default Login;