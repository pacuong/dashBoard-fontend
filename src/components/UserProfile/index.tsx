import { useState } from "react";
import avatar from '../../assets/imgs/avatar.jpg'

const UserProfile = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="relative border-l-2 border-x-primary-pink pl-10">
      <button
        className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg transition-colors"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <img
          src={avatar}
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="text-left">
          <p className="text-sm font-medium text-gray-900">Johndoe</p>
          <p className="text-xs text-gray-500">Super Admin</p>
        </div>
      </button>

      {isDropdownOpen && (
        <div className="absolute right-1 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Profile
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Settings
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Sign out
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
