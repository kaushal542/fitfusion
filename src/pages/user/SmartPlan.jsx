import { useState } from "react";

const SmartPlan = () => {
  const [form, setForm] = useState({
    weight: "",
    height: "",
    goal: "",
    condition: "",
  });

  const [plan, setPlan] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const generatePlan = (e) => {
    e.preventDefault();

    let workout = [];
    let diet = [];
    let tips = [];

    /* ---------- GOAL LOGIC ---------- */

    if (form.goal === "fatloss") {
      workout.push("Brisk Walking - 20 min");
      workout.push("Cycling / Treadmill - 15 min");
      workout.push("Full Body Circuit - 3 rounds");
      diet.push("High protein + low carbs");
      diet.push("Avoid sugar & fried food");
    }

    if (form.goal === "muscle") {
      workout.push("Push Pull Legs Split");
      workout.push("Heavy Compound Exercises");
      workout.push("Progressive Overload Training");
      diet.push("High protein diet");
      diet.push("Banana + Peanut butter shake");
    }

    if (form.goal === "maintenance") {
      workout.push("Light Cardio - 15 min");
      workout.push("Bodyweight training");
      diet.push("Balanced diet");
    }

    /* ---------- DISEASE LOGIC ---------- */

    if (form.condition === "diabetes") {
      tips.push("Avoid high sugar fruits");
      tips.push("Workout after meals");
      diet.push("Oats & complex carbs recommended");
    }

    if (form.condition === "bp") {
      tips.push("Avoid heavy lifting strain");
      tips.push("Focus breathing exercises");
      diet.push("Low sodium diet");
    }

    if (form.condition === "kneepain") {
      workout = workout.filter(w => !w.includes("Running"));
      workout.push("Cycling recommended");
      tips.push("Avoid jumping & squats");
    }

    setPlan({ workout, diet, tips });
  };

  return (
    <div className="max-w-4xl mx-auto">

      <h1 className="text-3xl font-bold mb-8 text-center">
        Smart Fitness Planner 🧠
      </h1>

      {/* FORM */}
      <form
        onSubmit={generatePlan}
        className="bg-[#111] p-8 rounded-xl border border-gray-800 grid md:grid-cols-2 gap-6"
      >

        <input
          name="weight"
          placeholder="Weight (kg)"
          onChange={handleChange}
          className="p-3 bg-black border border-gray-700 rounded"
        />

        <input
          name="height"
          placeholder="Height (cm)"
          onChange={handleChange}
          className="p-3 bg-black border border-gray-700 rounded"
        />

        <select name="goal" onChange={handleChange} className="p-3 bg-black border border-gray-700 rounded">
          <option value="">Select Goal</option>
          <option value="fatloss">Fat Loss</option>
          <option value="muscle">Muscle Gain</option>
          <option value="maintenance">Maintain</option>
        </select>

        <select name="condition" onChange={handleChange} className="p-3 bg-black border border-gray-700 rounded">
          <option value="">Health Condition</option>
          <option value="diabetes">Diabetes</option>
          <option value="bp">High Blood Pressure</option>
          <option value="kneepain">Knee Pain</option>
        </select>

        <button className="md:col-span-2 bg-orange-500 py-3 rounded font-bold hover:bg-orange-600">
          Generate My Plan
        </button>
      </form>

      {/* RESULT */}
      {plan && (
        <div className="mt-10 space-y-6">

          <PlanCard title="Workout Plan" items={plan.workout} />
          <PlanCard title="Diet Plan" items={plan.diet} />
          <PlanCard title="Important Tips" items={plan.tips} />

        </div>
      )}

    </div>
  );
};

export default SmartPlan;


/* ---------- Plan Card ---------- */

const PlanCard = ({ title, items }) => (
  <div className="bg-[#111] border border-gray-800 rounded-xl p-6">
    <h2 className="text-xl font-bold mb-4 text-orange-500">{title}</h2>

    <ul className="space-y-2 text-gray-300">
      {items.map((item, i) => (
        <li key={i}>• {item}</li>
      ))}
    </ul>
  </div>
);
