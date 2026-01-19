import { NavLink, useNavigate } from "react-router-dom"

const Navbar = () => {
  const navigate = useNavigate()
  const isLoggedIn = localStorage.getItem("isLoggedIn")

  const logout = () => {
    localStorage.clear()
    navigate("/login")
  }

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-orange-500 font-semibold"
      : "hover:text-orange-400"

  return (
    <nav className="bg-black text-white px-10 py-4 flex justify-between items-center">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-orange-500">
        FitFusion
      </h1>

      {/* Menu */}
      <ul className="flex gap-6 items-center">

        <NavLink to="/home" className={linkClass}>
          Home
        </NavLink>

        <NavLink to="/about" className={linkClass}>
          About Us
        </NavLink>

        {isLoggedIn ? (
          <>
            <NavLink to="/dashboard" className={linkClass}>
              User Dashboard
            </NavLink>

            <button
              onClick={logout}
              className="bg-red-500 px-4 py-2 rounded text-sm"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login" className={linkClass}>
              Login
            </NavLink>

            <NavLink
              to="/register"
              className="border px-3 py-1 rounded border-orange-500 text-orange-500"
            >
              Register
            </NavLink>
          </>
        )}
      </ul>
    </nav>
  )
}

export default Navbar

