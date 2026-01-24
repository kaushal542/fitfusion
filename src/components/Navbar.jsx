import { NavLink } from "react-router-dom"

const Navbar = () => {
  const activeClass =
    "text-orange-500 border-b-2 border-orange-500"

  const normalClass =
    "hover:text-orange-500 transition"

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-linear-to-b from-black/80 to-transparent">
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center">

        {/* LOGO */}
        <div className="w-1/4 text-2xl font-oswald font-bold tracking-widest text-white">
          <span className="text-orange-500">GYM</span>LIFE
        </div>

        {/* CENTER LINKS */}
        <ul className="w-1/2 flex justify-center gap-10 font-oswald uppercase text-sm tracking-wider text-white">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? activeClass : normalClass
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? activeClass : normalClass
              }
            >
              About Us
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? activeClass : normalClass
              }
            >
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? activeClass : normalClass
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* RIGHT BUTTON */}
        <div className="w-1/4 flex justify-end">
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `font-oswald uppercase text-sm border px-5 py-2 transition ${
                isActive
                  ? "bg-orange-500 border-orange-500 text-white"
                  : "border-orange-500 text-white hover:bg-orange-500"
              }`
            }
          >
            Join Now
          </NavLink>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
