import React from "react";

type Crypto = {
  id: string;
  name: string;
  symbol: string;
};

type Props = {
  options: Crypto[];
  selected: string[]; // Chuyển từ string -> string[]
  onChange: (ids: string[]) => void;
};

const CryptoSelector: React.FC<Props> = ({ options, selected, onChange }) => {
  const handleToggle = (id: string) => {
    if (selected.includes(id)) {
      onChange(selected.filter((item) => item !== id));
    } else {
      onChange([...selected, id]);
    }
  };

  return (
    <div className="flex flex-wrap gap-8 mb-4">
      {options.map((crypto) => {
        const isSelected = selected.includes(crypto.id);
        return (
          <label
            key={crypto.id}
            className="flex items-center gap-3 cursor-pointer group"
          >
            {/* Hidden checkbox */}
            <input
              type="checkbox"
              value={crypto.id}
              checked={isSelected}
              onChange={() => handleToggle(crypto.id)}
              className="hidden"
            />

            {/* Custom tick */}
            <div
              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                isSelected
                  ? "border-primary-purple bg-primary-purpletext-white"
                  : "border-gray-50 bg-transparent"
              }`}
            >
              {isSelected && (
                <svg
                  className="w-4 h-4" // <-- to hơn
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <polyline points="4 10 8 14 16 6" />
                </svg>
              )}
            </div>

            {/* Text */}
            <div className="mt-4">
              <span
                className={`text-lg font-semibold isSelected ? "text-black-100"
                `}
              >
                {crypto.name}
              </span>
              <div
                className={`text-sm text-gray-50 font-semibold
                  
                `}
              >
                {crypto.symbol}
              </div>
            </div>
          </label>
        );
      })}
    </div>
  );
};

export default CryptoSelector;
