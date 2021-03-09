import React from 'react';
import styled from "styled-components";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Hamburger from './Hamburger';

const StyledActionBtn = styled.div`
    position: fixed;
    z-index: 100;
    bottom: 80px;
    right: 40px;
    height: 48px;
    width: 48px;
    border-radius: 25px;
    background: ${({theme}) => theme.colors.blue};
    box-shadow: 0px 0px 5px 5px ${({theme}) => theme.colors.blue};
    display: flex; 
    align-items: center;
    justify-content: center;


    @media(min-width: 768px){
        display: none;
    }



`;



function ActionBtn({onClick}) {
    return (
    <StyledActionBtn onClick={onClick}>
        <Hamburger />
    </StyledActionBtn>
    )
}

export default ActionBtn
