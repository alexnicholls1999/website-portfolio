import React, {useState} from 'react';
import styled from "styled-components";
import Button from '../Atoms/Button';
import firebase from '../../firebase/utils';
import useAuth from '../../firebase/useAuth';
import { Link, useHistory, useLocation } from "react-router-dom";

const ButtonToolbarWrapper = styled.div`
    display: none;

    @media (min-width: 768px) {
        flex-direction: row;
        align-items: center;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        width: 300px;
        margin: 0 auto;
        padding: 5%;
    }
`;

const Mailto = styled(Link)`

    padding: 0;
    width: 100%;


`

function ButtonMailTo({ mailto }) {

    const handleContactClick = (e) => {
        window.location = mailto;
        e.preventDefault();
    }

    return (
        <Mailto
            onClick={handleContactClick}
        >
            <Button text="Contact"/>
        </Mailto>
    )
}

function ButtonToolbar() {

    const { signOut } = useAuth(firebase.auth);
    

    const handleSignOutClick = () => {
        signOut();
    }


    return (
        <ButtonToolbarWrapper>
            <ButtonMailTo mailto="mailto:azini@live.co.uk"/>
            <Button style={{marginLeft: "10px"}} text="Logout" onClick={handleSignOutClick}/>
        </ButtonToolbarWrapper>
    )
}

export default ButtonToolbar;
