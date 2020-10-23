import React from 'react';
import styled from 'styled-components';
import {Container, Row} from "react-bootstrap";

import Text from './Text';

const StyledWallpaper = styled.div`
    img {
        width: 100%
    }
`;

function Wallpaper(props) {

    const {title , src, alt} = props;

    return (
        <StyledWallpaper>              
            <img src={src} alt={alt}/>
        </StyledWallpaper>
    )
}

export default Wallpaper;