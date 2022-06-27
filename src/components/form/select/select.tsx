import { useField, FieldHookConfig } from 'formik';
import React, { ClassAttributes, SelectHTMLAttributes } from 'react';

interface IProps {
    label: string
}

type finalProps = IProps & FieldHookConfig<string> & SelectHTMLAttributes<HTMLSelectElement> & ClassAttributes<HTMLSelectElement>

export const Select = (props: finalProps) => {
    const [field, meta] = useField(props)
    return (
        <React.Fragment>
            <label>{props.label}</label>
            <select {...field} {...props} />
            {meta.touched && meta.error ? (<div className="error">{meta.error}</div>) : null}
        </React.Fragment>
    )
}