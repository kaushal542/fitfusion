import Navbar from "../components/Navbar";
import HeroCarousel from "../components/HeroCarousal";

const Home = () => {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
    
      <HeroCarousel />

      {/* SERVICES SECTION */}
      <section className="py-16 px-10 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded shadow text-center">
            <h3 className="text-xl font-semibold mb-2">Gym Training</h3>
            <p className="text-gray-600">
              Professional gym workouts with modern equipment.
            </p>
          </div>

          <div className="bg-white p-6 rounded shadow text-center">
            <h3 className="text-xl font-semibold mb-2">Yoga Classes</h3>
            <p className="text-gray-600">
              Improve flexibility and mental health with yoga.
            </p>
          </div>

          <div className="bg-white p-6 rounded shadow text-center">
            <h3 className="text-xl font-semibold mb-2">Diet Planning</h3>
            <p className="text-gray-600">
              Customized diet plans by nutrition experts.
            </p>
          </div>
        </div>
      </section>

      {/* TRAINERS SECTION */}
      <section className="py-16 px-10 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">
          Expert Trainers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded shadow text-center">
            <h3 className="text-xl font-semibold">Rahul Sharma</h3>
            <p className="text-orange-500">Fitness Trainer</p>
            <p className="text-sm text-gray-600 mt-2">
              8+ years of experience in strength training.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded shadow text-center">
            <h3 className="text-xl font-semibold">Ananya Verma</h3>
            <p className="text-orange-500">Yoga Instructor</p>
            <p className="text-sm text-gray-600 mt-2">
              Certified yoga expert with 6+ years experience.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded shadow text-center">
            <h3 className="text-xl font-semibold">Amit Kulkarni</h3>
            <p className="text-orange-500">Nutritionist</p>
            <p className="text-sm text-gray-600 mt-2">
              Specialist in diet and fitness planning.
            </p>
          </div>
        </div>
      </section>

      {/* MEMBERSHIP PLANS */}
      <section className="py-16 px-10 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">
          Membership Plans
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded shadow text-center">
            <h3 className="text-xl font-semibold mb-2">Basic</h3>
            <p className="text-2xl font-bold mb-4">₹999/month</p>
            <p className="text-gray-600">Gym access</p>
          </div>

          <div className="bg-white p-6 rounded shadow text-center border-2 border-orange-500">
            <h3 className="text-xl font-semibold mb-2">Standard</h3>
            <p className="text-2xl font-bold mb-4">₹1499/month</p>
            <p className="text-gray-600">Gym + Yoga + Diet</p>
          </div>

          <div className="bg-white p-6 rounded shadow text-center">
            <h3 className="text-xl font-semibold mb-2">Premium</h3>
            <p className="text-2xl font-bold mb-4">₹1999/month</p>
            <p className="text-gray-600">Personal Trainer + Full Access</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
