import React from 'react'
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from '../Atoms/Buttons/Button';
import firebase from '../../firebase/utils';
import useAuth from '../../firebase/useAuth';

const ButtonWrapper = styled.div`
    display: ${({active}) => (active ? "flex" : "none")};

    @media (min-width: 768px) {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
  
`;

function ButtonControl({menuModal}) {

    const { signOut } = useAuth(firebase.auth);

    const handleSignOutClick = () => {
        signOut();
    }

    return (
        <ButtonWrapper active={menuModal}>
            <Button mailToButton mailto="mailto:azini@live.co.uk"/>
            <Button style={{marginLeft: "10px"}} text="Logout" onClick={handleSignOutClick} /> 
        </ButtonWrapper>
    )
}

export default ButtonControl;
