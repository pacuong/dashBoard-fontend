import type { BaseButtonProps } from "../../../interfaces/ButtonProps";

const SubmitButton: React.FC<BaseButtonProps> = ({
  label,
  onClick,
  type = "submit",
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full bg-primary-purple hover:bg-primary-red text-white-100 font-semibold py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${className}`}
    >
      {label}
    </button>
  );
};

export default SubmitButton;
