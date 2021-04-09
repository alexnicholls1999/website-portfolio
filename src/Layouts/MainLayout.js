import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { a } from "react-spring";
import { Container } from "react-bootstrap";

import Modal from "../Components/Atoms/Modal";
import Header from "../Components/Organisms/Header";
import Hero from "../Components/Organisms/Hero";
import Footer from "../Components/Organisms/Footer";

import ProjectLayout from "./ProjectLayout";
import SPA from "../Pages/SPA";
import { useSwipeDown } from "../react-hooks/useSwipeDown";
import Button from "../Components/Atoms/Buttons/Button";

import VMWallpaper from "../assets/vintagemovies/VMWallpaper.png";
import VintageMovies from "../Pages/VintageMovies";

const StyledWork = styled(a.div)`
    position: absolute;
    height: 100vh;
    width: 100vw;
`;

function MainLayout({
    children,
    spa,
    vintagemovies,
    webco,
    yourGym,
    showSPA,
    showVintageMovies,
    showWebco,
    showYourGym
}) {

    const { bind, open, close, bgStyle, display, height, y } = useSwipeDown(); 
    return (
        <>
            <StyledWork onClick={() => close()} style={bgStyle}>
                <Header />
                <Hero />
                <div className="p-5"></div>
                <Container>{children}</Container>
                <div className="p-5"></div>
                <Footer />
            </StyledWork>

            <Modal show={spa}>
                <ProjectLayout onClose={showSPA}>
                    <SPA />
                </ProjectLayout>
            </Modal>

            <Modal show={vintagemovies}>
                <ProjectLayout img={VMWallpaper} onClose={showVintageMovies}>
                    <VintageMovies />
                </ProjectLayout>
            </Modal>

            <Button menuButton onClick={open} />

            <Modal 
                menuModal
                {...bind()}
                style={{display, bottom: `calc(-100vh + ${height - 100}px)`, y}}
            >
                <h2>MENU</h2>
            </Modal>
        </>
    )
}

MainLayout.defaultProps = {
    children: undefined,
    spa: false,
    vintagemovies: false,
    webco: false,
    yourGym: false,
    showSPA: () => {},
    showVintageMovies: () => {},
    showWebco: () => {},
    showYourGym: () => {},
}

MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
    spa: PropTypes.bool,
    vintagemovies: PropTypes.bool,
    webco: PropTypes.bool,
    yourGym: PropTypes.bool,
    showSPA: PropTypes.func.isRequired,
    showVintageMovies: PropTypes.func.isRequired,
    showWebco: PropTypes.func.isRequired,
    showYourGym: PropTypes.func.isRequired,
}

export default MainLayout;