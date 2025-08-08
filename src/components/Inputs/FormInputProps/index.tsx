import type { FormInputProps } from "../../../interfaces/FormInputProps";

const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  iconLeft,
  textColor = "text-gray-100",
  placeholderColor = "placeholder-gray-100",
  borderColor = "border-gray-50",
  ...rest
}) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={name} className="text-sm text-gray-100">
          {label}
        </label>
      )}
      <div
        className={`flex items-center px-3 py-2 rounded-lg border ${borderColor} bg-white/5 backdrop-blur-sm focus-within:border-blue-50 transition-colors duration-200`}
      >
        {iconLeft && <div className="mr-2 text-gray-100">{iconLeft}</div>}
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`flex-1 bg-transparent border-none outline-none text-sm ${textColor} ${placeholderColor}`}
          {...rest}
        />
      </div>
    </div>
  );
};

export default FormInput;
