import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import { useForm } from 'react-hook-form';
import Button from "../Components/Button";
import styled from "styled-components";
import ErrorLabel from "../Components/ErrorLabel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import * as yup from 'yup';

const eye = <FontAwesomeIcon icon={faEye}/>;
const eyehidden = <FontAwesomeIcon icon={faEyeSlash}/>;

const Form = styled.form`

    position: relative;
    width: 100%;
`;

const Input = styled.input`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border: none;
    outline: none;
    background: none;
    padding: 0.5rem 0.7rem;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.white};

`;


const StyledInput = styled.div`

    width: 316px;
    margin: 25px 0;
    padding: 5px 0;
    border-bottom: 2px solid white;

    .one {
        margin-top: 0;
    }

    .two {
        margin-bottom: 4px;
    }

    .focus {
        display: none;
    }
    

    div {
        position: relative;
        height: 45px;

        h5 {
            position: absolute;
            left: 10px;
            top: 50%;
            transform: translateY(-50%);
            color: ${({ theme }) => theme.colors.white};
            font-size: 18px;
            transition: .3s;
        }
    }

    ::after, ::before {
        content: '';
        position: absolute;
        bottom: -2px;
        width: 0;
        height: 2px;
        background-color: #38d39f;
        transition: .3s;
    }




`;

const Eye = styled.i`
    position: absolute;
    top: 38%;
    right: 10px;
    color: white;

    :hover {
        
        cursor: pointer;
    }
`;


function LoginForm(props) {
    
    const {buttonText, onSubmit, serverError} = props;

    const loginFormSchema = yup.object().shape({
        email: yup.string().email('Please enter a valid email address').required('please enter a email'),
        password: yup.string().required('please enter a password').min(5, 'password must be at 5 characters long')
    })
    
    const { register, handleSubmit, errors } = useForm({validationSchema:loginFormSchema});

    const handleInnerSubmit = data => { onSubmit(data) }
    const errorActive = error => error && ({color: "black !important"})

    const [passwordShow, setPasswordShow] = useState(false);
    const [eyeVisible, setEyeVisible] = useState(false);

    const togglePasswordVisilbity = () => {
        setPasswordShow(passwordShow ? false : true);
        setEyeVisible(eyeVisible ? false : true);
    }

    return(
        <div>
            <Form onSubmit={handleSubmit(handleInnerSubmit)}>
                <StyledInput className="one">
                    <div>
                        <h5>Email</h5>
                        <Input type="text" name="email" className="input" ref={register}></Input>
                    </div>
                </StyledInput>
                
                <StyledInput className="two">
                    <div>
                        <h5>Password</h5>
                        <Input type={passwordShow ? "text" : "password"} name="password" className="input" ref={register}></Input>
                        <Eye onClick={togglePasswordVisilbity}>{eyeVisible ? eyehidden : eye}</Eye>{" "}
                    </div>
                </StyledInput>
                
                <ErrorLabel>{serverError}</ErrorLabel>

                <div className="p-3"></div>

                <Button text={buttonText} />
                
            </Form>
        </div>
    )
}

LoginForm.propTypes = {
    buttonText: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
    error: PropTypes.string
};

LoginForm.defaultProps = {
    buttonText: " ",
    serverError: '',
}


export default LoginForm;
