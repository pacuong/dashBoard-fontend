import type { BaseButtonProps } from "../../../interfaces/ButtonProps";

const AuthLinkButton: React.FC<BaseButtonProps> = ({
  label,
  onClick,
  className = "",
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`text-primary-purple hover:text-primary-purple font-medium transition-colors duration-200 ${className}`}
    >
      {label}
    </button>
  );
};

export default AuthLinkButton;
