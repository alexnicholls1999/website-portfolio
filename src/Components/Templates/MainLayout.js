import React from 'react'
import Header from '../Organisms/Header'
import styled from 'styled-components';
import Hero from '../Organisms/Hero';
import { Container } from 'react-bootstrap';

const MainWrapper = styled.div`
    background-color: #0F0F0F;
`;

function MainLayout({children}) {
    return (
        <MainWrapper>
            <Header /> 
            <Hero />
            <Container>
                {children}
            </Container>

        </MainWrapper>
    )
}

export default MainLayout
