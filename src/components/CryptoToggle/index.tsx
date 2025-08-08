import React from "react";

type ToggleOption = {
  id: string;
  label: string;
};

type Props = {
  options: ToggleOption[];
  selected: string[]; // Nhiều toggle được bật cùng lúc
  onChange: (selected: string[]) => void;
};

const CryptoToggle: React.FC<Props> = ({ options, selected, onChange }) => {
  const handleToggle = (id: string) => {
    if (selected.includes(id)) {
      onChange(selected.filter((item) => item !== id)); // tắt
    } else {
      onChange([...selected, id]); // bật
    }
  };

  return (
    <div className="flex gap-6">
      {options.map((option) => (
        <div key={option.id} className="flex items-center gap-3">
          <span className="text-black font-medium">{option.label}</span>
          <button
            onClick={() => handleToggle(option.id)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full border transition-colors focus:outline-none focus:ring-offset-2 focus:ring-green-100
              ${
                selected.includes(option.id)
                  ? "bg-green-100 border-green-100"
                  : "bg-gray-100 border-gray-100"
              }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white-100 transition-transform
                ${
                  selected.includes(option.id)
                    ? "translate-x-6"
                    : "translate-x-1"
                }`}
            />
          </button>
        </div>
      ))}
    </div>
  );
};

export default CryptoToggle;
