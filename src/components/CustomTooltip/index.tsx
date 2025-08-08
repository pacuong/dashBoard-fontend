import React from "react";
import type { CustomTooltipProps } from "../../types/TypesChart";

export const CustomTooltip: React.FC<CustomTooltipProps> = ({
  active,
  payload,
  label,
  position,
  type,
}) => {
  if (!active || !payload || !payload[0] || !type) return null;

  const data = payload[0].payload;
  const isBuy = type === "buy";
  const action = isBuy ? "Buy:" : "Sell:";
  const color = isBuy ? "text-green-100" : "text-primary-red";
  const bgColor = isBuy ? "bg-green-50 opacity-80 border-green-100" : "bg-white-100 opacity-80 border-primary-red";

  const minPrice = Math.min(data.open, data.close);
  const maxPrice = Math.max(data.open, data.close);

  const tooltipWidth = 280;
  const tooltipHeight = 60;
  const containerPadding = 20;

  let adjustedX = (position?.x ?? 0) - tooltipWidth / 2;
  let adjustedY = (position?.y ?? 0) - tooltipHeight - 10;

  if (adjustedX < containerPadding) {
    adjustedX = containerPadding;
  }
  if (adjustedX + tooltipWidth > window.innerWidth - containerPadding) {
    adjustedX = window.innerWidth - tooltipWidth - containerPadding;
  }
  if (adjustedY < containerPadding) {
    adjustedY = (position?.y ?? 0) + 10;
  }

  return (
    <div
      className={`${bgColor} rounded-lg shadow-lg p-3 text-sm pointer-events-none`}
      style={{
        position: "fixed",
        left: adjustedX,
        top: adjustedY,
        zIndex: 1000,
        whiteSpace: "nowrap",
        width: tooltipWidth,
      }}
    >
      <div className={`font-medium ${color} mb-1`}>{action}</div>
      <div className="text-gray-600">
        $ {label}: <span className="font-medium">thousands</span> {minPrice} - {maxPrice}
      </div>
    </div>
  );
};
