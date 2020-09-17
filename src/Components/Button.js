import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

function Button(props) {

  const {onClick, text, ...args} = props;
    
  const StyledButton = styled.button`
    height: 44.63px;
    background: #107CDC;
    border-radius: 7px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-top: 6%;
    border: none;
    width: 100%;
    font-size: 15px;
  `;

  return(  
    <StyledButton onClick={onClick} {...args}> {text} </StyledButton>
  )
}

Button.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string.isRequired
}

Button.defaultProps = {
    onClick: () => {}
}

export default Button;