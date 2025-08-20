 import { useState } from "react";
import { FaYoutube, FaFacebook, FaArrowRight, FaUserTie, FaChartLine, FaInstagram } from "react-icons/fa";

const iconMap = {
  Instagram: <FaInstagram className="text-pink-500 transition-colors duration-300 text-2xl" />,
  Youtube: <FaYoutube className="text-red-500 transition-colors duration-300 text-2xl" />,
  Facebook: <FaFacebook className="text-blue-500 transition-colors duration-300 text-2xl" />,
  Upstox: <FaChartLine className="text-green-500 transition-colors duration-300 text-2xl" />,
  "Angel One": <FaUserTie className="text-indigo-400 transition-colors duration-300 text-2xl" />,
};

const Link = () => {
  const [links] = useState([
    {
      id: 1,
      title: "Instagram",
      description: "Instagram account",
      url: "https://www.instagram.com/ritesht_kumar?igsh=YzljYTk1ODg3Zg==",
    },
    {
      id: 2,
      title: "Youtube",
      description: "YouTube ",
      url: "https://youtube.com/@riteshkumar-bg4gb?si=cWv3g-ijJET6apfQ",
    },
    {
      id: 2,
      title: "Facebook",
      description: "my facebook account",
      url: "https://www.facebook.com/share/1Ar7WqDk1u/",
    },
    {
      id: 3,
      title: "Upstox",
      description: "Check my broker accoun",
      url: "https://upstox.onelink.me/0H1s/6JB39E",
    },
    {
      id: 4,
      title: "Angel One",
      description: "Angel One Account",
      url: "https://angel-one.onelink.me/Wjgr/99zvbs4s",
    },
  ]);

  return (
    <div className="relative py-12 px-4 sm:px-8">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80 blur-2xl -z-10" />
      <div className="max-w-2xl mx-auto backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-gray-700">
        <h2 className="text-3xl font-extrabold text-white mb-8 text-center tracking-wide">
          My Social & Important Links
        </h2>
        <ul className="space-y-6">
          {links.map((link) => (
            <li
              key={link.id}
              className="transition-transform transform hover:scale-105 duration-300"
            >
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-xl shadow-lg bg-gray-800 hover:bg-gray-800 transition-all duration-300 group"
              >
                <span className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                  {iconMap[link.title] || link.title[0]}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:underline">
                    {link.title}
                  </h3>
                  <p className="text-gray-300 opacity-90">{link.description}</p>
                </div>
                <span className="ml-auto text-gray-400 group-hover:text-white group-hover:translate-x-2 transition-transform duration-300 text-2xl">
                  <FaArrowRight />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Link;