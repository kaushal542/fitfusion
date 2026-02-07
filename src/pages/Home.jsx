import { useState, useEffect, useCallback } from "react";
import Navbar from "../components/Navbar";
import HeroCarousel from "../components/HeroCarousal";
import Footer from "../components/Footer";

//Trainers data
import trainers from "../data/trainers";

// Service Images
import service1 from "../assets/images/service-1.jpg";
import service2 from "../assets/images/service-2.jpg";
import service3 from "../assets/images/service-3.jpg";
import service4 from "../assets/images/service-4.jpg";
import service5 from "../assets/images/service-5.jpg";
import service6 from "../assets/images/service-6.jpg";

const Home = () => {
  // --- CAROUSEL STATE ---
  const [currentTrainerIndex, setCurrentTrainerIndex] = useState(0);

  // Data for the pricing plans
  const pricingPlans = [
    {
      title: "Class drop-in",
      price: "39.0",
      frequency: "SINGLE CLASS",
      features: [
        "Free riding",
        "Unlimited equipments",
        "Personal trainer",
        "Weight losing classes",
        "Month to mouth",
        "No time restriction",
      ],
    },
    {
      title: "12 Month unlimited",
      price: "99.0",
      frequency: "SINGLE CLASS",
      features: [
        "Free riding",
        "Unlimited equipments",
        "Personal trainer",
        "Weight losing classes",
        "Month to mouth",
        "No time restriction",
      ],
    },
    {
      title: "6 Month unlimited",
      price: "59.0",
      frequency: "SINGLE CLASS",
      features: [
        "Free riding",
        "Unlimited equipments",
        "Personal trainer",
        "Weight losing classes",
        "Month to mouth",
        "No time restriction",
      ],
    },
  ];

  // Data for the Services/Classes section
  const services = [
    {
      category: "STRENGTH",
      title: "WEIGHTLIFTING",
      image: service1,
    },
    {
      category: "CARDIO",
      title: "INDOOR CYCLING",
      image: service2,
    },
    {
      category: "STRENGTH",
      title: "KETTLEBELL POWER",
      image: service3,
    },
    {
      category: "STRENGTH",
      title: "CALISTHENICS",
      image: service4,
    },
    {
      category: "MARTIAL ARTS",
      title: "BOXING",
      image: service5,
    },
    {
      category: "CARDIO",
      title: "ZUMBA",
      image: service6,
    },
  ];

  

  // --- CAROUSEL LOGIC ---

  // Function to move to the next slide
  const nextSlide = useCallback(() => {
    setCurrentTrainerIndex((prev) => (prev + 1) % trainers.length);
  }, [trainers.length]);

  // Function to move to the previous slide
  const prevSlide = () => {
    setCurrentTrainerIndex((prev) =>
      prev === 0 ? trainers.length - 1 : prev - 1
    );
  };

  // 1. Automatically cycle through trainers every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // 3 seconds interval

    // Cleanup interval on unmount or when user manually interacts (logic resets)
    return () => clearInterval(interval);
  }, [nextSlide]);

  // 2. Get the 3 trainers to show right now (handling the loop logic)
  const visibleTrainers = [
    trainers[currentTrainerIndex % trainers.length],
    trainers[(currentTrainerIndex + 1) % trainers.length],
    trainers[(currentTrainerIndex + 2) % trainers.length],
  ];

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <HeroCarousel />

      {/* WHY CHOOSE US SECTION */}
      <section className="py-16 px-10 bg-black text-white font-oswald">
        <div className="text-center mb-12">
          <p className="text-orange-500 font-semibold mb-2">WHY CHOSE US?</p>
          <h2 className="text-3xl md:text-3xl font-bold">
            PUSH YOUR LIMITS FORWARD
          </h2>
        </div>
        {/* ... (Existing Why Choose Us Grid) ... */}
         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="bg-gray-800 rounded-full w-20 h-20 flex items-center justify-center mb-4">
              <i className="fas fa-dumbbell fa-2x text-orange-500"></i>
            </div>
            <h5 className="font-semibold mb-2">Modern equipment</h5>
            <p className="text-gray-400 text-sm">
             Train with latest international machines including strength, cardio, and functional training equipment designed for safe and effective workouts.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-gray-800 rounded-full w-20 h-20 flex items-center justify-center mb-4">
              <i className="fas fa-apple-alt fa-2x text-orange-500"></i>
            </div>
            <h5 className="font-semibold mb-2">Healthy nutrition plan</h5>
            <p className="text-gray-400 text-sm">
             Get customized diet guidance from our trainers to support fat loss, muscle gain, and overall health based on your body type and goals.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-gray-800 rounded-full w-20 h-20 flex items-center justify-center mb-4">
              <i className="fas fa-dumbbell fa-2x text-orange-500"></i>
            </div>
            <h5 className="font-semibold mb-2">Professional training plan</h5>
            <p className="text-gray-400 text-sm">
             Our certified trainers create structured workout programs that help you progress faster while avoiding injuries and plateaus.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-gray-800 rounded-full w-20 h-20 flex items-center justify-center mb-4">
              <i className="fas fa-heartbeat fa-2x text-orange-500"></i>
            </div>
            <h5 className="font-semibold mb-2">Unique to your needs</h5>
            <p className="text-gray-400 text-sm">
             Every member is different — we design personalized fitness routines according to your body condition, lifestyle, and fitness level.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES / CLASSES SECTION */}
      <section className="py-16 px-4 md:px-10 bg-[#0a0a0a] text-white">
        <div className="text-center mb-12">
          <p className="text-orange-500 font-semibold mb-2 uppercase tracking-wider">
            Our Classes
          </p>
          <h2 className="text-3xl md:text-3xl font-bold uppercase font-oswald">
            What We Can Offer
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative h-80 group overflow-hidden cursor-pointer"
            >
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div
                className="absolute bottom-0 left-0 w-full bg-[#111] p-6 flex items-center justify-between"
                style={{
                  clipPath: "polygon(0 15%, 100% 0, 100% 100%, 0% 100%)",
                  height: "40%",
                }}
              >
                <div className="flex flex-col justify-center mt-4">
                  <span className="text-orange-500 text-xs font-bold uppercase mb-1">
                    {service.category}
                  </span>
                  <h3 className="text-white text-lg font-bold uppercase font-oswald">
                    {service.title}
                  </h3>
                </div>
                <div className="mt-4 text-white group-hover:text-orange-500 transition-colors">
                  <i className="fas fa-chevron-right"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TRAINERS SECTION (Updated with Arrows & Lines) */}
      <section className="py-20 px-4 md:px-10 bg-[#111] text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="text-center md:text-left w-full md:w-auto">
            <p className="text-orange-500 font-bold mb-2 uppercase tracking-wider">
              Our Team
            </p>
            <h2 className="text-3xl md:text-5xl font-bold uppercase font-oswald">
              Train With Experts
            </h2>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto">
          
          {/* LEFT ARROW */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 text-gray-500 hover:text-orange-500 transition-colors"
          >
            <i className="fas fa-chevron-left fa-2x"></i>
          </button>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visibleTrainers.map((trainer, index) => (
              <div
                key={`${trainer.name}-${index}`}
                className="relative group overflow-hidden h-96 transition-all duration-500"
              >
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div
                  className="absolute bottom-0 left-0 w-full bg-[#0a0a0a] flex flex-col items-center justify-center pb-6 pt-10
                            transition-all duration-500 ease-in-out
                            opacity-0 group-hover:opacity-100
                            -translate-x-10 group-hover:translate-x-0"
                  style={{
                    clipPath: "polygon(0 15%, 100% 0, 100% 100%, 0% 100%)",
                    marginTop: "-50px",
                  }}
                >
                  <h3 className="text-white text-xl font-bold uppercase font-oswald">
                    {trainer.name}
                  </h3>
                  <p className="text-gray-400 text-sm uppercase tracking-wider mt-1">
                    {trainer.role}
                  </p>

                  <div className="mt-4 flex space-x-4">
                    <i className="fab fa-facebook-f text-white hover:text-orange-500 cursor-pointer"></i>
                    <i className="fab fa-twitter text-white hover:text-orange-500 cursor-pointer"></i>
                    <i className="fab fa-instagram text-white hover:text-orange-500 cursor-pointer"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT ARROW */}
          <button 
             onClick={nextSlide}
             className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 text-gray-500 hover:text-orange-500 transition-colors"
          >
            <i className="fas fa-chevron-right fa-2x"></i>
          </button>

        </div>

        {/* BOTTOM LINES (INDICATORS) */}
        <div className="flex justify-center mt-10 space-x-2">
          {trainers.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentTrainerIndex(index)}
              className={`h-1 w-8 rounded-sm cursor-pointer transition-colors duration-300 ${
                index === currentTrainerIndex ? "bg-orange-500" : "bg-gray-600"
              }`}
            ></div>
          ))}
        </div>
      </section>

      {/* MEMBERSHIP PLANS */}
      <section className="py-16 px-4 md:px-10 bg-black text-white font-oswald">
        <div className="text-center mb-12">
          <p className="text-orange-500 font-semibold mb-2 uppercase">
            Our Plan
          </p>
          <h2 className="text-3xl md:text-4xl font-bold uppercase">
            Choose Your Pricing Plan
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-[#111] border border-gray-800 p-10 flex flex-col items-center text-center hover:border-orange-500 transition-colors duration-300"
            >
              <h3 className="text-white text-xl font-bold mb-4 uppercase">
                {plan.title}
              </h3>
              <div className="text-orange-500 text-5xl font-bold mb-2">
                $ {plan.price}
              </div>
              <p className="text-gray-400 text-sm mb-8 uppercase tracking-wide">
                {plan.frequency}
              </p>
              <ul className="text-gray-400 space-y-4 mb-10 text-sm font-light">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <button className="bg-gray-800 text-white uppercase font-bold py-3 px-8 w-full hover:bg-orange-500 hover:text-white transition-all duration-300 mt-auto">
                Enroll Now
              </button>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;