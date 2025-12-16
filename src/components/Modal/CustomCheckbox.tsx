import { FaCheck } from "react-icons/fa";
import { CheckboxProps } from "../../../types/modalProps";

export const CustomCheckbox = ({
  checked,
  onChange,
  label,
  className = "",
}: CheckboxProps) => {
  return (
    <div className="mb-4">
      <label className="inline-flex ">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className={`hidden peer font-lora ${className}`}
        />
        <FaCheck className="peer-checked:text-white text-transparent min-w-5 h-5 border-2 border-gray-400 peer-checked:border-green-500 peer-checked:bg-green-500 transition-colors flex items-center justify-center mt-1" />
        <span className="ml-2 text-white text-base">{label}</span>
      </label>
    </div>
  );
};
