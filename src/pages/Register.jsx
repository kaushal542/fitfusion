import { useNavigate, Link } from "react-router-dom"
import { useState } from "react"

const Register = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleRegister = (e) => {
    e.preventDefault()

    // Dummy register logic (backend later)
    localStorage.setItem("registeredUser", JSON.stringify(formData))

    alert("Registration successful! Please login.")
    navigate("/login")
  }

  return (
    <div className="h-screen flex justify-center items-center bg-gray-900">
      <form
        onSubmit={handleRegister}
        className="bg-white p-6 rounded shadow w-80"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">
          Create Account
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="w-full border p-2 mb-3 rounded"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full border p-2 mb-3 rounded"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full border p-2 mb-4 rounded"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button className="w-full bg-orange-500 text-white py-2 rounded">
          Register
        </button>

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-orange-500 font-semibold">
            Login
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Register
