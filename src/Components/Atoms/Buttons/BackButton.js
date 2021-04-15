import React from 'react'
import PropTypes from 'prop-types';
import styled from "styled-components";

const BackBtn = styled.h6`
  text-align: center;
  padding: 10px;
  padding-bottom: 20px;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;

function BackButton({onClick}) {
    return <BackBtn onClick={onClick}>CLOSE</BackBtn>

}

BackButton.defaultProps = {
    onClick: () => {}
}

BackButton.propTypes = {
    onClick: PropTypes.func
}

export default BackButton
