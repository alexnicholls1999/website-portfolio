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
import { useSwipeDown } from "../react-hooks/useSwipeDown";
import Button from "../Components/Atoms/Buttons/Button";

import VMWallpaper from "../assets/vintagemovies/VMWallpaper.png";
import WebcoWallpaper from "../assets/webco/webcowallpaper.png";
import YourGymWallpaper from "../assets/yourGym/your-gym-wallpaper.png";
import DementiaWallpaper from "../assets/dementia/dementiawallpaper.png";

import VintageMovies from "../Pages/VintageMovies";
import Webco from "../Pages/Webco";
import YourGym from "../Pages/YourGym";
import Menu from "../Components/Organisms/Menu";
import Dementia from "../Pages/Dementia";

const StyledWork = styled(a.div)`
    position: absolute;
    height: 100vh;
    width: 100vw;
`;

function MainLayout({
    children,
    vintagemovies,
    webco,
    yourGym,
    dementia,
    showVintageMovies,
    showWebco,
    showYourGym,
    showDementia
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

            <Modal onClose={showVintageMovies} show={vintagemovies}>
                <ProjectLayout img={VMWallpaper} onClose={showVintageMovies}>
                    <VintageMovies />
                </ProjectLayout>
            </Modal>

            <Modal onClose={showWebco} show={webco}>
                <ProjectLayout img={WebcoWallpaper} onClose={showWebco}>
                    <Webco />
                </ProjectLayout>
            </Modal>

            <Modal onClose={showYourGym} show={yourGym}>
                <ProjectLayout darkMode img={YourGymWallpaper} onClose={showYourGym}>
                    <YourGym />
                </ProjectLayout>
            </Modal>

            <Modal onClose={showDementia} show={dementia}>
                <ProjectLayout darkMode img={DementiaWallpaper} onClose={showDementia}>
                    <Dementia />
                </ProjectLayout>
            </Modal>

            <Button menuButton onClick={open} />

            <Modal 
                menuModal
                {...bind()}
                style={{display, bottom: `calc(-100vh + ${height - 100}px)`, y}}
            >
                <Menu handleCloseClick={() => close()}/>
            </Modal>
        </>
    )
}

MainLayout.defaultProps = {
    children: undefined,
    vintagemovies: false,
    webco: false,
    yourGym: false,
    showVintageMovies: () => {},
    showDementia: () => {},
    showWebco: () => {},
    showYourGym: () => {},
}

MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
    vintagemovies: PropTypes.bool,
    webco: PropTypes.bool,
    yourGym: PropTypes.bool,
    showVintageMovies: PropTypes.func.isRequired,
    showDementia: PropTypes.func.isRequired,
    showWebco: PropTypes.func.isRequired,
    showYourGym: PropTypes.func.isRequired,
}

export default MainLayout;