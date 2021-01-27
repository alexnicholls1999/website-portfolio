import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useField } from "formik";

const StyledInput = styled.input`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border: none;
    outline: none;
    background: none;
    padding: 0.5rem 0.7rem;
    font-size: 1.2rem;
    color: ${({theme}) => theme.colors.white};
`;


function Input() {

    return <StyledInput />

}


export default Input;
