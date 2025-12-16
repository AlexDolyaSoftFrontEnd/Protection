import React from "react";
import { InputProps } from "../../../types/modalProps";
import { inputClass } from "@/constants/formConst";

export const CustomInput = ({
  id,
  value,
  placeholder,
  error,
  onChange,
  className = "",
}: InputProps) => {
  return (
    <div className=" relative group tab:w-1/2">
      <label htmlFor="name"></label>
      <input
        type="text"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={` font-lora mt-6 tab:mt-0 mb-7 tab:mb-0 placeholder:text-sm placeholder:pc:text-lg pc:text-xl block w-full bg-transparent border-0 pb-4 tab:pb-[10px] pc:pb-7 tab:pt-[15px] pc:pt-[29px] pl-[18px] pr-4 tab:pl-5 placeholder:uppercase font-semibold text-textInput placeholder:text-formLight group-focus:outline-none focus:outline-none focus:ring-0 ${className} `}
      />
      <div className="absolute bottom-0 left-0 w-full h-3 border border-t-0 border-text group-focus:border-title transition-all duration-500 ease-in" />
      {error && (
        <p className="absolute bottom-[-20px] left-0 text-error mt-1">
          {error}
        </p>
      )}
    </div>
  );
};
