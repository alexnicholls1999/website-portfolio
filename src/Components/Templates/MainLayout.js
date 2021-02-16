import React from 'react'
import Header from '../Organisms/Header'
import styled from 'styled-components';
import Hero from '../Organisms/Hero';
import { Container } from 'react-bootstrap';
import Footer from '../Organisms/Footer';

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
            <Footer />
        </MainWrapper>
    )
}

export default MainLayout
