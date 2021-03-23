import React from 'react';
import PropTypes from 'prop-types';
import { Collapse, Navbar, Nav } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../Atoms/Button';
import ButtonToolbar from './ButtonToolbar';


const StyledCollapse = styled(Navbar.Collapse)`


`;

const StyledNav = styled(Nav)`


`;


function Navigationbar() {

    // return (
    //     <StyledCollapse id="basic-navbar-nav">
    //         <StyledNav>
                
    //         </StyledNav>
    //     </StyledCollapse>
    // )

    return (
        <Nav>
            <ButtonToolbar />
        </Nav>
    )
}

Navigationbar.propTypes = {
    signOut: PropTypes.func.isRequired
}


export default Navigationbar;
