import React from 'react'
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import ButtonControl from '../Molecules/ButtonControl';

const StyledHeader = styled.div`
    background: black;
    padding-top: 5px;

    h1 {
        color: white;
    }
`;

const StyledHeaderWrapper = styled.div`
    display: inline-block;
`;

function Header() {
    return (
        <StyledHeader>
            <Container>
                <Row>
                    <Col md={8}>
                        <h1>Alex Zietara Nicholls.</h1>
                    </Col>
                    <Col md={4}>
                        <ButtonControl />
                    </Col>
                </Row>
            </Container>
        </StyledHeader>
    )
}

export default Header
