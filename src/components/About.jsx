import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

 const features = [
  {
    name: "Trader's Journey",
    description:
      "Started with curiosity and a passion for the markets, learning from every win and loss to build a strong trading foundation.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Experience & Growth",
    description:
      "Years of dedication, discipline, and adapting to market changes have shaped a resilient and knowledgeable trading mindset.",
    icon: LockClosedIcon,
  },
  {
    name: "Knowledge & Discipline",
    description:
      "Continuous learning, risk management, and emotional control are the pillars of consistent success in the trading world.",
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
                Success in trading comes from discipline, patience, and continuous learning.Stay focused on your strategy, not your emotions
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
            src="./public/ritesh-removebg-preview.png"
            className="w-full h-auto  transform hover:scale-105 transition duration-1000 sm:w-[49rem] "
          />
        </div>
      </div>
    </div>
  );
}

export default About;
