import React from 'react';
import PropTypes from "prop-types";
import { Col } from "react-bootstrap";

import Tile from "./../Atoms/Tile"

function Project({ onClick, projectImg}) {
    return (
        <Col md={6} sm={6}>
            <Tile onClick={onClick} projectImg={projectImg}/>
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
