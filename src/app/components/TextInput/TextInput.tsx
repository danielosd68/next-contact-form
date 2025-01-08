import {HTMLInputTypeAttribute, ReactNode} from "react";
import {ErrorMessage, Field} from "formik";

const TextInput = (props: {
    fieldset: string | ReactNode,
    name: string,
    type?: HTMLInputTypeAttribute,
    value?: string
}) => {
    return (
        <>
            <p className={'mb-3'}>{props.fieldset}</p>
            <Field name={props.name} className={'outline-none w-full h-[45px] p-5 text-[16px] rounded-lg border-[1px] border-[--foreground]'}/>
            <ErrorMessage name={props.name} render={(errorMessage) => (<p className={'text-red-500'}>{errorMessage}</p>)}/>
        </>
)
}

export default TextInput;