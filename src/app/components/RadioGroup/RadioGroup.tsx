import {ReactNode} from "react";

const RadioGroup = (props: {children: ReactNode, fieldset: string}) => {
    return (
        <>
            <p className={'mb-3'}>Rodzaj pytania</p>
            <div className={'grid grid-cols-2 gap-5'}>
                {props.children}
            </div>
        </>
    )
}

export default RadioGroup;