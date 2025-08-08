import type { LucideIcon } from 'lucide-react';

export type IconButton = {
  icon: LucideIcon;
  showDot?: boolean;
  tooltip?: string;
  onClick?: () => void;
};
