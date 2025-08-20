 import React from 'react';
// Install react-icons if not already: npm install react-icons
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

function Navbar() {
  return (
    <div className="pt-5">
      <nav className="text-white">
        <div className="w-[80%] border rounded-full justify-between items-center space-y-2 py-3 px-5 mx-auto flex">
          <div className="text-xl font-bold">TradePro</div>
          <div className="space-x-6 flex items-center">
            {/* WhatsApp */}
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300"
              title="WhatsApp"
            >
              <FaWhatsapp className="text-green-500 hover:text-green-400 text-2xl" />
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/ritesht_kumar?igsh=YzljYTk1ODg3Zg=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300"
              title="Instagram"
            >
              <FaInstagram className="text-pink-500 hover:text-pink-400 text-2xl" />
            </a>
            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/1Ar7WqDk1u/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300"
              title="Facebook"
            >
              <FaFacebook className="text-blue-500 hover:text-blue-400 text-2xl" />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;