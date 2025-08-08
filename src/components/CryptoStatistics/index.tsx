import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
} from "recharts";
import CryptoToggle from "../CryptoToggle";
import CryptoSelector from "../CryptoSelector";
import { chartData } from "../../data/sampleData";

const cryptoOptions = [
  { id: "bitcoin", name: "Bitcoin", symbol: "BTC" },
  { id: "ripple", name: "Ripple", symbol: "XRP" },
  { id: "ethereum", name: "Ethereum", symbol: "ETH" },
  { id: "zcash", name: "Zcash", symbol: "ZEC" },
  { id: "litecoin", name: "LiteCoin", symbol: "LTC" },
];

const toggleOptions = [
  { id: "date", label: "Date" },
  { id: "value", label: "Value" },
];

type HoverInfo = {
  key: "value1" | "value2";
  index: number;
} | null;

const CustomTooltip = ({
  active,
  payload,
  label,
  hoveredKey,
}: {
  active?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any[];
  label?: string;
  hoveredKey?: string | null;
}) => {
  if (!active || !payload || payload.length === 0 || !hoveredKey) return null;

  const entry = payload.find((e) => e.dataKey === hoveredKey);
  if (!entry) return null;

  return (
    <div className="bg-white p-2 rounded-md shadow border border-gray-100">
      <div className="text-sm font-medium text-gray-100 mb-1">{label}</div>
      <div className="flex items-center gap-2 text-sm">
        <span
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: entry.stroke }}
        />
        <span className="text-gray-100">{entry.name}:</span>
        <strong className="text-gray-100">{entry.value}</strong>
      </div>
    </div>
  );
};

// Component dot riêng có thể gán setHoverInfo
const CustomActiveDot = ({
  cx,
  cy,
  stroke,
  index,
  keyName,
  onHover,
}: {
  cx: number;
  cy: number;
  stroke: string;
  index: number;
  keyName: "value1" | "value2";
  onHover: (info: HoverInfo) => void;
}) => {
  const strokeColor = keyName === "value1" ? "#fcd34d" : "#c4b5fd";

  return (
    <circle
      cx={cx}
      cy={cy}
      r={6}
      fill={stroke}
      stroke={strokeColor}
      strokeWidth={3}
      style={{ cursor: "crosshair" }}
      onMouseOver={() => onHover({ key: keyName, index })}
    />
  );
};


const CryptoStatistics: React.FC = () => {
  const [selectedCrypto, setSelectedCrypto] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<string[]>([]);
  const [hoverInfo, setHoverInfo] = useState<HoverInfo>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderCustomTick = ({ x, y, payload }: any) => {
    const isActive =
      hoverInfo && chartData[hoverInfo.index]?.month === payload.value;

    return (
      <foreignObject x={x - 20} y={y + 10} width={60} height={30}>
        <div
          className={`text-center text-sm font-semibold rounded px-2 py-0.5 transition-all duration-150 ${
            isActive
              ? "bg-white-100 border border-gray-50 text-gray-50"
              : " text-gray-100 "
          }`}
        >
          {payload.value}
        </div>
      </foreignObject>
    );
  };

  // Handler cho Tooltip để lấy thông tin hover

  return (
    <div className="bg-white-100 p-8 rounded-2xl">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Crypto Statistics
          </h2>
          <p className="text-gray-50">
            Visualize performance by token and trend
          </p>
        </div>
        <CryptoToggle
          options={toggleOptions}
          selected={sortBy}
          onChange={setSortBy}
        />
      </div>

      <CryptoSelector
        options={cryptoOptions}
        selected={selectedCrypto}
        onChange={setSelectedCrypto}
      />

      <div
        className="h-96 w-full relative"
        style={{ cursor: "crosshair" }}
        tabIndex={-1}
        onMouseDown={(e) => e.preventDefault()}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ cursor: "crosshair" }}
        ></div>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            onMouseLeave={() => setHoverInfo(null)}
          >
            <defs>
              <linearGradient id="colorValue1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="colorValue2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.1} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={renderCustomTick}
            />
            <YAxis hide />

            <Tooltip
              content={({ active, payload, label }) => {
                if (active && payload && payload.length > 0) {
                  // Update hover info khi tooltip active - chỉ update index, giữ nguyên key nếu đã có
                  const currentIndex = chartData.findIndex(
                    (item) => item.month === label
                  );
                  if (currentIndex !== -1) {
                    // Nếu chưa có hoverInfo hoặc index khác, thì mới set
                    if (!hoverInfo || hoverInfo.index !== currentIndex) {
                      // Chỉ update index, giữ nguyên key nếu đã có, nếu chưa có thì chọn value1
                      const currentKey = hoverInfo?.key || "value1";
                      setTimeout(() => {
                        setHoverInfo({
                          key: currentKey,
                          index: currentIndex,
                        });
                      }, 0);
                    }
                  }
                }
                return (
                  <CustomTooltip
                    active={active}
                    payload={payload}
                    hoveredKey={hoverInfo?.key}
                  />
                );
              }}
              isAnimationActive={false}
              wrapperStyle={{ pointerEvents: "none" }}
              cursor={{ stroke: "#d1d5db", strokeWidth: 1 }}
            />

            <Area
              type="monotone"
              dataKey="value1"
              stroke="#f59e0b"
              strokeWidth={hoverInfo?.key === "value1" ? 4 : 2}
              fill="url(#colorValue1)"
              name="series1"
              fillOpacity={hoverInfo?.key === "value1" ? 0.8 : 0.2}
              // Hiển thị activeDot khi hover
              activeDot={
                hoverInfo?.key === "value1"
                  ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    (props: any) => (
                      <CustomActiveDot
                        {...props}
                        keyName="value1"
                        onHover={setHoverInfo}
                      />
                    )
                  : false
              }
              onMouseEnter={() =>
                setHoverInfo((prev) => ({
                  key: "value1",
                  index: prev?.index || 0,
                }))
              }
            />

            <Area
              type="monotone"
              dataKey="value2"
              stroke="#8b5cf6"
              strokeWidth={hoverInfo?.key === "value2" ? 4 : 2}
              fill="url(#colorValue2)"
              name="series2"
              fillOpacity={hoverInfo?.key === "value2" ? 0.8 : 0.2}
              // Hiển thị activeDot khi hover
              activeDot={
                hoverInfo?.key === "value2"
                  ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    (props: any) => (
                      <CustomActiveDot
                        {...props}
                        keyName="value2"
                        onHover={setHoverInfo}
                      />
                    )
                  : false
              }
              onMouseEnter={() =>
                setHoverInfo((prev) => ({
                  key: "value2",
                  index: prev?.index || 0,
                }))
              }
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CryptoStatistics;
