import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const LoginSchema = Yup.object({
    email: Yup.string().min(2, "Too Short!").required("Required!"),
    password: Yup.string().min(2, "Too Short!").required("Required!")
});

export default function useLogin(onSubmit){
    const handleInnerSubmit = (data) => {onSubmit(data)}

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: LoginSchema,
        onSubmit: data => {
            handleInnerSubmit(data)
        }
    })

    return {
        formik
    }
}