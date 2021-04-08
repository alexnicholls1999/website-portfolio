import React from 'react'
import styled from "styled-components";
import {Container} from "react-bootstrap";
import ButtonControl from '../Molecules/ButtonControl';

const StyledHeader = styled.div`
    background: black;

    h1 {
        color: white;
    }
`;

function Header() {
    return (
        <StyledHeader>
            <Container>
                <h1>Alex Zietara Nicholls.</h1>
                <ButtonControl />
            </Container>
        </StyledHeader>
    )
}

export default Header
