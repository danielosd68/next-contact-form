import {HTMLInputTypeAttribute, ReactNode} from "react";

const TextInput = (props: {fieldset: string | ReactNode, name: string, type?: HTMLInputTypeAttribute}) => {
    return (
        <>
            <p className={'mb-3'}>{props.fieldset}</p>
            <input type={props.type} name={props.name} className={'outline-none w-full h-[45px] p-5 text-[16px] rounded-lg border-[1px] border-[--foreground]'}/>
        </>
    )
}

export default TextInput;