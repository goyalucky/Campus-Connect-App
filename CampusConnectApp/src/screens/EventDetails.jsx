import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { formatDate } from "../utils/formatDate";
import { useRegisteredEvents } from "../hooks/useRegisteredEvents";
import { Calendar, MapPin, User, ArrowLeft } from "lucide-react";

export default function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const { isRegistered, register, unregister } = useRegisteredEvents();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch("/events.json")
      .then((r) => r.json())
      .then((events) => {
        const found = events.find((e) => String(e.id) === String(id));
        setEvent(found || null);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  function handleRegisterToggle() {
    if (!event) return;
    if (isRegistered(event.id)) {
      unregister(event.id);
      alert("You have unregistered from the event.");
    } else {
      register(event.id);
      alert("You have successfully registered for this event!");
    }
  }

  if (loading)
    return (
      <div className="text-center text-indigo-600 text-lg animate-pulse">
        Loading event details...
      </div>
    );

  if (!event)
    return (
      <div className="text-center mt-12">
        <div className="text-red-500 text-lg font-semibold">
          Event not found.
        </div>
        <button
          onClick={() => navigate(-1)}
          className="mt-6 px-5 py-2 rounded-md bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md hover:scale-105 transition-transform duration-200"
        >
          <ArrowLeft className="inline w-4 h-4 mr-2" /> Back
        </button>
      </div>
    );

  return (
    <div className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 shadow-lg rounded-xl p-8 transition-all duration-500 hover:shadow-2xl">
     
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        
        <div className="mb-4 sm:mb-0">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {event.name}
          </h2>
          <div className="flex items-center text-sm text-gray-600 mt-1 space-x-2">
            <Calendar className="w-4 h-4 text-indigo-500" />
            <span>{event.category}</span>
            <span>•</span>
            <span>{formatDate(event.date)}</span>
          </div>
        </div>

        
        <div className="flex items-center gap-4">
          <button
            onClick={handleRegisterToggle}
            className={`px-5 py-2 text-sm font-semibold rounded-full shadow-md transition-transform duration-300 transform hover:scale-105 ${
              isRegistered(event.id)
                ? "bg-gradient-to-r from-red-400 to-red-600 text-white hover:shadow-lg"
                : "bg-gradient-to-r from-green-400 to-green-600 text-white hover:shadow-lg"
            }`}
          >
            {isRegistered(event.id) ? "Unregister" : "Register"}
          </button>

          <Link
            to="/home"
            className="flex items-center px-4 py-2 text-sm font-medium text-indigo-700 bg-indigo-100 rounded-full hover:bg-indigo-200 hover:text-indigo-900 transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Events
          </Link>
        </div>
      </div>

      <hr className="border-gray-200 my-4" />

    
      <div className="space-y-4 text-gray-800 leading-relaxed">
        <p>
          <strong className="text-indigo-700">Description:</strong>{" "}
          {event.description}
        </p>
        <p className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-purple-600" />
          <span>
            <strong className="text-indigo-700">Location:</strong>{" "}
            {event.location}
          </span>
        </p>
        <p className="flex items-center gap-2">
          <User className="w-4 h-4 text-indigo-600" />
          <span>
            <strong className="text-indigo-700">Organizer:</strong>{" "}
            {event.organizer}
          </span>
        </p>
      </div>
    </div>
  );
}
