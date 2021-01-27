import React from 'react';
import PropTypes from 'prop-types';
import { Collapse, Navbar, Nav } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import useAuth from '../../firebase/useAuth';
import Button from '../Atoms/Button';
import firebase from '../../firebase/utils';


const StyledCollapse = styled(Navbar.Collapse)`


`;

const StyledNav = styled(Nav)`


`;


function Navigationbar(props) {

    const { signOut } = useAuth(firebase.auth);

    const handleSignOutClick = () => {
        signOut();
    }

    // return (
    //     <StyledCollapse id="basic-navbar-nav">
    //         <StyledNav>
                
    //         </StyledNav>
    //     </StyledCollapse>
    // )

    return <Button text="Log Out" onClick={handleSignOutClick} /> 
}

Navigationbar.propTypes = {
    signOut: PropTypes.func.isRequired
}


export default Navigationbar;
