import type { BaseButtonProps } from "../../../interfaces/ButtonProps";

const LogoutButton: React.FC<BaseButtonProps> = ({ label, onClick }) => {
  return (
    <div className="p-2 bg-primary-red rounded-xl hover:bg-red-700 transition-colors duration-200 cursor-pointer">
      <button
        type="button"
        onClick={onClick}
        className="text-white font-semibold text-sm"
      >
        {label}
      </button>
    </div>
  );
};

export default LogoutButton;
