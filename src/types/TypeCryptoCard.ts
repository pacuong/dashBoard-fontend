import type { JSX } from "react";

export interface ChartDataPoint {
  name: string;
  value: number;
  month: string;
}

export interface CryptoCardProps {
  title: string;
  value: number;
  percentage: number;
  color: string;
  icon: JSX.Element;
  data: ChartDataPoint[];
  bgColorClass: string;
}

export type CustomTooltipProps = {
  active?: boolean;
  payload?: { value: number }[];
  label?: string;
};
