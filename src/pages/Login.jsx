import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("user");

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("role", role);

    if (role === "admin") {
      navigate("/admin/users");
    } else {
      navigate("/home");
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-900">
      <form className="bg-white p-6 rounded shadow w-80" onSubmit={handleLogin}>
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        <input
          className="w-full p-2 mb-3 border rounded"
          placeholder="Email"
          required
        />

        <input
          className="w-full p-2 mb-3 border rounded"
          placeholder="Password"
          type="password"
          required
        />

        <select
          className="w-full p-2 mb-4 border rounded"
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        <button className="w-full bg-orange-500 text-white py-2 rounded">
          Login
        </button>

        {/* Register link */}
        <p className="text-sm text-center mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-orange-500 font-semibold">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
