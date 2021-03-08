import React from 'react';
import styled from "styled-components";

const StyledHamburger = styled.div`
    position: relative;
    height: 1.2rem;
    z-index: 2;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    border: none;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0) !important;
    -webkit-focus-ring-color: rgba(255, 255, 255, 0) !important;
    outline: none !important;

    
    div {
        width: 1.2rem;
        height: 3px;
        background-color: ${({theme}) => theme.colors.white};
        transform-origin: 1px;
        transition: all .3s ease-in;

        &:nth-child(1){
            transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate{0}")};  
        }

        &:nth-child(2) {
            opacity: ${({ open }) => (open ? 0 : 1)}
        }

        &:nth-child(3) {
            transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate{0}")};
        }
    }

`

function Hamburger({ onClick, open }) {


    return (
        <StyledHamburger
            aria-controls="basic-navbar-nav"
            open={open}
            onClick={onClick}
        >
            <div></div>
            <div></div>
            <div></div>
            
        </StyledHamburger>
    )
}

export default Hamburger;