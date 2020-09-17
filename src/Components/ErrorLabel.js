import React from 'react'
import styled from 'styled-components';

const ErrorLabel = props => {

    const StyledErrorLabel = styled.label`
        position: relative;
        background-color: #CE0000;
        color: white;
        width: 316px;
        margin-bottom: 25px;
        margin-top: -10px;
        text-align: center;
        
    
    `;

    const {children} = props; 


    return (
        <StyledErrorLabel>
            {children}
        </StyledErrorLabel>
            
    )
}


export default ErrorLabel;