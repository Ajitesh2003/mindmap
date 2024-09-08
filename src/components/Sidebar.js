// Sidebar.jsx
import React, { useState } from "react";
import {
  HomeIcon,
  Cog6ToothIcon,
  Bars4Icon,
} from "@heroicons/react/24/outline"; // Icons from Heroicons v2

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`fixed left-0 top-0 h-full bg-white shadow-md transition-all duration-300 ${
        isExpanded ? "w-64" : "w-16"
      }`}
    >
      {/* Sidebar Button */}
      <button
        onClick={toggleSidebar}
        className="p-2 m-2 text-gray-600 focus:outline-none hover:bg-gray-200 rounded"
      >
        <Bars4Icon className="w-6 h-6" />
      </button>

      {/* Sidebar Menu */}
      <div
        className={`flex flex-col mt-4 ${isExpanded ? "pl-4" : "items-center"}`}
      >
        {/* Menu Items */}
        <div className="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded">
          <HomeIcon className="w-6 h-6 text-gray-600" />
          {isExpanded && <span className="ml-2 text-gray-700">Home</span>}
        </div>
        <div className="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded">
          <Cog6ToothIcon className="w-6 h-6 text-gray-600" />
          {isExpanded && <span className="ml-2 text-gray-700">Settings</span>}
        </div>
        {/* Add more menu items as needed */}
      </div>
    </div>
  );
};

export default Sidebar;
