import { FieldHookConfig, useField } from 'formik';
import { ClassAttributes, FunctionComponent, SelectHTMLAttributes } from 'react';

interface SelectProps {
    label: string
}
type finalProps = SelectProps & FieldHookConfig<string> & SelectHTMLAttributes<HTMLSelectElement> & ClassAttributes<HTMLSelectElement>

const Select: FunctionComponent<finalProps> = (props) => {
    const [field, meta] = useField(props)
    return (
        <>
            <label>{props.label}</label>
            <select {...field} {...props} />
            {meta.touched && meta.error ? (<div className="error">{meta.error}</div>) : null}
        </>
    );
}

export default Select;