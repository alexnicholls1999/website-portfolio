import React, {useState} from 'react'
import LoginForm from '../Components/Organisms/LoginForm'
import styled from 'styled-components';
import PropTypes from "prop-types";




function Login(props) {

    const {signInEmailUser} = props;
    const [error, setError] = useState();

    const handleSubmit = async data => {
        const {email, password} = data;

        console.log(data);

        debugger;
        try {
            await signInEmailUser(email, password);
        } catch (error) {

            setError(error.message);
        }
    }

    return (
        <>
            <h1>Login</h1>
            <LoginForm serverError={error} onSubmit={handleSubmit} />
        </>
    )
}

Login.propTypes = {
    signInEmailUser: PropTypes.func.isRequired
}

export default Login;
