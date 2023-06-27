import React from "react";

interface InputProps {
  id: string;
  onChange: any;
  value: string;
  label: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({ id, onChange, value, label, type }) => {
  return (
    <div className="relative">
      <input
        onChange={onChange}
        id={id}
        value={value}
        type={type}
        className="
        block rounded-md w-full
        px-6 pt-6 pb-1
        text-md text-white bg-neutral-700
        appearance-none focus:outline-none focus:ring-0
        peer"
        placeholder=" "
      />
      <label
        className="top-4 left-6 absolute z-10
        text-md text-zinc-400
        transform duration-150 origin-[0]
        peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
        peer-focus:scale-75 peer-focus:-translate-y-3
        -translate-y-3 scale-75"
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
