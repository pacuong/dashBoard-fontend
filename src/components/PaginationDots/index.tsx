import React from 'react';

interface PaginationDotsProps {
  total: number;
  activeIndex: number;
}

const PaginationDots: React.FC<PaginationDotsProps> = ({ total, activeIndex }) => (
  <div className="flex justify-center mt-4">
    <div className="flex gap-1">
      {Array.from({ length: total }, (_, i) => (
        <div
          key={i}
          className={`w-2 h-2 rounded-full transition-colors duration-300 ${
            activeIndex === i ? 'bg-primary-purple' : 'bg-gray-100'
          }`}
        />
      ))}
    </div>
  </div>
);

export default PaginationDots;
