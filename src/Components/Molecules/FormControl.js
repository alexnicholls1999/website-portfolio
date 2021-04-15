import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Input from '../Atoms/Form/Input';
import Label from '../Atoms/Form/Label';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";


const eye = <FontAwesomeIcon icon={faEye}/>
const eyeHidden = <FontAwesomeIcon icon={faEyeSlash}/>


const StyledFormControl = styled.div`
  position: relative;
  width: 250px;
  padding: 5px 0;
  border-bottom: 2px solid ${({ theme }) => theme.colors.white};
  @media (min-width: 765px) {
    width: 300px;
  }
`;

const Eye = styled.i`
  position: absolute;
  top: 5%;
  right: 10px;
  color: ${({ theme }) => theme.colors.white};
  :hover {
    cursor: pointer;
  }
`;

function FormControl({ labelName, shrunk, inputRef, type, password, errorMessage, ...props}) {

  const [passwordShow, setPasswordShow] = useState(false);
  const [eyeVisible, setEyeVisible] = useState(false);
  
  const togglePasswordVisibilty = () => {
    setPasswordShow(passwordShow ? false : true);
    setEyeVisible(eyeVisible ? false : true);
  }

  return (
    <>
        {!password ? (
          <>
            <StyledFormControl>
              <Label shrunk={shrunk} text={labelName} />
              <br/>
              <Input 
                type={type}
                inputRef={inputRef}
                {...props}
              />
            </StyledFormControl>

            <Label errorLabel errorMessage={errorMessage} />
          </>
        ) : (
          <>
            <StyledFormControl>
              <Label shrunk={shrunk} text={labelName} />
              <br/>
              <Input 
                type={passwordShow ? "text" : "password"}
                inputRef={inputRef}
                {...props}
              />
              <Eye onClick={togglePasswordVisibilty}>{eyeVisible ? eyeHidden : eye}</Eye>
            </StyledFormControl>

            <Label errorLabel errorMessage={errorMessage}/>
          </>
        )}
    </>
    )
}

FormControl.defaultProps = {
  labelName: ' ',
  password: false,
  type: '', 
  shrunk: false,
  errorMessage: '',
}

FormControl.propTypes = {
    shrunk: PropTypes.bool,
    password: PropTypes.bool,
    labelName: PropTypes.string,
    type: PropTypes.string,
    errorMessage: PropTypes.string,
}

export default FormControl;