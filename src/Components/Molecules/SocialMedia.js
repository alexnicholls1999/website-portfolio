import React from 'react';
import SocialMediaIcon from '../Atoms/SocialMediaIcon';
import { faInstagram, faMedium, faLinkedin, faDribbbleSquare } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components"

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
            <SocialMediaIcon socialmedia={faInstagram} />
            <SocialMediaIcon socialmedia={faDribbbleSquare} />
            <SocialMediaIcon socialmedia={faLinkedin} />
            <SocialMediaIcon socialmedia={faMedium} />
        </StyledSocialMedia>
    )
}

export default SocialMedia;
