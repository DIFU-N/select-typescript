type selectOptions = {
    label: string,
    value: any
}

type selectProps = {
    value?: selectOptions,
    options: selectOptions[],
    onChange: (value: selectOptions | undefined) => void
}

const Select = ({value, onChange, options}: selectProps) => {
  return (
    <div className="w-full mx-20">
        <div onClick={()=> onChange} className="w-98 border-black border-2 h-14">
            <div>{value?.label}</div>
            <ul>
                {options?.map((m) => (
                    <li key={m.value}>{m.label}</li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Select