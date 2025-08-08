import React from 'react';

interface SendButtonProps {
  disabled: boolean;
  onClick: () => void;
}

const SendButton: React.FC<SendButtonProps> = ({ disabled, onClick }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className="w-full bg-primary-purple text-white py-4 rounded-xl font-semibold text-lg hover:bg-indigo-800 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
  >
    SEND MONEY
  </button>
);

export default SendButton;
