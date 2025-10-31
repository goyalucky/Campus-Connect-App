import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import EventCard from "../components/EventCard";
import { useRegisteredEvents } from "../hooks/useRegisteredEvents";
import { Loader2 } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

export default function Home() {
  const [events, setEvents] = useState([]);
  const [q, setQ] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const { register, unregister, isRegistered } = useRegisteredEvents();

  useEffect(() => {
    setLoading(true);
    fetch("/events.json")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => {
        console.error(err);
        setEvents([]);
      })
      .finally(() => setLoading(false));
  }, []);

  function onToggleRegister(id) {
    if (isRegistered(id)) {
      unregister(id);
      toast.error("Event registration cancelled", {
        duration: 2500,
        style: {
          borderRadius: "10px",
          background: "linear-gradient(to right, #fee2e2, #fecaca)",
          color: "#b91c1c",
          fontWeight: 600,
          border: "1px solid #fca5a5",
          boxShadow: "0 4px 10px rgba(239,68,68,0.2)",
        },
      });
    } else {
      register(id);
      toast.success("Registered successfully!", {
        duration: 2500,
        style: {
          borderRadius: "10px",
          background: "linear-gradient(to right, #d1fae5, #a7f3d0)",
          color: "#065f46",
          fontWeight: 600,
          border: "1px solid #6ee7b7",
          boxShadow: "0 4px 10px rgba(16,185,129,0.2)",
        },
      });
    }
  }


  const filtered = events.filter((ev) => {
    const s = q.trim().toLowerCase();
    const matchesSearch =
      !s ||
      ev.name.toLowerCase().includes(s) ||
      ev.category.toLowerCase().includes(s);
    const matchesCategory =
      !selectedCategory || ev.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  
  const categories = [...new Set(events.map((ev) => ev.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-10 px-4 transition-all duration-300">
     
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            borderRadius: "10px",
            background: "linear-gradient(to right, #eef2ff, #ede9fe)",
            color: "#4338ca",
            fontWeight: "600",
            padding: "10px 14px",
            border: "1px solid #c4b5fd",
            boxShadow: "0 3px 12px rgba(79,70,229,0.15)",
          },
        }}
      />

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Campus Connect — Explore Events 🎓
        </h1>

     
        <div className="mb-4">
          <SearchBar
            value={q}
            onChange={setQ}
            placeholder="Search events by name or category..."
          />
        </div>

      
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() =>
                setSelectedCategory(selectedCategory === cat ? "" : cat)
              }
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md scale-105"
                  : "bg-white border border-indigo-200 text-indigo-700 hover:bg-indigo-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

      
        {loading && (
          <div className="flex justify-center items-center text-indigo-600 animate-pulse">
            <Loader2 className="w-6 h-6 mr-2 animate-spin" />
            Loading events...
          </div>
        )}

       
        {!loading && filtered.length === 0 && (
          <div className="text-center text-gray-600 font-medium bg-white shadow-sm rounded-lg py-6 animate-fade-in">
            🚫 No events found. Try another search or category.
          </div>
        )}

      
        <section className="space-y-5">
          {!loading &&
            filtered.map((ev) => (
              <div
                key={ev.id}
                className="transform hover:scale-[1.02] transition-transform duration-300 hover:shadow-xl"
              >
                <EventCard
                  event={ev}
                  isRegistered={isRegistered(ev.id)}
                  onToggleRegister={onToggleRegister}
                />
              </div>
            ))}
        </section>
      </div>
    </div>
  );
}
