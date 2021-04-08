import React, {useState} from 'react'
import PropTypes from "prop-types";
import Logo from '../Components/Atoms/Logo';
import LoginForm from '../Components/Organisms/LoginForm';

function Login({signInEmailUser}) {
    const [error, setError] = useState();

    const handleSubmit = async data => {
        const {email, password} = data;

        console.log(data);

        try {
            await signInEmailUser(email, password);
        } catch (error) {

            setError(error.message);
        }
    }

    return (
        <>            
        
            <Logo />
            <LoginForm serverError={error} onSubmit={handleSubmit}/>
        </>
    )
}

Login.propTypes = {
    signInEmailUser: PropTypes.func.isRequired
}

export default Login;