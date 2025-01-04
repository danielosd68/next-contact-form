const RadioOption = (props: {id: string, name: string, label: string}) => {
    return (
        <div
            className={'outline-none w-full h-[45px] text-[16px] rounded-lg border-[1px] border-[--foreground] flex justify-start items-center pl-5'}>
            <input type="radio" id={props.id} name={props.name} className={'mr-5'}/>
            <label htmlFor={props.id}>{props.label}</label>
        </div>
    )
}

export default RadioOption;