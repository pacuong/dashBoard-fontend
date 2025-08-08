// src/components/sidebar/NavItem.tsx
import React from "react";
import { ChevronRight } from "lucide-react";

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  isSidebarOpen: boolean;
}

const NavItem: React.FC<NavItemProps> = ({
  icon: Icon,
  label,
  isSidebarOpen,
}) => {
  return (
    <div className="mb-1 px-4">
      <div
        className="flex items-center p-3 rounded-lg hover:bg-[#f4f2ff] group 
                   cursor-pointer transition-colors duration-200"
      >
        <Icon size={24} className="text-gray-50 group-hover:text-[#5141AE]" />
        {isSidebarOpen && (
          <>
            <span className="ml-3 text-gray-50 group-hover:text-[#5141AE] font-medium text-base">
              {label}
            </span>
            <div className="ml-auto">
              <ChevronRight className="w-4 h-4 text-gray-50 group-hover:text-[#5141AE]" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NavItem;
