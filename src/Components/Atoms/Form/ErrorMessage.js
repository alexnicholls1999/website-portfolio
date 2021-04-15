import React from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";

const ServerError = styled.div`
    position: relative;
    background-color: ${({ theme }) => theme.colors.error};
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 25px;
    margin-top: -10px;
    text-align: center;
    width: 250px;
    padding: ${({active}) => active ? "7.5px" : "0px"};
   
    @media (min-width: 765px) {
        width: 300px;
        
    }
    
`;

function ErrorMessage({children, style, active}) {

    return (
        <ServerError style={style} active={active}>
            {children}
        </ServerError>
    )
}

ErrorMessage.defaultProps = {
    children: undefined,
    active: false
}

ErrorMessage.propTypes = {
    children: PropTypes.node.isRequired,
    active: PropTypes.bool
}


export default ErrorMessage;