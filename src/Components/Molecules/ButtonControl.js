import React from 'react'
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from '../Atoms/Buttons/Button';
import firebase from '../../firebase/utils';
import useAuth from '../../firebase/useAuth';

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

function ButtonControl() {

    const { signOut } = useAuth(firebase.auth);

    const handleSignOutClick = () => {
        signOut();
    }

    return (
        <ButtonWrapper>
            <Button mailToButton mailTo="mailto:azini@live.co.uk"/>
            <Button style={{marginLeft: "10px"}} text="Logout" onClick={handleSignOutClick} /> 
        </ButtonWrapper>
    )
}

export default ButtonControl;
