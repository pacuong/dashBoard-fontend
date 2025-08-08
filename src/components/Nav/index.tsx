import React, { useState, useEffect } from "react";
import { ChevronRight, ChevronDown, FileSpreadsheet } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  isSidebarOpen: boolean;
  children?: {
    label: string;
    path: string;
    icon?: React.ElementType;
  }[];
}

const NavItem: React.FC<NavItemProps> = ({
  icon: Icon,
  label,
  isSidebarOpen,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (
      children &&
      children.some((child) => location.pathname === child.path)
    ) {
      setIsOpen(true);
    }
  }, [location.pathname, children]);

  const toggleDropdown = () => {
    if (children) setIsOpen(!isOpen);
  };

  return (
    <div className="mb-1 px-4">
      {/* Main nav item */}
      <div
        className="flex items-center p-3 rounded-lg hover:bg-[#f4f2ff] group 
                   cursor-pointer transition-colors duration-200"
        onClick={toggleDropdown}
      >
        <Icon size={24} className="text-gray-50 group-hover:text-[#5141AE]" />
        {isSidebarOpen && (
          <>
            <span className="ml-3 text-gray-50 group-hover:text-[#5141AE] font-medium text-base">
              {label}
            </span>
            {children && (
              <div className="ml-auto">
                {isOpen ? (
                  <ChevronDown className="w-4 h-4 text-gray-50 group-hover:text-[#5141AE]" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-gray-50 group-hover:text-[#5141AE]" />
                )}
              </div>
            )}
          </>
        )}
      </div>

      {/* Children dropdown */}
      {isOpen && children && isSidebarOpen && (
        <div className="ml-10 mt-1 space-y-1">
          {children.map((child, idx) => {
            const ChildIcon = child.icon || FileSpreadsheet;
            return (
              <Link
                key={idx}
                to={child.path}
                className={`flex items-center px-2 py-2 rounded hover:bg-[#EDEBFD] text-gray-50 transition-colors duration-200 ${
                  location.pathname === child.path
                    ? "font-semibold bg-[#EDEBFD]"
                    : ""
                }`}
              >
                <ChildIcon className="w-4 h-4 mr-2 text-[#5141AE] text-2xl" />
                <span className="text-sm">{child.label}</span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default NavItem;
