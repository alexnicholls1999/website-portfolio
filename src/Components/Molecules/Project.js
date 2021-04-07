import React from 'react';
import PropTypes from "prop-types";
import { Col } from "react-bootstrap";

import Tile from "./../Atoms/Tile"
import FadeIn from '../../Animation/FadeIn';

function Project({ onClick, projectImg}) {
    return (
        <Col md={6} sm={6}>
            <FadeIn>
                <Tile onClick={onClick}>
                    <img src={projectImg} alt='project'/>
                </Tile>
            </FadeIn>
            <br/>
        </Col>
    )
}

Project.defaultProps = {
    projectImg: "",
    onClick: () => {}
}

Project.propTypes = {
    projectImg: PropTypes.string.isRequired,
    onClick: PropTypes.func
}

export default Project;
