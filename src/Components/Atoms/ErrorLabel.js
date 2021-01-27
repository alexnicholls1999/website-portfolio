import React from 'react'
import { ErrorMessage, useField } from "formik";
import PropTypes from 'prop-types';

function ErrorLabel(props) {
    const [field, meta] = useField(props);

    return (
        <>
            <ErrorMessage name={field.name} />
        </>
    )
}


export default ErrorLabel
