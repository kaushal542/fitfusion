import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Login clicked") // 🔍 DEBUG

    if (!email || !password) {
      setError("All fields are required")
      return
    }

    // ✅ DUMMY AUTH
    if (email === "user@gmail.com" && password === "Kaushal@123") {
      localStorage.setItem("token", "user-token")
      localStorage.setItem("role", "user")
      navigate("/home")
    } else if (email === "admin@gmail.com" && password === "Admin@2026#") {
      localStorage.setItem("token", "admin-token")
      localStorage.setItem("role", "admin")
      navigate("/admin-dashboard")
    } else {
      setError("Invalid email or password")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-white w-full max-w-md p-8 rounded shadow-lg">

        <h2 className="text-3xl font-bold text-center mb-6">
          Login
        </h2>

        {error && (
          <p className="text-red-500 text-center mb-4">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded"
          />

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded"
          >
            Login
          </button>

        </form>

        <p className="text-center mt-4 text-sm">
          New user?{" "}
          <Link to="/register" className="text-orange-500">
            Create an account
          </Link>
        </p>

      </div>
    </div>
  )
}

export default Login
