import React from "react";
import Mahesh from "./assets/mahesh.jpg";
import './styles.css'
import DownNav from "./DownNav";

function Nav() {
  return (
    <div>

<div className="hidden md:flex w-full justify-around items-center bg-gray-100 shadow-md p-4 pl-52" id="Nav-bar">
      {/* Search Input */}
      <div className="hidden md:block w-1/2 relative">
        <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
          <span className="material-symbols-outlined">search</span>
        </span>
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-10 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Icons and User Info */}
      <div className="flex items-center space-x-4 gap-8">
        {/* Question Mark Icon */}
        <span className="material-symbols-outlined text-gray-600 cursor-pointer">
          help
        </span>

        {/* Filter Icon */}
        <span className="material-symbols-outlined text-gray-600 cursor-pointer">
          filter_alt
        </span>

        {/* Message Icon with Red Dot */}
        <div className="relative cursor-pointer">
          <span className="material-symbols-outlined text-gray-600">
            message
          </span>
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </div>

        {/* Notification Icon with Red Dot */}
        <div className="relative cursor-pointer">
          <span className="material-symbols-outlined text-gray-600">
            notifications
          </span>
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </div>

        {/* User Info */}
        <div className="flex items-center space-x-2">
          <img src={Mahesh} alt="User" className="w-8 h-8 rounded-full" />
          <span className="text-gray-700 font-medium">Mahesh Mekala</span>
        </div>
      </div>

      
    </div>

    <DownNav/>

    </div>
    
  );
}

export default Nav;
