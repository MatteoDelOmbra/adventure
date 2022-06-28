import { FieldHookConfig, useField } from 'formik';
import { ClassAttributes, SelectHTMLAttributes } from 'react';

interface IProps {
    label: string
}

type finalProps = IProps & FieldHookConfig<string> & SelectHTMLAttributes<HTMLSelectElement> & ClassAttributes<HTMLSelectElement>

export const Select = (props: finalProps) => {
    const [field, meta] = useField(props)
    return (
        <>
            <label>{props.label}</label>
            <select {...field} {...props} />
            {meta.touched && meta.error ? (<div className="error">{meta.error}</div>) : null}
        </>
    )
}