import Navbar from "../components/Navbar";

const trainers = [
  {
    name: "Rahul Sharma",
    role: "Certified Fitness Trainer",
    experience: "8+ Years Experience",
    specialization: "Strength Training",
  },
  {
    name: "Ananya Verma",
    role: "Yoga Instructor",
    experience: "6+ Years Experience",
    specialization: "Yoga & Meditation",
  },
  {
    name: "Amit Kulkarni",
    role: "Nutrition Expert",
    experience: "10+ Years Experience",
    specialization: "Diet Planning",
  },
];

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="p-8">
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-4">About Us</h1>
          <p className="text-gray-600 mb-8">
            FitFusion is managed by certified trainers and nutrition experts
            dedicated to improving your fitness journey.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trainers.map((trainer, index) => (
              <div key={index} className="bg-white p-5 rounded shadow">
                <h3 className="text-xl font-semibold">{trainer.name}</h3>
                <p className="text-orange-500">{trainer.role}</p>
                <p className="text-sm mt-2">{trainer.specialization}</p>
                <p className="text-sm text-gray-500">{trainer.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
