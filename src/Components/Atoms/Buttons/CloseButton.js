import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import CloseButtonIcon from '../../../assets/CloseCircle.svg';

const StyledCloseButtonIcon = styled.img`
    right: 10px;
    position: absolute;
    top: 15px;
    height: 50px;
    width: 30px;
`;

function CloseButton({onClick}) {
    return (
        <>
            <StyledCloseButtonIcon onClick={onClick} src={CloseButtonIcon} />
        </>
    )
}

CloseButton.defaultProps = {
    onClick: () => {}
}

CloseButton.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default CloseButton;
