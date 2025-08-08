import { Bitcoin, Zap, Wallet, CircleDollarSign } from "lucide-react";
import CryptoCard from "../CryptoCard";
import type { ChartDataPoint } from "../../types/TypeCryptoCard";

const bitcoinData: ChartDataPoint[] = [
  { name: "January", value: 64000, month: "Jan" },
  { name: "February", value: 62000, month: "Feb" },
  { name: "March", value: 65000, month: "Mar" },
  { name: "April", value: 63000, month: "Apr" },
  { name: "May", value: 64500, month: "May" },
  { name: "June", value: 65123, month: "Jun" },
];

const dashData: ChartDataPoint[] = [
  { name: "January", value: 60000, month: "Jan" },
  { name: "February", value: 67000, month: "Feb" },
  { name: "March", value: 58000, month: "Mar" },
  { name: "April", value: 74000, month: "Apr" },
  { name: "May", value: 66000, month: "May" },
  { name: "June", value: 65123, month: "Jun" },
];

const zcashData: ChartDataPoint[] = [
  { name: "January", value: 72000, month: "Jan" },
  { name: "February", value: 61000, month: "Feb" },
  { name: "March", value: 73000, month: "Mar" },
  { name: "April", value: 54000, month: "Apr" },
  { name: "May", value: 66000, month: "May" },
  { name: "June", value: 65123, month: "Jun" },
];

const ethereumData: ChartDataPoint[] = [
  { name: "January", value: 59000, month: "Jan" },
  { name: "February", value: 51000, month: "Feb" },
  { name: "March", value: 61000, month: "Mar" },
  { name: "April", value: 59000, month: "Apr" },
  { name: "May", value: 60000, month: "May" },
  { name: "June", value: 65123, month: "Jun" },
];

const cards = [
  {
    title: "Bitcoin",
    value: 65123,
    percentage: 4,
    color: "#FFAB2D",
    icon: <Bitcoin size={32} className="text-white-100 rounded-full p-1" />,
    data: bitcoinData,
    bgColorClass: "bg-primary-red",
  },
  {
    title: "Dash",
    value: 65123,
    percentage: -4,
    color: "#3B82F6",
    icon: <Wallet size={32} className="text-white-100 rounded-full p-1" />,
    data: dashData,
    bgColorClass: "bg-blue-80",
  },
  {
    title: "Zcash",
    value: 65123,
    percentage: -4,
    color: "#818CF8",
    icon: <Zap size={32} className="text-white-100 rounded-full p-1" />,
    data: zcashData,
    bgColorClass: "bg-blue-55",
  },
  {
    title: "Ethereum",
    value: 65123,
    percentage: 4,
    color: "#A855F7",
    icon: (
      <CircleDollarSign size={32} className="text-white-100 rounded-full p-1" />
    ),
    data: ethereumData,
    bgColorClass: "bg-secondary-60",
  },
];

const CryptoCardList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 transition-all duration-300">
      {cards.map((card, index) => (
        <CryptoCard key={index} {...card} />
      ))}
    </div>
  );
};

export default CryptoCardList;
