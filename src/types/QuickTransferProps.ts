export interface Contact {
  id: string;
  name: string;
  username: string;
  avatar: string;
}

export interface QuickTransferProps {
  contacts?: Contact[];
  initialAmount?: string;
  ethBalance?: string;
  onSendMoney?: (amount: string, recipient: Contact) => void;
  autoScrollInterval?: number;
}

export const formatAmount = (value: string): string => {
  return value.replace(/[^\d.,]/g, '');
};
