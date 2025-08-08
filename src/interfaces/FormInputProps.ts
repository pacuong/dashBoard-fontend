export interface FormInputProps {
  label?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  onToggle?: () => void;
  showValue?: boolean;
  iconLeft?: React.ReactNode;
  textColor?: string;
  placeholderColor?: string;
  borderColor?: string;
}
