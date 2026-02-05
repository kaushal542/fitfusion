import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import contactBg from "../assets/images/hero-2.jpg";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    goal: "",
    time: "",
    message: "",
  });

  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.email) {
      alert("Please fill required fields");
      return;
    }

    console.log("User Enquiry:", formData);

    setSuccess("Your enquiry has been submitted. We will contact you soon!");

    setFormData({
      name: "",
      phone: "",
      email: "",
      goal: "",
      time: "",
      message: "",
    });
  };

  return (
    <>
      <Navbar />

      {/* CONTACT FORM WITH BACKGROUND IMAGE */}
      <section className="relative min-h-screen flex items-center py-20 px-6 md:px-20">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${contactBg})` }}
        ></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/80"></div>

        {/* Content */}
        <div className="relative max-w-5xl mx-auto w-full">

          <h1 className="text-4xl font-bold text-center mb-4 uppercase text-white font-oswald">
            Contact Us
          </h1>

          <p className="text-center text-gray-300 mb-10">
            Fill the form and our trainer will contact you shortly.
          </p>

          {success && (
            <div className="bg-green-600 text-white text-center p-3 rounded mb-6">
              {success}
            </div>
          )}

          {/* Glass Card Form */}
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 backdrop-blur-md bg-black/40 p-8 rounded-xl border border-gray-700 shadow-xl"
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name *"
              value={formData.name}
              onChange={handleChange}
              className="p-3 bg-black/60 border border-gray-600 rounded focus:border-orange-500 outline-none text-white"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number *"
              value={formData.phone}
              onChange={handleChange}
              className="p-3 bg-black/60 border border-gray-600 rounded focus:border-orange-500 outline-none text-white"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              value={formData.email}
              onChange={handleChange}
              className="p-3 bg-black/60 border border-gray-600 rounded focus:border-orange-500 outline-none text-white"
            />

            <select
              name="goal"
              value={formData.goal}
              onChange={handleChange}
              className="p-3 bg-black/60 border border-gray-600 rounded focus:border-orange-500 outline-none text-white"
            >
              <option value="">Select Fitness Goal</option>
              <option>Weight Loss</option>
              <option>Muscle Gain</option>
              <option>General Fitness</option>
              <option>Yoga</option>
            </select>

            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="p-3 bg-black/60 border border-gray-600 rounded focus:border-orange-500 outline-none text-white"
            >
              <option value="">Preferred Time</option>
              <option>Morning</option>
              <option>Afternoon</option>
              <option>Evening</option>
            </select>

            <div className="md:col-span-2">
              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 bg-black/60 border border-gray-600 rounded focus:border-orange-500 outline-none text-white"
              ></textarea>
            </div>

            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 px-10 py-3 uppercase font-bold tracking-wider transition rounded"
              >
                Send Enquiry
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="bg-black py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl text-white font-bold text-center mb-8 uppercase font-oswald">
            Find Us On Map
          </h2>

          <div className="w-full h-112.5 rounded-lg overflow-hidden border border-gray-800 shadow-lg">
            <iframe
              title="MB Fitness Gym Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232.614150808248!2d79.02153873490721!3d21.11948565740298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c00050610c3d%3A0x571a2f4f696976d!2sMB%20Fitness%20GYM!5e0!3m2!1sen!2sin!4v1770317087406!5m2!1sen!2sin"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactUs;
