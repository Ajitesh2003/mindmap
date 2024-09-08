// TopBar.jsx
import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline"; // Use Heroicons v2 for dropdown indicator
import userAvatar from "../WIN_20240626_21_36_12_Pro.jpg";
// Replace with the path to your user avatar

const TopBar = () => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md">
      <h1 className="text-xl ml-14 font-bold">Mind Map Dashboard</h1>
      <div className="relative">
        {/* User Profile Section */}
        <div
          className="flex items-center cursor-pointer"
          onClick={toggleProfileMenu}
        >
          <img
            src={userAvatar}
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
          <ChevronDownIcon className="w-5 h-5 ml-2 text-gray-600" />
        </div>

        {/* Profile Dropdown Menu */}
        {isProfileMenuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-10">
            <ul>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Profile
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Settings
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopBar;
