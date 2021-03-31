import React from 'react';
import styled from "styled-components";
import PropTypes from "prop-types";

const ModalWrapper = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.75);
    display: flex;
    justify-content: center;
    padding: 50px 20px;
    overflow-y: hidden;
`;

const StyledModal = styled.div`
    width: 750px;
    height: 750px;
    background-color: #0f0f0f;
    position: relative;
    border: 5px;
    box-shadow: 2px 4px 20px 0px rgba(0, 0, 0, 0.75);
    border-radius: 10px;
`;

const CloseBtn = styled.h5`
    color: white;
    position: absolute;
    top: 10px;
    right: 20px;
    z-index: 2;
    cursor: pointer;
`;

function Modal({onClose, show, children}) {
    
    const handleonClose = (e) => {
        onClose && onClose(e);
    }
    
    return (
        <>
          {!show ? null : (
              <ModalWrapper>
                  <StyledModal>
                      <CloseBtn onClick={handleonClose}>CLOSE</CloseBtn>
                      {children}
                  </StyledModal>
              </ModalWrapper>
          )}  
        </>
    )
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
}

export default Modal;
