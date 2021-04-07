import React from 'react'
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function SocialMediaIcon({socialmedia}) {
    return <FontAwesomeIcon className="fab px-2" size="3x" icon={socialmedia}/>
}

SocialMediaIcon.defaultProps = {
    path: "",
    socialmedia: {}
}

SocialMediaIcon.propTypes = {
    path: PropTypes.string,
    socialmedia: PropTypes.object
}

export default SocialMediaIcon
