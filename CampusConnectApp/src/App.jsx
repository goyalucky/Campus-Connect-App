import { Navigate, Route, Routes } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import EventDetails from "./screens/EventDetails";
import Home from "./screens/Home";
import Registered from "./screens/Registered";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <header className="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 backdrop-blur-md shadow-lg border-b border-indigo-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-extrabold text-indigo-700 tracking-tight drop-shadow-sm">
            Campus Connect App 🎓
          </h1>
          <NavTabs />
        </div>
      </header>

      <main className="flex-1 max-w-6xl mx-auto px-6 py-10 w-full">
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/registered" element={<Registered />} />
          <Route path="/event/:id" element={<EventDetails />} />
        </Routes>
      </main>
      <footer className="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 border-t border-indigo-200 py-3 text-center text-sm text-indigo-700 font-medium">
        © {new Date().getFullYear()} Campus Connect | Built with 💙 by Lucky Goyal
      </footer>
    </div>
  );
}
