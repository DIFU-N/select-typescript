import { useState } from "react";

export type selectOptions = {
  label: string;
  value: any;
};

type singleSelectProps = {
  multiple?: false;
  value?: selectOptions;
  options: selectOptions[];
  onChange: (value: selectOptions | undefined) => void;
};

type multipleSelectProps = {
  multiple: true;
  value: selectOptions[];
  options: selectOptions[];
  onChange: (value: selectOptions[]) => void;
};

type selectProps = {
    options: selectOptions[];
} & (singleSelectProps | multipleSelectProps)

const Select = ({ multiple, value, onChange, options }: selectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const clearField = () => {
    multiple ? onChange([]) : onChange(undefined);
  };
  const selectOption = (option: selectOptions) => {
    console.log(option);
    
        if(multiple) {
            if(value.includes(option)) {
                onChange(value.filter(o => o !== option)) 
            } else {
                onChange([...value, option])
            } 
        } else {
            option === value ?  null : onChange(option)
        }
  }
  return (
    <div className="w-full px-20 text-lg">
      <div
        onBlur={() => setIsOpen(false)}
        tabIndex={1}
        className="w-96 grid relative grid-cols-[85%_15%] gap-y-3 border-black border-2 h-10"
      >
        <div className="pt-1 mx-2">{multiple ? value.map((m) => (<button>{m.label}</button>)): value?.label}</div>
        <div className="flex absolute items-center right-0 top-0 bottom-0 justify-between">
          <button
            onClick={(e) => {
              e.stopPropagation();
              clearField();
            }}
            className="font-bold items-center"
          >
            &times;
          </button>
          <span className="border-r-2 h-full w-2 border-black"></span>
          <svg
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen((prev) => !prev);
            }}
            className="w-6 h-7 fill-black"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M6 8l4 4 4-4"></path>
          </svg>
        </div>
        <ul
          className={`mt-12 w-96 absolute left-0 border-2 border-black rounded-md  ${
            isOpen ? "block" : "hidden"
          } `}
        >
          {options?.map((m) => (
            <li
              className={`${
                m.value === options.length ? "" : "border-b-2"
              } cursor-pointer w-full border-black p-2`}
              onClick={(e) => {
                selectOption(m)
                console.log(m);
                
                e.stopPropagation();
                setIsOpen(false);
              }}
              key={m.value}
            >
              {m.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Select;
