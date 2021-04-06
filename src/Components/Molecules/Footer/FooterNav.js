import React from 'react'
import styled from "styled-components";

const IndexFooter = styled.div`
    text-align: center;
    padding-top: 50px;
    padding-bottom: 50px;

    @media (min-width: 768px) {
        padding: 0;
    }

`;

function FooterNav() {
    return (
        <IndexFooter>
            <p>Chichester, West Sussex</p>
        </IndexFooter>
    )
}

export default FooterNav
