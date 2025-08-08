import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { CandlestickBar } from "../CandlestickBar";
import { CustomTooltip } from "../CustomTooltip";
import { TimePeriodControls } from "../TimePeriodControls";
import { sampleData1 } from "../../data/sampleData";
import type { MarketDataPoint } from "../../types/TypesChart";

const MarketOverviewChart: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<string>("week");
  const [tooltipData, setTooltipData] = useState<MarketDataPoint | null>(null);
  const [tooltipType, setTooltipType] = useState<"buy" | "sell" | null>(null);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const handleMouseEnter = (
    e: React.MouseEvent<SVGRectElement, MouseEvent>,
    data: MarketDataPoint,
    type: "buy" | "sell"
  ) => {
    setTooltipData(data);
    setTooltipType(type);
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    setTooltipData(null);
    setTooltipType(null);
  };

  const handlePeriodChange = (period: string) => {
    setSelectedPeriod(period);
  };

  const yMin = 9000;
  const yMax = 9800;

  return (
    <div className="bg-white-100 p-6 rounded-lg shadow-sm w-full">
      {/* Header and Controls */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-black-100">
            Market Overview
          </h2>
          <p className="text-sm text-gray-50">
            Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>
        <div className="text-right">
          <TimePeriodControls
            selectedPeriod={selectedPeriod}
            onPeriodChange={handlePeriodChange}
          />
        </div>
      </div>

      {/* Chart */}
      <div
        className="relative flex"
        style={{ height: 400 }}
        onMouseLeave={handleMouseLeave}
        tabIndex={-1} // ✅ Ngăn focus
        onMouseDown={(e) => e.preventDefault()}
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={sampleData1}
            margin={{ top: 20, right: 5, left: 20, bottom: 5 }}
          >
            <XAxis
              dataKey="time"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "6B7280"}}
            />
            <YAxis
              domain={[yMin, yMax]}
              orientation="right"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#6B7280" }}
            />
            <Bar
              dataKey="high"
              shape={(props: unknown) => (
                <CandlestickBar
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  {...(props as any)}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              )}
            />
          </BarChart>
        </ResponsiveContainer>

        {tooltipData && tooltipType && (
          <CustomTooltip
            active={true}
            payload={[{ payload: tooltipData, value: tooltipData.close }]}
            label={tooltipData.time}
            position={mousePosition}
            type={tooltipType}
          />
        )}
      </div>
    </div>
  );
};

export default MarketOverviewChart;
