import React from 'react';
import styled from "styled-components";

const Tile = styled.div`
    box-shadow: 0px 5px 17px rgba(0, 0, 0, 0.4);

    img {
        position: relative;
        border-radius: 20px;
        width: 100%;

        :hover {
            transform: scale(1.025);
            transition: .5s ease;
        }
    }
`;

export default Tile;
