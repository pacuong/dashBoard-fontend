import { useEffect, useState } from 'react';
import { defaultContacts } from '../../data/sampleData';
import type { Contact, QuickTransferProps } from '../../types/QuickTransferProps';
import ContactCard from '../ContactCard';
import BalanceDropdown from '../BalanceDropdown';
import SendButton from '../Buttons/SendButton';
import PaginationDots from '../PaginationDots';
import { formatAmount } from '../../types/QuickTransferProps';
import { ChevronRight } from 'lucide-react';

const QuickTransfer: React.FC<QuickTransferProps> = ({
  contacts = defaultContacts,
  initialAmount = '8,621.22',
  ethBalance = '23,511 ETH',
  onSendMoney,
  autoScrollInterval = 3000,
}) => {
  const [amount, setAmount] = useState(initialAmount);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [showAllContacts, setShowAllContacts] = useState(false);
  const [currentStartIndex, setCurrentStartIndex] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const visibleContactsCount = 5;
  const visibleContacts = showAllContacts
    ? contacts
    : contacts.slice(currentStartIndex, currentStartIndex + visibleContactsCount);

  useEffect(() => {
    if (!showAllContacts && contacts.length > visibleContactsCount) {
      const interval = setInterval(() => {
        setCurrentStartIndex((prev) => {
          const maxStart = contacts.length - visibleContactsCount;
          return prev >= maxStart ? 0 : prev + 1;
        });
      }, autoScrollInterval);
      return () => clearInterval(interval);
    }
  }, [showAllContacts, contacts.length, autoScrollInterval]);

  const handleSendMoney = () => {
    if (selectedContact && onSendMoney) {
      onSendMoney(amount, selectedContact);
    } else {
      alert(`Sending ${amount} ETH${selectedContact ? ` to ${selectedContact.name}` : ''}`);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold text-black-100">Quick Transfer</h2>
          <p className="text-sm text-gray-50 mt-1">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <BalanceDropdown
          ethBalance={ethBalance}
          isOpen={isDropdownOpen}
          onToggle={() => setIsDropdownOpen(!isDropdownOpen)}
        />
      </div>

      {/* Recent Contacts */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-black-100">Recent Contacts</h3>
          <button
            onClick={() => setShowAllContacts(!showAllContacts)}
            className="flex items-center text-purple-600 text-sm font-medium hover:text-purple-700 transition-colors"
          >
            {showAllContacts ? 'Show less' : 'View more'}
            <ChevronRight className={`w-4 h-4 ml-1 transition-transform ${showAllContacts ? 'rotate-90' : ''}`} />
          </button>
        </div>

        <div className={`grid gap-4 transition-all duration-300 ${showAllContacts ? 'grid-cols-5' : 'grid-cols-5'}`}>
          {visibleContacts.map((contact) => (
            <ContactCard
              key={contact.id}
              contact={contact}
              selected={selectedContact?.id === contact.id}
              onClick={() => setSelectedContact(selectedContact?.id === contact.id ? null : contact)}
            />
          ))}
        </div>

        {!showAllContacts && contacts.length > visibleContactsCount && (
          <PaginationDots
            total={Math.ceil(contacts.length / visibleContactsCount)}
            activeIndex={Math.floor(currentStartIndex / visibleContactsCount)}
          />
        )}
      </div>

      {/* Amount Input */}
      <div className="mb-6 bg-white-100 p-none">
        <label className="block text-sm text-gray-600 mb-2 text-center">Amount ETH</label>
        <div className="text-center">
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(formatAmount(e.target.value))}
            className="text-4xl font-bold text-gray-100 text-center border-none outline-none w-full p-0"
            placeholder="0.00"
          />
        </div>
      </div>

      {/* Selected Contact */}
      {selectedContact && (
        <div className="mb-4 p-3 bg-purple-50 rounded-lg border border-purple-200">
          <div className="flex items-center gap-3">
            <img src={selectedContact.avatar} alt={selectedContact.name} className="w-8 h-8 rounded-full object-cover" />
            <div>
              <p className="font-medium text-gray-900">Sending to {selectedContact.name}</p>
              <p className="text-sm text-gray-600">{selectedContact.username}</p>
            </div>
          </div>
        </div>
      )}

      {/* Send Button */}
      <SendButton disabled={!amount || amount === '0'} onClick={handleSendMoney} />
    </div>
  );
};

export default QuickTransfer;
