import React from "react";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type {
  CryptoCardProps,
  CustomTooltipProps,
} from "../../types/TypeCryptoCard";

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-800 text-white px-3 py-2 rounded-lg shadow-lg border border-gray-100">
        <p className="text-sm font-medium">{label}</p>
        <p className="text-sm">
          <span className="text-yellow-400">Sales Stats: </span>
          <span className="font-semibold">{payload[0].value}</span>
        </p>
      </div>
    );
  }
  return null;
};

const CryptoCard: React.FC<CryptoCardProps> = ({
  value,
  percentage,
  color,
  icon,
  data,
  bgColorClass,
}) => {
  return (
    <div className="bg-white-100 rounded-xl shadow-sm overflow-hidden w-full ">
      <div className="p-4 pb-2 flex items-start justify-between">
        <div className="flex-1">
          <p className="text-xs text-gray-100 mb-2 flex items-center">
            <i
              className={`fa ${
                percentage >= 0
                  ? "fa-caret-up text-green-100"
                  : "fa-caret-down text-primary-red"
              } mr-1`}
            />
            {percentage}% (30 days)
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 mb-0">
            ${value.toLocaleString()}
          </h2>
        </div>
        <div className={`ml-4 ${bgColorClass} rounded-full p-1 text-white`}>
          {icon}
        </div>
      </div>
      <div className="p-0 -mt-2">
        <div className="h-20 w-full"  tabIndex={-1} onMouseDown={(e) => e.preventDefault()}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient
                  id={`color${color}`}
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor={color} stopOpacity={1} />
                  <stop offset="50%" stopColor={color} stopOpacity={0.8} />
                  <stop offset="100%" stopColor={color} stopOpacity={0.6} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" hide height={0} />
              <YAxis hide domain={["dataMin - 5000", "dataMax + 2000"]} />
              <Tooltip
                content={<CustomTooltip />}
                cursor={{
                  stroke: color,
                  strokeWidth: 1,
                  strokeDasharray: "4 4",
                }}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke={color}
                strokeWidth={2}
                fill={`url(#color${color})`}
                dot={false}
                activeDot={{
                  r: 4,
                  fill: color,
                  stroke: "#fff",
                  strokeWidth: 2,
                }}
                connectNulls
                fillOpacity={1}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default CryptoCard;
