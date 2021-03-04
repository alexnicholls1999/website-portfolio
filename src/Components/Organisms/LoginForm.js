import React, {useEffect, useRef, useState} from 'react'
import PropTypes from "prop-types"
import useShrink from '../../reacthooks/useShrink'
import { Formik, useFormik } from 'formik'
import Button from '../Atoms/Button'
import ErrorMessage from '../Atoms/ErrorMessage'
import FormControl from '../Molecules/FormControl'
import * as Yup from "yup";
import ErrorLabel from '../Atoms/ErrorLabel'

const LoginSchema = Yup.object({
    email: Yup.string().min(2, "Too Short!").required("Required!"),
    password: Yup.string().min(2, "Too Short!").required("Required!")
});

function LoginForm({onSubmit, serverError}) {

    const {
        formik,
        inputEmailRef,
        inputPasswordRef,
        isEmailShrinked,
        isPasswordShrinked,
        handleEmailOnBlur,
        handleEmailOnFocus,
        handlePasswordOnFocus,
        handlePasswordOnBlur
    } = useShrink(onSubmit);

    

    return (
        <form autoComplete="off" onSubmit={formik.handleSubmit}>
            <FormControl 
                shrunk={isEmailShrinked}
                onFocus={handleEmailOnFocus}
                onBlur={handleEmailOnBlur}
                labelName="Email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                InputRef={inputEmailRef}
            />

            <ErrorLabel errorMessage={formik.errors.email}/>

            <FormControl 
                shrunk={isPasswordShrinked}
                onFocus={handlePasswordOnFocus}
                onBlur={handlePasswordOnBlur}
                labelName="Password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                InputRef={inputPasswordRef}
            />

            <ErrorLabel errorMessage={formik.errors.password}/>

            <div className="p-1"></div>

            <ErrorMessage>{serverError}</ErrorMessage>
            
            <Button type="submit" text="LOGIN"/>
            
        </form>
    )
}

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    error: PropTypes.string
}

LoginForm.defaultProps = {
    serverError: ' '
}


export default LoginForm
