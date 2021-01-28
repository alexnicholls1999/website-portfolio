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
        width: 400px;
        margin: 0 auto;
        padding: 5%;
    }
`;

const Mailto = styled.a`

    padding: 0;
    width: 100%;


`

function ButtonToolbar(props) {

    const { signOut } = useAuth(firebase.auth);
    
    const [mailto, setMailto ] = useState(false)

    const handleSignOutClick = () => {
        signOut();
    }


    return (
        <ButtonToolbarWrapper>
            <Button text="Contact" style={{marginRight: "10px"}} />
            <Button text="Logout" onClick={handleSignOutClick}/>
        </ButtonToolbarWrapper>
    )
}

export default ButtonToolbar;
