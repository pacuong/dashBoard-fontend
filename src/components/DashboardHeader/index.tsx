// src/components/header/DashboardHeader.tsx

import { Menu, ArrowRight } from "lucide-react";
import SearchBar from "../SearchBar";
import UserProfile from "../UserProfile";
import IconButtonGroup from "../IconButtonGroup";
import LogoutButton from "../Buttons/LogoutButton";

interface DashboardHeaderProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const DashboardHeader = ({
  isSidebarOpen,
  toggleSidebar,
}: DashboardHeaderProps) => {
  const handleLogout = () => {
    // Xoá token, xóa localStorage, chuyển hướng...
    console.log("User logged out");
    localStorage.removeItem("access_token");
    window.location.href = "/login";
  };

  return (
    <header className="bg-white border-gray-100 px-6 py-3 w-full shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleSidebar}
            className="p-2 hover:bg-gray-50 rounded-lg transition-colors"
            aria-label="Toggle Sidebar"
          >
            {isSidebarOpen ? (
              <Menu className="w-6 h-6 text-gray-600" />
            ) : (
              <ArrowRight className="w-6 h-6 text-gray-600" />
            )}
          </button>
          <h1 className="text-2xl font-semibold text-blue-55">Dashboard</h1>
        </div>

        <div className="flex items-center space-x-3 gap-5">
          <SearchBar />
          <IconButtonGroup />
          <div className="p-2 bg-primary-red rounded-xl hover:bg-red-700 transition-colors duration-200 cursor-pointer">
            <LogoutButton label={"Logout"} onClick={handleLogout}/>
          </div>

          <UserProfile />
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
