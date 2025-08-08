import type { Contact } from "../types/QuickTransferProps";
import type { MarketDataPoint } from "../types/TypesChart";

export const sampleData1: MarketDataPoint[] = [
  {
    time: "2:00PM",
    open: 9500,
    high: 9550,
    low: 9450,
    close: 9510,
    volume: 120,
  },
  {
    time: "2:30PM",
    open: 9510,
    high: 9535,
    low: 9495,
    close: 9500,
    volume: 115,
  },
  {
    time: "3:00PM",
    open: 9500,
    high: 9540,
    low: 9430,
    close: 9470,
    volume: 130,
  },
  {
    time: "3:30PM",
    open: 9470,
    high: 9490,
    low: 9450,
    close: 9485,
    volume: 150,
  },
  {
    time: "4:00PM",
    open: 9485,
    high: 9530,
    low: 9440,
    close: 9490,
    volume: 140,
  },
  {
    time: "4:30PM",
    open: 9490,
    high: 9530,
    low: 9480,
    close: 9520,
    volume: 160,
  },
  {
    time: "5:00PM",
    open: 9520,
    high: 9570,
    low: 9480,
    close: 9515,
    volume: 155,
  },
  {
    time: "5:30PM",
    open: 9515,
    high: 9530,
    low: 9505,
    close: 9508,
    volume: 135,
  },
  {
    time: "6:00PM",
    open: 9508,
    high: 9545,
    low: 9460,
    close: 9490,
    volume: 125,
  },
  {
    time: "6:30PM",
    open: 9490,
    high: 9500,
    low: 9470,
    close: 9480,
    volume: 110,
  },
  {
    time: "7:00PM",
    open: 9480,
    high: 9520,
    low: 9430,
    close: 9465,
    volume: 100,
  },
  {
    time: "7:30PM",
    open: 9465,
    high: 9475,
    low: 9450,
    close: 9460,
    volume: 95,
  },
  {
    time: "8:00PM",
    open: 9460,
    high: 9500,
    low: 9420,
    close: 9455,
    volume: 90,
  },
  {
    time: "8:30PM",
    open: 9455,
    high: 9465,
    low: 9435,
    close: 9450,
    volume: 85,
  },
];

export const chartData = [
  { month: "Jan", value1: 30, value2: 20 },
  { month: "Feb", value1: 45, value2: 35 },
  { month: "Mar", value1: 28, value2: 25 },
  { month: "Apr", value1: 35, value2: 30 },
  { month: "May", value1: 40, value2: 35 },
  { month: "Jun", value1: 25, value2: 20 },
  { month: "Jul", value1: 15, value2: 12 },
  { month: "Aug", value1: 35, value2: 28 },
  { month: "Sep", value1: 55, value2: 45 },
  { month: "Oct", value1: 65, value2: 55 },
  { month: "Nov", value1: 45, value2: 40 },
];

export const defaultContacts: Contact[] = [
  {
    id: "1",
    name: "Olivia",
    username: "oliv62@",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: "2",
    name: "Martha",
    username: "marthaa@",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: "3",
    name: "David",
    username: "davidxc@",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: "4",
    name: "Cindy",
    username: "cindyss@",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: "5",
    name: "Samuel",
    username: "sam224@",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: "6",
    name: "Emma",
    username: "emma89@",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: "7",
    name: "Michael",
    username: "mike_m@",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: "8",
    name: "Sarah",
    username: "sarah_k@",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
  },
];
