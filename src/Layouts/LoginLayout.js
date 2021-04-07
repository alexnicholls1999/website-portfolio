import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';

const LoginWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    min-width: 100vw;
    background-color: black;
`;

const LoginFormWrapper = styled.div`
    display: grid;
    justify-content: center;
    grid-row-gap: 20px;
    width: 100%;
    h1 {
        position: relative;
        margin: 0 auto;
    }
    @media (min-width: 600px) {
        width: 30%;
    }    
`;



function LoginLayout({children}) {
    return (
        <LoginWrapper>
            <LoginFormWrapper>
                {children}
            </LoginFormWrapper>
        </LoginWrapper>
    )
}

LoginLayout.defaultProps = {
    children: undefined
}

LoginLayout.propTypes = {
    children: PropTypes.node.isRequired
}

export default LoginLayout