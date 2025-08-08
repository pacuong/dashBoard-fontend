import React from "react";
import type { Contact } from "../../types/QuickTransferProps";

interface ContactCardProps {
  contact: Contact;
  selected: boolean;
  onClick: () => void;
}

const ContactCard: React.FC<ContactCardProps> = ({
  contact,
  selected,
  onClick,
}) => (
  <button
    onClick={onClick}
    className={`
      flex flex-col items-center rounded-xl
      transition-transform duration-300 ease-in-out
      ${selected ? 'scale-105' : 'hover:scale-105'}
    `}
  >
    <div className="mb-2">
      <img
        src={contact.avatar}
        alt={contact.name}
        className="w-60 h-52 rounded-xl object-cover"
      />
    </div>
    <h4 className="font-medium text-black-100 text-sm mb-1">{contact.name}</h4>
    <p className="text-xs text-gray-50">{contact.username}</p>
  </button>
);

export default ContactCard;
