import React from 'react'
import {a} from "react-spring";
import Header from '../Organisms/Header'
import styled from 'styled-components';
import Hero from '../Organisms/Hero';
import { Container } from 'react-bootstrap';
import Footer from '../Organisms/Footer';
import ActionBtn from '../Atoms/ActionBtn';

const MainWrapper = styled(a.div)`
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
            <ActionBtn />
            <Footer />
        </MainWrapper>
    )
}

export default MainLayout
