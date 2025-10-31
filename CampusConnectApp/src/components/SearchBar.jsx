import React from "react";
import { Search } from "lucide-react"; 

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search by name or category...",
}) {
  return (
    <div className="relative w-full max-w-lg mx-auto mb-8">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 rounded-full blur-lg opacity-40"></div>

      <div className="relative flex items-center bg-white/70 backdrop-blur-md rounded-full shadow-lg border border-indigo-200 hover:shadow-xl transition-all duration-300">
        <Search className="ml-4 text-indigo-500 w-5 h-5" />

        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="flex-1 bg-transparent border-none outline-none px-3 py-2 text-gray-700 
                     placeholder-gray-400 focus:ring-0 text-sm sm:text-base rounded-full"
        />
      </div>
    </div>
  );
}
