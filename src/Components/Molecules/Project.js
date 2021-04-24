import React from 'react';
import styled from "styled-components";
import PropTypes from "prop-types";
import { Col } from "react-bootstrap";

import Tile from "./../Atoms/Tile"
import FadeIn from '../../Animation/FadeIn';

function Project({ onClick, projectSrc, animation}) {
    return (
        <Col md={6} sm={6}>
            <FadeIn>
                <Tile onClick={onClick}>
                    {animation ? (
                        <video loop autoPlay muted>
                            <source src={projectSrc} type="video/MP4" />
                        </video>
                    ) : (
                        <img src={projectSrc} alt='project'/>
                    )}                    
                </Tile>
            </FadeIn>
            <br/>
        </Col>
    )
}

Project.defaultProps = {
    projectSrc: "",
    animation: false,
    onClick: () => {}
}

Project.propTypes = {
    projectSrc: PropTypes.string.isRequired,
    animation: PropTypes.bool,
    onClick: PropTypes.func
}

export default Project;
