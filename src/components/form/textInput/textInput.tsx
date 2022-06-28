import { FieldHookConfig, useField } from 'formik';
import { ClassAttributes, InputHTMLAttributes } from 'react';

interface IProps {
    label: string
}

type finalProps = IProps & FieldHookConfig<string> & InputHTMLAttributes<HTMLInputElement> & ClassAttributes<HTMLInputElement>

export const TextInput = (props: finalProps) => {
    const [field, meta] = useField(props)
    return (
        <>
            <label>{props.label}</label>
            <input className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (<p className="error">{meta.error}</p>) : null}
        </>
    )
}