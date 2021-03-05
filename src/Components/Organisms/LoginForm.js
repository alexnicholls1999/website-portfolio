import React, {useEffect, useRef, useState} from 'react'
import PropTypes from "prop-types"
import useShrink from '../../reacthooks/useShrink'
import { Formik, useFormik } from 'formik'
import Button from '../Atoms/Button'
import ErrorMessage from '../Atoms/ErrorMessage'
import FormControl from '../Molecules/FormControl'
import ErrorLabel from '../Atoms/ErrorLabel'



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
                errorLabel={formik.errors.email}
                // style={formik.errors.email && {opacity: "1"}}
            />

            {/* <ErrorLabel errorMessage={formik.errors.email}/> */}

            <FormControl 
                password
                shrunk={isPasswordShrinked}
                onFocus={handlePasswordOnFocus}
                onBlur={handlePasswordOnBlur}
                labelName="Password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                InputRef={inputPasswordRef}
                errorLabel={formik.errors.password}
                // style={formik.errors.password && {opacity: "1"}}
            />

            {/* <ErrorLabel errorMessage={formik.errors.password}/> */}

            <div className="p-1"></div>

            <ErrorMessage active={serverError}>{serverError}</ErrorMessage>
            
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
