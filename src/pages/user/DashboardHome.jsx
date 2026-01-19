const DashboardHome = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">
        Welcome to FitFusion 💪
      </h1>
      <p className="text-gray-600 mb-6">
        Track your workouts, diet plans, and fitness progress.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-white p-5 rounded shadow">
          <h3 className="text-lg font-semibold">Gym Workouts</h3>
          <p className="text-sm text-gray-500 mt-2">
            Strength & muscle training plans
          </p>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <h3 className="text-lg font-semibold">Home & Yoga</h3>
          <p className="text-sm text-gray-500 mt-2">
            Flexible workouts at home
          </p>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <h3 className="text-lg font-semibold">Diet Plans</h3>
          <p className="text-sm text-gray-500 mt-2">
            Personalized nutrition guidance
          </p>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <h3 className="text-lg font-semibold">Progress</h3>
          <p className="text-sm text-gray-500 mt-2">
            Track your fitness journey
          </p>
        </div>

      </div>
    </div>
  )
}

export default DashboardHome
