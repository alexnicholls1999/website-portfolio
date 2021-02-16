import React from 'react';
import styled from "styled-components";
import Logo from '../../Atoms/Logo';


const StyledContactFooter = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
    padding-top: 50px;
    color: white;


    ul {
        list-style: none;
        margin: 0 auto;
        padding: 0;
        padding-top: 25px;

        li {
            padding: 5px;
        }
    }

    @media (min-width: 768px) {
        padding-top: 0;

        ul {
            padding: 0;
        }
    }

`;

function ContactFooter() {
    return (
        <StyledContactFooter>
            <ul>
                <li>07904221801</li>
                <li>azini@live.co.uk</li>
            </ul>
        </StyledContactFooter>
    )
}

export default ContactFooter
