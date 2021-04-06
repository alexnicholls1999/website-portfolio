import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";

import Header from "../Components/Organisms/Header";
import Hero from "../Components/Organisms/Hero";
import Footer from "../Components/Organisms/Footer";

const StyledWork = styled.div`
    // position: absolute;
    // height: 100vh;
    // width: 100vw;
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
    return (
        <>
            <StyledWork>
                <Header />
                <Hero />
                <Container>{children}</Container>
                <div className="p-5"></div>
                <Footer />
            </StyledWork>
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