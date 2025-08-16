 import React from "react";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaBriefcase, FaGraduationCap, FaBirthdayCake } from "react-icons/fa";

const info = [
  {
    icon: <FaUser className="text-indigo-400 group-hover:scale-125 transition-transform duration-300" />,
    label: "Name",
    value: "Ritesh Kumar",
  },
  {
    icon: <FaEnvelope className="text-pink-400 group-hover:scale-125 transition-transform duration-300" />,
    label: "Email",
    value: "ritesh@example.com",
  },
  {
    icon: <FaPhone className="text-green-400 group-hover:scale-125 transition-transform duration-300" />,
    label: "Phone",
    value: "+91 99999 99999",
  },
  {
    icon: <FaMapMarkerAlt className="text-yellow-400 group-hover:scale-125 transition-transform duration-300" />,
    label: "Location",
    value: "Delhi, India",
  },
  {
    icon: <FaBriefcase className="text-blue-400 group-hover:scale-125 transition-transform duration-300" />,
    label: "Profession",
    value: "Full-time Trader & Investor",
  },
  {
    icon: <FaGraduationCap className="text-purple-400 group-hover:scale-125 transition-transform duration-300" />,
    label: "Education",
    value: "B.Com (Hons), Delhi University",
  },
  {
    icon: <FaBirthdayCake className="text-red-400 group-hover:scale-125 transition-transform duration-300" />,
    label: "Birthday",
    value: "16 August 1998",
  },
];

function Info() {
  return (
    <section className="max-w-full mx-auto my-12 p-8 rounded-2xl    ">
      <h2 className="text-3xl font-extrabold text-white mb-8 text-center tracking-wide">
        My Information
      </h2>
      <ul className="flex flex-wrap gap-6 justify-center">
        {info.map((item, idx) => (
          <li
            key={idx}
            className="flex w-full sm:w-[45%] md:w-[30%] items-center gap-5 p-5 rounded-xl bg-gray-800 hover:bg-gray-700 transition-all duration-300 group shadow-lg"
          >
            <span className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center text-2xl shadow-inner group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </span>
            <div>
              <h3 className="text-lg font-bold text-white">{item.label}</h3>
              <p className="text-gray-300">{item.value}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Info;