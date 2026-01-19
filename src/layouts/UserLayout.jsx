import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useState } from "react";

const UserLayout = () => {
  const [exerciseOpen, setExerciseOpen] = useState(false);
  const [dietOpen, setDietOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "block px-3 py-2 rounded bg-orange-500 text-white"
      : "block px-3 py-2 rounded hover:bg-gray-700";

  return (
    <>
      <Navbar />

      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-900 text-white p-5">
          <h2 className="text-xl font-bold mb-6">User Dashboard</h2>

          <nav className="space-y-2">
            <NavLink to="/dashboard/profile" className={linkClass}>
              My Profile
            </NavLink>

            <NavLink to="/about" className={linkClass}>
              About Us
            </NavLink>

            {/* Exercise Dropdown */}
            <button
              onClick={() => setExerciseOpen(!exerciseOpen)}
              className="w-full text-left px-3 py-2 rounded hover:bg-gray-700"
            >
              Exercise ▼
            </button>

            {exerciseOpen && (
              <div className="ml-4 space-y-1">
                <NavLink to="/dashboard/exercise/gym" className={linkClass}>
                  Gym Workout
                </NavLink>

                <NavLink to="/dashboard/exercise/home" className={linkClass}>
                  Home + Yoga
                </NavLink>
              </div>
            )}

            {/* Diet Dropdown */}
            <button
              onClick={() => setDietOpen(!dietOpen)}
              className="w-full text-left px-3 py-2 rounded hover:bg-gray-700"
            >
              Diet ▼
            </button>

            {dietOpen && (
              <div className="ml-4 space-y-1">
                <NavLink to="/dashboard/diet/veg" className={linkClass}>
                  Veg Diet
                </NavLink>

                <NavLink to="/dashboard/diet/nonveg" className={linkClass}>
                  Non-Veg Diet
                </NavLink>
              </div>
            )}

            <NavLink to="/dashboard/supplement" className={linkClass}>
              Supplement
            </NavLink>

            <NavLink to="/dashboard/contact" className={linkClass}>
              Contact
            </NavLink>
          </nav>
        </aside>

        {/* Content */}
        <main className="flex-1 p-6 bg-gray-100">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default UserLayout;
