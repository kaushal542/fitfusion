import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import trainers from "../data/trainers";
import banner from "../assets/images/hero-1.jpg";
import motivationBg from "../assets/images/hero-2.jpg";


const AboutUs = () => {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative min-h-[60vh] md:min-h-[75vh] lg:min-h-[85vh] flex items-center justify-center bg-black overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url(${banner})`,
          }}
        ></div>

        {/* Content */}
        <div className="relative text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold uppercase font-oswald tracking-wider">
            About <span className="text-orange-500">FitFusion</span>
          </h1>

          <p className="mt-4 text-gray-300 max-w-xl mx-auto">
            Transform your body and mind with professional trainers, structured
            workouts, and personalized nutrition guidance.
          </p>
        </div>
      </section>

      {/* ABOUT DESCRIPTION */}
      <section className="bg-[#0a0a0a] text-gray-300 py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl md:text-4xl text-white font-bold uppercase mb-6 font-oswald">
          Who We Are
        </h2>

        <p className="max-w-4xl mx-auto leading-7">
          FitFusion Gym is a modern fitness center dedicated to helping people
          achieve their dream physique and healthier lifestyle. Our certified
          trainers provide expert guidance in strength training, fat loss,
          muscle building, yoga, and nutrition planning. Whether you are a
          beginner or an athlete, we design customized programs to push your
          limits safely and effectively.
        </p>
      </section>

      {/* TRAINERS SECTION */}
      <section className="bg-[#111] py-20 px-6 md:px-10">
        <div className="text-center mb-14">
          <p className="text-orange-500 uppercase tracking-wider mb-2 font-semibold">
            Our Team
          </p>
          <h2 className="text-4xl text-white font-bold uppercase font-oswald">
            Meet Our Expert Trainers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="relative group overflow-hidden bg-black"
            >
              {/* Trainer Image */}
              <img
                src={trainer.image}
                alt={trainer.name}
                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover Info */}
              <div
                className="absolute bottom-0 left-0 w-full bg-[#0a0a0a] text-center py-6
                opacity-0 group-hover:opacity-100 transition-all duration-500"
                style={{
                  clipPath: "polygon(0 15%, 100% 0, 100% 100%, 0% 100%)",
                }}
              >
                <h3 className="text-xl font-bold text-white uppercase">
                  {trainer.name}
                </h3>
                <p className="text-orange-500 text-sm uppercase">
                  {trainer.role}
                </p>

                {/* Social icons */}
                <div className="flex justify-center gap-4 mt-4 text-gray-400">
                  <i className="fab fa-facebook-f hover:text-orange-500 cursor-pointer"></i>
                  <i className="fab fa-instagram hover:text-orange-500 cursor-pointer"></i>
                  <i className="fab fa-twitter hover:text-orange-500 cursor-pointer"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MOTIVATION SECTION */}
      <section className="relative py-24 px-6 md:px-20 text-white text-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${motivationBg})` }}
        ></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/80"></div>

        {/* Content */}
        <div className="relative max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold uppercase mb-6 font-oswald">
            Transform Your Body. Transform Your Life.
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            At MB Fitness Gym, we believe fitness is not just about lifting
            weights — it's about building discipline, confidence, and a
            healthier lifestyle. Our expert trainers and supportive environment
            help you stay consistent and achieve results faster.
          </p>

          <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 font-bold uppercase tracking-wider transition rounded">
            Start Your Fitness Journey
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutUs;
