import React from 'react'
import {a} from "react-spring";
import Header from '../Organisms/Header'
import styled from 'styled-components';
import Hero from '../Organisms/Hero';
import { Container } from 'react-bootstrap';
import Footer from '../Organisms/Footer';
import ActionBtn from '../Atoms/ActionBtn';
import { useSwipeDown } from '../../reacthooks/useSwipeDown';
import MenuModal from '../Atoms/MenuModal';
import HorizontalScrollbar from '../Atoms/HorizontalScrollbar';
import ButtonToolbar from '../Molecules/ButtonToolbar';

const MainWrapper = styled.div`
    background-color: #0F0F0F;
    width: 100%;
    margin: 0;
    padding:  10%;
    display: block;
`;

function MainLayout({children}) {

    const {y, height, display, bgStyle, close, open, bind} = useSwipeDown()


    return (
        <>
            <a.div onClick={() => close()} style={bgStyle}>
                <MainWrapper> 
                    <p>Hopefully this works now?</p>
                    <Header /> 
                    <Hero />
                        <Container>
                            {children}
                        </Container>
                        
                    <Footer />
                </MainWrapper>
            </a.div>
            <ActionBtn onClick={open}/>
            <MenuModal 
                {...bind()}
                style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
            >
                <HorizontalScrollbar />
                <h2>MENU</h2>
                <ButtonToolbar />
            </MenuModal>
        </>

    )
}

export default MainLayout
