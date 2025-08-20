 import React from 'react';
import { FaRegSmileBeam } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white text-center py-6 mt-10 border-t border-gray-700 shadow-inner">
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center justify-center gap-2 text-lg font-semibold">
          <FaRegSmileBeam className="text-yellow-400 animate-bounce" />
          <span>Thanks for visiting! Keep Smiling & Keep Trading 🚀</span>
        </div>
        <div className="mt-2 text-gray-300 text-sm">
          <span>Contact: riteshjwr2001@gmail.com | Jhalawar, Rajasthan</span>
        </div>
        <div className="text-gray-400 text-xs mt-1">
          <span>
            Made with <span className="text-red-400">❤️</span> by <span className="font-semibold text-indigo-300"> Ritesh Kumar</span>
            <span className="mx-2">|</span>
            Website Crafted & Developed by <span className="font-bold text-pink-100 underline underline-offset-2"> Pintu Singh </span>
            <span className="mx-2">|</span>
            © 2025 TradePro. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;