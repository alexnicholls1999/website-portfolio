import React from 'react'
import Nav from '../Molecules/Navbar'
import styled from "styled-components";

const StyledHeader = styled.header`

`;

function Header() {
    return (
        <StyledHeader>
            <h1>Alex Zietara Nicholls</h1>
            <Nav />
        </StyledHeader>
    )
}

export default Header;
