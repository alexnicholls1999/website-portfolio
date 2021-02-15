import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledInput = styled.input`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 10px;
    border: none;
    outline: none;
    background: none;
    padding-bottom: .2rem;
    font-size: 1rem;
    color: ${({theme}) => theme.colors.white};
`;


function Input({ InputRef, ...Props}) {

    return <StyledInput ref={InputRef} {...Props}/>

}



export default Input;
