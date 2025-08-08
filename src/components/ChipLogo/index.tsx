// src/components/icons/ChipLogo.tsx
import React from "react";

interface ChipLogoProps {
  size?: number;
  fillColor?: string;
  text?: string;
}

const ChipLogo: React.FC<ChipLogoProps> = ({
  size = 51,
  fillColor = "#343C6A",
  text = "B",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
    >
      {/* Chip body */}
      <rect x="16" y="16" width="32" height="32" rx="4" fill={fillColor} />
      <text
        x="32"
        y="42"
        fontSize="24"
        textAnchor="middle"
        fill="white"
        fontWeight="bold"
        fontFamily="Arial, sans-serif"
      >
        {text}
      </text>

      {/* Pins - Top */}
      <rect x="30" y="4" width="4" height="8" fill={fillColor} />
      <rect x="20" y="4" width="4" height="8" fill={fillColor} />
      <rect x="40" y="4" width="4" height="8" fill={fillColor} />
      {/* Bottom */}
      <rect x="30" y="52" width="4" height="8" fill={fillColor} />
      <rect x="20" y="52" width="4" height="8" fill={fillColor} />
      <rect x="40" y="52" width="4" height="8" fill={fillColor} />
      {/* Left */}
      <rect x="4" y="30" width="8" height="4" fill={fillColor} />
      <rect x="4" y="20" width="8" height="4" fill={fillColor} />
      <rect x="4" y="40" width="8" height="4" fill={fillColor} />
      {/* Right */}
      <rect x="52" y="30" width="8" height="4" fill={fillColor} />
      <rect x="52" y="20" width="8" height="4" fill={fillColor} />
      <rect x="52" y="40" width="8" height="4" fill={fillColor} />
    </svg>
  );
};

export default ChipLogo;
