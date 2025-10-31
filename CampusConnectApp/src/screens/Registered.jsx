import { CalendarHeart, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import EventCard from "../components/EventCard";
import { useRegisteredEvents } from "../hooks/useRegisteredEvents";

export default function Registered() {
  const { registeredEventIds, unregister, isRegistered } = useRegisteredEvents();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("/events.json")
      .then((r) => r.json())
      .then((all) => {
        const filtered = all.filter((e) => registeredEventIds.includes(e.id));
        setEvents(filtered);
      })
      .catch((err) => {
        console.error(err);
        setEvents([]);
      })
      .finally(() => setLoading(false));
  }, [registeredEventIds]);

  function onToggleRegister(id) {
    unregister(id);
    toast.success(" You are unregistered from the event.", {
      duration: 2500,
      position: "top-center",
      style: {
        borderRadius: "12px",
        background: "linear-gradient(to right, #6366f1, #8b5cf6)",
        color: "#fff",
        fontWeight: "500",
        padding: "8px 14px",
        whiteSpace: "nowrap", // 👈 forces one-line layout
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "6px",
        minWidth: "fit-content",
      },
    });
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-10 px-4 transition-all duration-300">
      
      <Toaster
        toastOptions={{
          style: {
            borderRadius: "12px",
            background: "linear-gradient(to right, #6366f1, #8b5cf6)",
            color: "#fff",
            fontWeight: "500",
            padding: "8px 14px",
            whiteSpace: "nowrap", 
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "6px",
            minWidth: "fit-content",
          },
        }}
      />

      <div className="max-w-4xl mx-auto">
       
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent animate-fade-in-down">
          🎟️ Your Registered Events
        </h2>

        
        {loading && (
          <div className="flex justify-center items-center text-indigo-600 font-medium animate-pulse">
            <Loader2 className="w-6 h-6 mr-2 animate-spin" />
            Loading your events...
          </div>
        )}

        {!loading && events.length === 0 && (
          <div className="text-center bg-white/80 backdrop-blur-md shadow-lg rounded-xl py-10 px-6 animate-fade-in-up">
            <CalendarHeart className="w-12 h-12 mx-auto text-indigo-500 mb-4 animate-bounce" />
            <p className="text-lg text-gray-800 font-semibold">
              You haven’t registered for any events yet.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Explore events on the home page and start participating! 🌟
            </p>
          </div>
        )}

        {!loading && events.length > 0 && (
          <section className="space-y-6 animate-fade-in-up">
            {events.map((ev, idx) => (
              <div
                key={ev.id}
                className="transform hover:scale-[1.02] transition-transform duration-300 hover:shadow-xl"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <EventCard
                  event={ev}
                  isRegistered={isRegistered(ev.id)}
                  onToggleRegister={onToggleRegister}
                />
              </div>
            ))}
          </section>
        )}
      </div>
    </div>
  );
}
