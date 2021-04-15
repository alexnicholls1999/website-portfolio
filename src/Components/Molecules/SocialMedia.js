import React from 'react'
import styled from "styled-components";
import { faTwitterSquare, faMedium, faLinkedin, faBehanceSquare } from "@fortawesome/free-brands-svg-icons";
import SocialMediaIcon from '../Atoms/SocialMediaIcon';

const StyledSocialMedia = styled.div`
    color: ${({ theme }) => theme.colors.white};
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
            <SocialMediaIcon smlink="https://twitter.com/alex_azini" socialmedia={faTwitterSquare} />
            <SocialMediaIcon smlink="https://www.behance.net/azini6326" socialmedia={faBehanceSquare} />
            <SocialMediaIcon smlink="https://www.linkedin.com/in/alex-ziet%C3%A1ra-nicholls-19ba33172/" socialmedia={faLinkedin} />
            <SocialMediaIcon smlink="https://medium.com/@azini_76170" socialmedia={faMedium} />
        </StyledSocialMedia>
    )
}

export default SocialMedia
