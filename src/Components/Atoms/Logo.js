import React from 'react';
import AZNLogo from './../../assets/azn-logo.svg'
import styled from 'styled-components';

const StyledLogo = styled.img`
    height: 6rem;
    fill: white !important;
    margin: 0 auto;
`

function Logo() {
    return (
        <StyledLogo src={AZNLogo} />
    )
}

export default Logo;