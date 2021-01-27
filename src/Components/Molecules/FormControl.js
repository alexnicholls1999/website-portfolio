import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Atoms/Input';
import Label from '../Atoms/Label';
import { Field } from 'formik';
import ErrorLabel from '../Atoms/ErrorLabel';
import styled from 'styled-components';

const StyledFormControl = styled.div`
  position: relative;
  width: 316px;
  padding: 5px 0;
  margin: 25px 0;
  border-bottom: 2px solid white;

  &:after, &:before {
    content: '';
    position: absolute;
    bottom: -2px;
    width: 0;
    height: 2px;
    background-color: #38d39f;
    transition: .3s ease-in-out;
  }

`

function FormControl(props) {

  const { labelText , name, ...Props} = props;

  return (
        <StyledFormControl>
          <Label label={labelText} />
          <Input name={name} {...Props} />
        </StyledFormControl>
    )
}

FormControl.propTypes = {
  labelText: PropTypes.string,
  name: PropTypes.string
}

FormControl.defaultProps = {
  labelText: ' '
}

export default FormControl;
