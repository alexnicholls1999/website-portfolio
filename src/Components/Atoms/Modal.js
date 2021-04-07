import React from 'react'
import styled from "styled-components";
import PropTypes from "prop-types";

const ModalWrapper = styled.div`
  position: fixed;
  z-index: 200;
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
  height: 90vh;
  background-color: #0f0f0f;
  position: relative;
  border: 5px;
  box-shadow: 2px 4px 20px 0px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
`;

function Modal({ show, children }) {
    return (
        <>
          {!show ? null : (
            <ModalWrapper>
              <StyledModal>{children}</StyledModal>
            </ModalWrapper>
          )}
        </>
      );
}

Modal.defaultProps = {
    show: false
  };
  
  Modal.propTypes = {
    show: PropTypes.bool.isRequired
  };

export default Modal
