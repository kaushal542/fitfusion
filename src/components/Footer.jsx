import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <>
      {/* CONTACT STRIP */}
      <div className="bg-black text-white py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="bg-orange-500 p-4 rounded-full text-xl">
              <FaMapMarkerAlt />
            </div>
            <p>FitFusion Gym, Rajendra nagar, Nagpur-440036</p>
          </div>

          <div className="flex items-center gap-4 justify-center">
            <div className="bg-orange-500 p-4 rounded-full text-xl">
              <FaPhoneAlt />
            </div>
            <p>+91 93568 44069 | +91 93568 06825</p>
          </div>

          <div className="flex items-center gap-4 justify-center md:justify-end">
            <div className="bg-orange-500 p-4 rounded-full text-xl">
              <FaEnvelope />
            </div>
            <p>Support.gymcenter@gmail.com</p>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <footer className="bg-[#0a0a0a] text-gray-300 py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
          {/* LOGO + ABOUT */}
          <div>
            <h2 className="text-4xl font-extrabold text-white mb-4">
              <span className="text-white">FIT</span>
              <span className="text-orange-500">FUSION</span>
            </h2>

            <p className="text-gray-400 mb-6">
              Transform your body and mind with professional trainers,
              structured workouts, and personalized nutrition guidance.
            </p>

            <div className="flex gap-4 text-sm">
              <FaFacebookF className="hover:text-orange-500 cursor-pointer" />
              <FaTwitter className="hover:text-orange-500 cursor-pointer" />
              <FaYoutube className="hover:text-orange-500 cursor-pointer" />
              <FaInstagram className="hover:text-orange-500 cursor-pointer" />
            </div>
          </div>

          {/* USEFUL LINKS */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              Useful links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="hover:text-orange-500">
                  About
                </Link>
              </li>
              <li>
                <Link to="/classes" className="hover:text-orange-500">
                  Classes
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-orange-500">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-orange-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/login" className="hover:text-orange-500">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/account" className="hover:text-orange-500">
                  My account
                </Link>
              </li>
              <li>
                <Link to="/subscribe" className="hover:text-orange-500">
                  Subscribe
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-orange-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* TIPS */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              Tips & Guides
            </h3>

            <div className="space-y-5 text-sm">
              <div>
                <p className="hover:text-orange-500 cursor-pointer">
                  Physical fitness may help prevent depression, anxiety
                </p>
                <span className="text-gray-500 text-xs">
                  3 min read | 20 Comment
                </span>
              </div>

              <div>
                <p className="hover:text-orange-500 cursor-pointer">
                  Fitness: The best exercise to lose belly fat and tone up
                </p>
                <span className="text-gray-500 text-xs">
                  3 min read | 20 Comment
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* COPYRIGHT */}
      <div className="bg-black text-gray-400 text-center py-4 text-sm border-t border-gray-800">
        Copyright ©2026 All rights reserved | This is made with
        <span className="text-orange-500"> ❤ </span> by Kaushal
      </div>
    </>
  );
};

export default Footer;
