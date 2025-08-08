import React from "react";

interface Props {
  selectedPeriod: string;
  onPeriodChange: (period: string) => void;
}

export const TimePeriodControls: React.FC<Props> = ({
  selectedPeriod,
  onPeriodChange,
}) => {
  const periods = [
    { label: "Week", value: "week" },
    { label: "Month", value: "month" },
    { label: "Year", value: "year" },
  ];

  return (
    <div className="flex gap-2">
      {periods.map((period) => (
        <button
          key={period.value}
          onClick={() => onPeriodChange(period.value)}
          className={`
    px-4 py-2 rounded-lg text-base font-medium transition-colors duration-150
    ${
      selectedPeriod === period.value
        ? " bg-primary-purple text-white-100 hover:text-white-100"
        : "bg-none text-gray-40 hover:text-primary-purple"
    }
  `}
        >
          {period.label}
        </button>
      ))}
    </div>
  );
};
