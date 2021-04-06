import React from 'react'
import styled from "styled-components";
import { faTwitterSquare, faMedium, faLinkedin, faDribbbleSquare } from "@fortawesome/free-brands-svg-icons";
import SocialMediaIcon from '../Atoms/SocialMediaIcon';

const StyledSocialMedia = styled.div`
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;

    @media (min-width: 768px) {
        justify-content: flex-end;
    }
`;

function SocialMedia() {
    return (
        <StyledSocialMedia>
            <SocialMediaIcon socialmedia={faTwitterSquare} />
            <SocialMediaIcon socialmedia={faDribbbleSquare} />
            <SocialMediaIcon socialmedia={faLinkedin} />
            <SocialMediaIcon socialmedia={faMedium} />
        </StyledSocialMedia>
    )
}

export default SocialMedia
