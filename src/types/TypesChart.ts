export interface MarketDataPoint {
  time: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume?: number;
  buyPrice?: number;
  sellPrice?: number;
}

export interface CandlestickBarProps {
  payload: MarketDataPoint;
  x: number;
  y: number;
  width: number;
  height: number;
  onMouseEnter?: (
    e: React.MouseEvent<SVGRectElement, MouseEvent>,
    data: MarketDataPoint,
    type: "buy" | "sell"
  ) => void;
  onMouseLeave?: () => void;
}

export interface CustomTooltipProps {
  active?: boolean;
  payload?: { payload: MarketDataPoint; value?: number }[];
  label?: string;
  position?: { x: number; y: number };
  type?: "buy" | "sell";
}