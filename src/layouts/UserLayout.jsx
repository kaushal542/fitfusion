import { NavLink, Outlet, useNavigate } from "react-router-dom";

const UserLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex bg-[#0a0a0a] text-white">

      {/* SIDEBAR */}
      <aside className="w-72 bg-black border-r border-gray-800 flex flex-col justify-between">

        {/* TOP */}
        <div>
          <div className="p-6 border-b border-gray-800 text-center">
            <h2 className="text-3xl font-extrabold tracking-widest">
              <span className="text-white">FIT</span>
              <span className="text-orange-500">FUSION</span>
            </h2>
          </div>

          {/* MENU */}
          <nav className="flex flex-col mt-6 space-y-2 px-4">

            <NavItem to="/dashboard" label="Dashboard" />
            <NavItem to="/dashboard/profile" label="Profile" />

            <p className="text-gray-500 text-xs mt-6 mb-2 px-2">WORKOUT</p>
            <NavItem to="/dashboard/exercise/gym" label="Gym Workout" />
            <NavItem to="/dashboard/exercise/home" label="Home Workout" />
            <NavItem to="/dashboard/smart-plan" label="Smart Plan" />

            <p className="text-gray-500 text-xs mt-6 mb-2 px-2">DIET</p>
            <NavItem to="/dashboard/diet/veg" label="Veg Diet" />
            <NavItem to="/dashboard/diet/nonveg" label="Non-Veg Diet" />
            <NavItem to="/dashboard/supplement" label="Supplements" />

          </nav>
        </div>

        {/* BOTTOM ACTIONS */}
        <div className="p-4 border-t border-gray-800 space-y-3">

          <button
            onClick={() => navigate("/home")}
            className="w-full py-2 bg-gray-800 hover:bg-gray-700 rounded transition"
          >
            ⬅ Back To Home
          </button>

          <button
            onClick={handleLogout}
            className="w-full py-2 bg-orange-500 hover:bg-orange-600 rounded font-semibold transition"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8 overflow-y-auto">
        <Outlet />
      </main>

    </div>
  );
};

export default UserLayout;


/* ---------- Nav Item Component ---------- */

const NavItem = ({ to, label }) => {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        `px-4 py-3 rounded-lg transition ${
          isActive
            ? "bg-orange-500 text-white"
            : "text-gray-300 hover:bg-[#111] hover:text-white"
        }`
      }
    >
      {label}
    </NavLink>
  );
};
