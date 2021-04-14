import React from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faWindowRestore } from '@fortawesome/free-regular-svg-icons';

const SocialMediaLink = styled.div`
    &:hover {
        transform: scale(1.5);
        transition: 0.5s ease-in-out;  
    }

`;

function SocialMediaIcon({socialmedia, smlink }) {
    
    const handleSocialMediaLink = (e) => {
        window.open(`${smlink}`);
        e.preventDefault();
    }
    
    return (
        <SocialMediaLink onClick={handleSocialMediaLink}>
            <FontAwesomeIcon className="fab px-2" size="3x" icon={socialmedia}/>
        </SocialMediaLink>

    )
}

SocialMediaIcon.defaultProps = {
    smlink: "",
    socialmedia: {}
}

SocialMediaIcon.propTypes = {
    smlink: PropTypes.string,
    socialmedia: PropTypes.object
}

export default SocialMediaIcon
