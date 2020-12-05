import React from 'react';
import styled from 'styled-components';
import {Container, Row} from "react-bootstrap";

import Text from './Text';

const StyledWallpaper = styled.div`
    img {
        width: 100%;
    }
`;

function Wallpaper(props) {

    const {title , image, alt} = props;

    return (
        <StyledWallpaper>              
            <img src={image} alt={alt}/>
        </StyledWallpaper>
    )
}

export default Wallpaper;