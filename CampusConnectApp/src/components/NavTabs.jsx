import React from "react";
import { NavLink } from "react-router-dom";

export default function NavTabs() {
  const baseStyle =
    "relative px-5 py-2 text-sm font-semibold rounded-lg transition-all duration-300 tracking-wide";

  return (
    <nav className="flex justify-center space-x-4 bg-white/60 backdrop-blur-md rounded-xl shadow-md p-2 border border-indigo-100">
      <NavLink
        to="/home"
        className={({ isActive }) =>
          `${baseStyle} ${
            isActive
              ? "text-white bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg scale-105"
              : "text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
          }`
        }
      >
        Home
        <span
          className={({ isActive }) =>
            `absolute left-0 bottom-0 h-[2px] w-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full transition-all duration-300 ${
              isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`
          }
        ></span>
      </NavLink>

      <NavLink
        to="/registered"
        className={({ isActive }) =>
          `${baseStyle} ${
            isActive
              ? "text-white bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg scale-105"
              : "text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
          }`
        }
      >
        Registered
        <span
          className={({ isActive }) =>
            `absolute left-0 bottom-0 h-[2px] w-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full transition-all duration-300 ${
              isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`
          }
        ></span>
      </NavLink>
    </nav>
  );
}
