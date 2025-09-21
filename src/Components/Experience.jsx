import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "Webmaster Company",
    points: [
      "Completed an intensive training program focused on React.js, JavaScript, and modern frontend technologies.",
      "Collaborated with a team of 6 developers to deliver 3 production-ready projects within deadlines, improving teamwork and Agile workflow skills.",
      "Contributed to designing and implementing responsive UIs with React, Bootstrap, and Tailwind CSS.",
      "Gained hands-on experience with Git, GitHub, and team-based Agile workflow.",
      "Resolved 20+ frontend bugs and enhanced communication through daily Agile standups.",
    ],
  },
];

const ExperienceSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      itemsRef.current,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="Experience"
      className="min-h-screen bg-gradient-to-b from-gray-950 to-purple-900 
                 flex flex-col items-center justify-center px-6 relative overflow-hidden"
    >

      <h2
        ref={titleRef}
        className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text 
                   bg-gradient-to-r from-purple-400 to-pink-300 mb-16 text-center 
                   drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]"
      >
        Professional Experience
      </h2>

      <div className="relative z-10 space-y-12 max-w-3xl">
        {experiences.map((exp, index) => (
          <div
            key={index}
            ref={(el) => (itemsRef.current[index] = el)}
            className="relative pl-12 border-l-4 border-purple-400"
          >
            
            <span
              className="absolute -left-6 top-0 flex items-center justify-center 
                             w-10 h-10 rounded-full bg-purple-600 shadow-lg"
            >
              <FaBriefcase className="text-white text-xl" />
            </span>

            
            <h3 className="text-2xl font-bold text-purple-300">
              {exp.role} <span className="text-gray-300">– {exp.company}</span>
            </h3>

            
            <ul className="mt-3 space-y-2 list-disc list-inside text-gray-200">
              {exp.points.map((point, i) => (
                <li key={i} className="leading-relaxed">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      
      <div className="absolute inset-0 overflow-hidden z-10 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <span
            key={i}
            className="absolute bg-white rounded-full animate-twinkle"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${2 + Math.random() * 3}s`,
              animationDelay: `${Math.random() * 5}s`,
              boxShadow: "0 0 6px rgba(255,255,255,0.8)",
            }}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
