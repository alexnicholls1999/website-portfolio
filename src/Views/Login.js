import React, {useState} from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";
import LoginForm from "../Components/Form";


// Logo
import DarkLogo from "../assets/AZN-logo-dark.png";


const LoginWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    min-width: 100vw;
    background-color: black;
    overflow: hidden;
`;

const StyledTile = styled.div`
    display: grid;
    justify-content: center;
    grid-row-gap: 20px;
    width: 100%;
    
    @media (min-width: 600px) {
        width: 30%;
    }
`;

const Logo = styled.img`
    position: relative;
    margin: 0 auto;
`;


function Login(props) {

    const { signInEmailUser } = props;
    const [error, setError] = useState();

    const handleSubmit = async data => {
        const { email, password } = data;

        try {
            const user = await signInEmailUser( email, password );
            console.log(user);
        } catch (error) {
            debugger;
            setError(error.message);
            // console.log(error.message);
        }
    };

    return (
        <LoginWrapper>
            <StyledTile>
                <Logo src={DarkLogo}/>
                <LoginForm serverError={error} onSubmit={handleSubmit} buttonText="Login"/>
            </StyledTile>
        </LoginWrapper>
    )
}

Login.propTypes = {
    signInEmailUser: PropTypes.func.isRequired
};

export default Login;