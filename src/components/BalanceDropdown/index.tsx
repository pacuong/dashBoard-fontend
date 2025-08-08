import React from 'react';
import { ChevronDown } from 'lucide-react';

interface BalanceDropdownProps {
  ethBalance: string;
  isOpen: boolean;
  onToggle: () => void;
}

const BalanceDropdown: React.FC<BalanceDropdownProps> = ({ ethBalance, isOpen, onToggle }) => (
  <div className="relative border border-secondary-60 rounded-3xl p-2">
    <button
      onClick={onToggle}
      className="flex items-center gap-4 rounded-full px-4 py-2 text-black-100 font-medium"
    >   
      <div className="w-8 h-8 bg-secondary-60 rounded-full flex items-center justify-center text-white-100 text-xl  font-bold">
        ◆
      </div>
      {ethBalance}
      <ChevronDown className="w-4 h-4" />
    </button>

    {isOpen && (
      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border z-10">
        <div className="p-3 border-b">
          <div className="font-medium text-gray-900">345,455 ETH</div>
          <div className="text-sm text-gray-500">Available</div>
        </div>
        <div className="">
          <div className="font-medium text-gray-900">789,123 ETH</div>
          <div className="text-sm text-gray-500">Staked</div>
        </div>
      </div>
    )}
  </div>
);

export default BalanceDropdown;
