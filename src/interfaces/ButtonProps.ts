export interface BaseButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}
