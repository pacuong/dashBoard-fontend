import React, { useState } from "react";
import type { CandlestickBarProps } from "../../types/TypesChart";

export const CandlestickBar: React.FC<CandlestickBarProps> = ({
  payload,
  x,
  y,
  width,
  height,
  onMouseEnter,
  onMouseLeave,
}) => {
  const [hoveredType, setHoveredType] = useState<"buy" | "sell" | null>(null);
  
  const xNum = Number(x);
  const yNum = Number(y);
  const widthNum = Number(width);
  const heightNum = Number(height);

  const { open, high, low, close } = payload;

  const yMin = 9000;
  const yMax = 9800;
  const range = yMax - yMin;

  const scaleY = (value: number) =>
    yNum + heightNum - ((value - yMin) / range) * heightNum;

  const highY = scaleY(high);
  const lowY = scaleY(low);
  const openY = scaleY(open);
  const closeY = scaleY(close);

  const barWidth = widthNum * 0.32;
  const leftBarX = xNum + widthNum * 0.12;
  const rightBarX = xNum + widthNum * 0.56;

  const greenTop = Math.min(openY, highY);
  const greenHeight = Math.max(Math.abs(openY - highY), heightNum * 0.25);

  const redTop = Math.min(closeY, lowY);
  const redHeight = Math.max(Math.abs(closeY - lowY), heightNum * 0.25);

  const handleMouseMove = (e: React.MouseEvent<SVGRectElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const relativeX = mouseX - xNum;
    
    // Xác định hover vào cột nào dựa trên vị trí chuột
    let newHoveredType: "buy" | "sell";
    if (relativeX < widthNum * 0.5) {
      newHoveredType = "buy";
    } else {
      newHoveredType = "sell";
    }
    
    // Chỉ trigger onMouseEnter khi thay đổi type
    if (newHoveredType !== hoveredType) {
      setHoveredType(newHoveredType);
      onMouseEnter?.(e, payload, newHoveredType);
    }
  };

  const handleMouseLeaveWrapper = () => {
    setHoveredType(null);
    onMouseLeave?.();
  };

  return (
    <g>
      {/* Visual bars */}
      <rect
        x={leftBarX}
        y={greenTop}
        width={barWidth}
        height={greenHeight}
        fill="#10b981"
        rx={1}
        pointerEvents="none" // ✅ Disable pointer events trên visual bars
      />
      <rect
        x={rightBarX}
        y={redTop}
        width={barWidth}
        height={redHeight}
        fill="#f40404"
        rx={1}
        pointerEvents="none" // ✅ Disable pointer events trên visual bars
      />
      
      {/* Invisible overlay for mouse events */}
      <rect
        x={xNum}
        y={yNum}
        width={widthNum}
        height={heightNum}
        fill="transparent"
        style={{ cursor: "pointer" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeaveWrapper}
      />
    </g>
  );
};