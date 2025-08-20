 import React from 'react';
import { FaRegSmileBeam } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white text-center py-6 mt-10 border-t border-gray-700 shadow-inner">
      <div className="flex flex-col items-center gap-2 px-2">
        <div className="inline-flex items-center justify-center gap-2 text-base sm:text-lg font-semibold flex-wrap leading-tight">
          <span className="flex items-center">
            <FaRegSmileBeam className="text-yellow-400 animate-bounce text-xl sm:text-2xl mr-1 align-middle" />
            <span className="align-middle">Thanks for visiting! Keep Smiling &amp; Keep Trading 🚀</span>
          </span>
        </div>
        <div className="mt-2 text-gray-300 text-xs sm:text-sm break-words">
          <span>Contact: riteshjwr2001@gmail.com | Jhalawar, Rajasthan</span>
        </div>
        <div className="text-gray-400 text-[7px] sm:text-xs mt-1 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
          <span>
            Made with <span className="text-red-400">❤️</span> by <span className="font-semibold text-indigo-300"> Ritesh Kumar</span>
          </span>
          <span className="hidden sm:inline">|</span>
          <span>
            Website Crafted &amp; Developed by <span className="font-bold text-pink-100 underline underline-offset-2"> Pintu Singh</span>
          </span>
          <span className="hidden sm:inline">|</span>
          <span>© 2025 TradePro. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;