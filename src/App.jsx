import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import UserLayout from "./layouts/UserLayout";
import Profile from "./pages/user/Profile";
import GymWorkout from "./pages/user/GymWorkout";
import HomeWorkout from "./pages/user/HomeWorkout";
import VegDiet from "./pages/user/VegDiet";
import NonVegDiet from "./pages/user/NonVegDiet";
import Supplement from "./pages/user/Supplement";
import Contact from "./pages/user/Contact";
import DashboardHome from "./pages/user/DashboardHome";
import AboutUs from "./pages/AboutUs";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/about"
        element={
          <ProtectedRoute>
            <AboutUs />
          </ProtectedRoute>
        }
      />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <UserLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<DashboardHome />} />
        <Route path="profile" element={<Profile />} />
        <Route path="exercise/gym" element={<GymWorkout />} />
        <Route path="exercise/home" element={<HomeWorkout />} />
        <Route path="diet/veg" element={<VegDiet />} />
        <Route path="diet/nonveg" element={<NonVegDiet />} />
        <Route path="supplement" element={<Supplement />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default App;
