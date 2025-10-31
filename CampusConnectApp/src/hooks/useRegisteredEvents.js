import { useEffect, useState } from "react";

const STORAGE_KEY = "campus_registered_events";

export function useRegisteredEvents() {
  const [registeredEventIds, setRegisteredEventIds] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(registeredEventIds));
  }, [registeredEventIds]);

  function register(id) {
    setRegisteredEventIds((prev) => {
      if (prev.includes(id)) return prev;
      return [...prev, id];
    });
  }

  function unregister(id) {
    setRegisteredEventIds((prev) => prev.filter((x) => x !== id));
  }

  function isRegistered(id) {
    return registeredEventIds.includes(id);
  }

  return { registeredEventIds, register, unregister, isRegistered };
}
