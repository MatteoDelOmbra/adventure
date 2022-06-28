import { FieldHookConfig, useField } from 'formik';
import { ClassAttributes, FunctionComponent, InputHTMLAttributes } from 'react';

interface TextInputProps {
    label: string
}
type finalProps = TextInputProps & FieldHookConfig<string> & InputHTMLAttributes<HTMLInputElement> & ClassAttributes<HTMLInputElement>

const TextInput: FunctionComponent<finalProps> = (props) => {
    const [field, meta] = useField(props)
    return (
        <>
            <label>{props.label}</label>
            <input className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (<p className="error">{meta.error}</p>) : null}
        </>
    );
}

export default TextInput;

