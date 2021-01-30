import React from 'react'
import Nav from '../Molecules/Navbar'
import styled from "styled-components";
import {Container, Navbar} from "react-bootstrap";

const StyledHeader = styled.header`
    display: flex;
    background-color: ${({theme}) => theme.colors.black};
`;

function Header() {
    return (
        <StyledHeader>
            <Container>
                <Navbar>
                    <Container>
                        <h1>Alex Zietara Nicholls.</h1>
                        <Nav />
                    </Container>
                </Navbar>
            </Container>
        </StyledHeader>
    )
}

export default Header;
