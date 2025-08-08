import { Bell, TabletSmartphone, Gift } from 'lucide-react';

export type IconType = {
  key: string;
  icon: React.ElementType;
  hasDropdown?: boolean;
};

export const iconButtons: IconType[] = [
  {
    key: 'ring',
    icon: Bell,
    hasDropdown: true,
  },
  {
    key: 'pad',
    icon: TabletSmartphone,
    hasDropdown: false,
  },
  {
    key: 'gift',
    icon: Gift,
    hasDropdown: true,
  },
];
