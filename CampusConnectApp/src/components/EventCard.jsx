import React from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../utils/formatDate";

export default function EventCard({ event, isRegistered, onToggleRegister }) {
  return (
    <div className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:-translate-y-2 hover:border-indigo-300">
      <Link
        to={`/event/${event.id}`}
        className="block text-lg font-bold text-gray-800 hover:text-indigo-700 transition-colors duration-200 mb-2"
      >
        {event.name}
      </Link>

      <div className="flex items-center justify-between mb-3">
        <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-semibold uppercase tracking-wide shadow-sm">
          {event.category}
        </span>
        <span className="text-sm text-gray-500 font-medium">
          {formatDate(event.date)}
        </span>
      </div>

      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
        {event.description}
      </p>

      <div className="flex items-center text-sm text-gray-700 font-medium mb-4">
        <span className="inline-block w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
        {event.location}
      </div>

      <div className="flex justify-between items-center mt-auto">
        <Link
          to={`/event/${event.id}`}
          className="text-sm font-semibold px-4 py-2 rounded-full border border-indigo-300 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-200"
        >
          View Details
        </Link>

        <button
          onClick={() => onToggleRegister(event.id)}
          className={`text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 shadow-sm ${
            isRegistered
              ? "bg-gradient-to-r from-red-200 to-red-400 text-white hover:from-red-300 hover:to-red-500"
              : "bg-gradient-to-r from-green-200 to-green-400 text-white hover:from-green-300 hover:to-green-500"
          }`}
        >
          {isRegistered ? "Unregister" : "Register"}
        </button>
      </div>

      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-200/10 to-purple-200/10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
}
