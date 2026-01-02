import React from "react";
import Image1 from "../assets/Tech-Camp-Javascript-class(2).jpg";
import Image2 from "../assets/13457.jpg";

const experiences = [
  {
    role: "Front-End Developer",
    company: "Freelance",
    image: Image2,
    period: "2024 — Present",
    description:
      "Building responsive websites, improving UI/UX, and implementing interactive features using HTML, CSS, JavaScript and React.",
  },

  {
    role: "Javascript Trainer",
    company: "Fhenix Africa",
    image: Image1,
    period: "2025 (Aug) — 2025 (Sept)",
    description:
      "Taught young minds with zero JavaScript experience the basics of JavaScript and how to build simple web applications.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 px-6 md:px-10 lg:px-20 bg-[#020617]"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
        Experience
      </h2>

      <p className="text-center text-gray-400 mb-10 max-w-2xl mx-auto">
        My professional journey and key experiences
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-[#0b1220] border border-[#1b2a4a] hover:border-blue-500 transition-all duration-300 rounded-xl p-6 flex flex-col gap-4 shadow-lg hover:-translate-y-1"
          >
            <div className="w-full h-48 overflow-hidden rounded-lg">
              <img
                src={exp.image}
                alt={exp.role}
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white">
                {exp.role}
              </h3>

              <span className="block text-gray-300">
                {exp.company}
              </span>

              <span className="block text-blue-400 text-sm mt-1">
                {exp.period}
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
