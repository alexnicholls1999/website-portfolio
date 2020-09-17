import React from "react";
import styled from "styled-components";
import { subYears } from "date-fns";

const Tile = styled.div`
    
    box-shadow: 0px 5px 17px rgba(0, 0, 0, 0.4);
    

    img:hover {
        transform: scale(1.025);
        transition: .5s ease;
    }

    

`;


export default Tile;

