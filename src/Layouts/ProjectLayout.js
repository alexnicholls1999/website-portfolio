import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Hero from "./../Components/Organisms/Hero";
import BackButton from "../Components/Atoms/Buttons/BackButton";

const ProjectWrapper = styled.div`
  overflow: auto;
  overflow-y: overlay;
  -webkit-overflow-scrolling: touch;
  -webkit-transform: translate3d(0, 0, 0);
  height: 100%;
  border-radius: 0.5em;

  /* total width */
  &::-webkit-scrollbar {
    display: none;
  }
`;

const HeroWrapper = styled.div`
  position: relative;
  height: 35%;
`;

const ProjectContainer = styled.div`
  position: relative;
  padding: 20px 40px;
  color: white;
`;

const CloseBtn = styled.h5`
  color: white;
  position: absolute;
  top: 10px;
  right: 20px;
  z-index: 2;
  cursor: pointer;
`;


function ProjectLayout({ onClose, children, img }) {
  const handleonClose = (e) => {
    onClose && onClose(e);
  };

  return (
    <>
      <ProjectWrapper>
        <HeroWrapper>
          <Hero project img={img} />
          <CloseBtn onClick={handleonClose}>CLOSE</CloseBtn>
        </HeroWrapper>
        <ProjectContainer>{children}</ProjectContainer>
        <BackButton onClick={handleonClose} />
      </ProjectWrapper>
    </>
  );
}

ProjectLayout.defaultProps = {
    children: undefined,
    onClose: () => {},
    img: ""
}

ProjectLayout.propTypes = {
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func,
    img: PropTypes.string
}


export default ProjectLayout;