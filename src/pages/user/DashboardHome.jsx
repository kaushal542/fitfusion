import { useNavigate } from "react-router-dom";

const DashboardHome = () => {
  const navigate = useNavigate();
  const userName = localStorage.getItem("username") || "Athlete";

  return (
    <div className="space-y-10">

      {/* WELCOME SECTION */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-700 rounded-2xl p-8 shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold">
          Welcome back, {userName} 💪
        </h1>
        <p className="mt-2 text-orange-100 max-w-xl">
          Every workout counts. Stay consistent and your body will transform.
        </p>

        <button
          onClick={() => navigate("/dashboard/smart-plan")}
          className="mt-6 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Get Today’s Smart Plan
        </button>
      </section>


      {/* STATS CARDS */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-[#111] p-6 rounded-xl border border-gray-800 hover:border-orange-500 transition">
          <h3 className="text-gray-400">Workout Streak</h3>
          <p className="text-4xl font-bold mt-2 text-orange-500">7 Days</p>
        </div>

        <div className="bg-[#111] p-6 rounded-xl border border-gray-800 hover:border-orange-500 transition">
          <h3 className="text-gray-400">Calories Burned</h3>
          <p className="text-4xl font-bold mt-2 text-orange-500">2,430</p>
        </div>

        <div className="bg-[#111] p-6 rounded-xl border border-gray-800 hover:border-orange-500 transition">
          <h3 className="text-gray-400">Goal Progress</h3>
          <p className="text-4xl font-bold mt-2 text-orange-500">65%</p>
        </div>

      </section>


      {/* QUICK ACTIONS */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Quick Start</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <ActionCard
            title="Gym Workout"
            desc="Structured machine & weight training program"
            path="/dashboard/exercise/gym"
          />

          <ActionCard
            title="Diet Plan"
            desc="Nutrition based on your fitness goal"
            path="/dashboard/diet/veg"
          />

          <ActionCard
            title="Smart Plan"
            desc="Personalized workout based on your condition"
            path="/dashboard/smart-plan"
          />

        </div>
      </section>


      {/* MOTIVATION BANNER */}
      <section className="bg-[#111] border border-gray-800 rounded-2xl p-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">
          “Your body can stand almost anything.
        </h2>
        <p className="text-orange-500 text-xl mt-2">
          It’s your mind you have to convince.”
        </p>
      </section>

    </div>
  );
};

export default DashboardHome;


/* -------- Action Card -------- */

const ActionCard = ({ title, desc, path }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(path)}
      className="bg-[#111] p-6 rounded-xl border border-gray-800 hover:border-orange-500 hover:scale-[1.02] transition cursor-pointer"
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{desc}</p>

      <button className="mt-4 text-orange-500 font-semibold">
        Start →
      </button>
    </div>
  );
};
