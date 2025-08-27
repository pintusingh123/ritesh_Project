import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "1. Stock Market में हमें क्या सीखना है :- ",
    description:
      " Stock कब खरीदना है उस stock को कब तक होल्ड करना hai और उस stock को कब बेचना है एक invester के  पास नजर सबर जिगर ये तीनों चीज़ होनी चाहिए ",
    icon: ServerIcon,
  },
  {
    name: "2. एक Investor के पास :- ",
    description: "नज़र, सब्र, जिगर 👉 ये तीनों चीज़ होनी चाहिए",
    icon: CloudArrowUpIcon,
  },
  {
    name: "3. Stock Market के 7 स्तंभ :- ",
    description:
      "📊 Fundamental Analysis ,📈 Technical Analysis , 📊 Risk Management , 📈 Trading Psychology , 📉  Entry और Exit लेना , 💪🧠 Strong Mindset",
    icon: LockClosedIcon,
  },
  {
    name: "Finance के 3 Rules :- ",
    description:
      "पैसे कैसे कमाना है, पैसे कैसे बचाना है, पैसे कैसे Invest करना है",
    icon: ServerIcon,
  },
];
function About() {
  return (
    <div className="overflow-hidden bg-gradient-to-r from-gray-700 to-gray-950 py-10  ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-18 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="   lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-100 capitalize">
                welcome to my profile{" "}
              </h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-100 sm:text-5xl">
                A better workflow
              </p>
              <p className="mt-6 text-lg/8 text-gray-300">
                Success in trading comes from discipline, patience, and
                continuous learning.Stay focused on your strategy, not your
                emotions
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-300 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-100">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute top-1 left-1 size-5 text-indigo-600"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src="/ritesh-removebg-preview.png"
            className="w-full h-auto relative z-10 transform hover:scale-105 transition duration-1000 sm:w-[49rem] drop-shadow-md"
            style={{ filter: "drop-shadow(0 0 60px black)" }} // #2563eb is Tailwind's blue-600
          />
        </div>
      </div>
    </div>
  );
}

export default About;
