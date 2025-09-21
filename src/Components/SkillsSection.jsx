import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiJquery,
  SiTailwindcss,
  SiFramer,
  SiTeamviewer,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "jQuery", icon: <SiJquery className="text-blue-300" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-200" /> },
  { name: "Teamwork", icon: <SiTeamviewer className="text-green-400" /> },
];

const SkillsSection = () => {
  const titleRef = useRef(null);
  const sectionRef = useRef(null);
  const skillsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animation for title
    gsap.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "restart none none reverse",
        },
      }
    );

    // Animation for skills (staggered)
    gsap.fromTo(
      skillsRef.current,
      { y: 50, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.2, // يخلي العناصر تظهر واحدة ورا التانية
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="Skills"
      className="min-h-screen bg-gradient-to-b from-black to-violet-900 relative overflow-hidden flex flex-col items-center justify-center px-6"
    >
      {/* العنوان */}
      <h2
        ref={titleRef}
        className="relative z-10 text-4xl md:text-6xl font-bold text-transparent bg-clip-text 
               bg-gradient-to-r from-purple-400 to-pink-300 mb-16 text-center 
               drop-shadow-[0_0_15px_rgba(147,51,234,0.8)]"
      >
        My Skills
      </h2>

      {/* الجريد */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            ref={(el) => (skillsRef.current[index] = el)}
            className="flex flex-col items-center justify-center w-28 h-28 sm:w-32 sm:h-32 rounded-full 
                   bg-gradient-to-br from-purple-800/40 to-violet-500/20 
                   border border-violet-400/30 shadow-[0_0_25px_rgba(147,51,234,0.5)]
                   hover:scale-110 hover:shadow-[0_0_35px_rgba(236,72,153,0.8)] 
                   transition-all duration-500"
          >
            <div className="text-4xl mb-2">{skill.icon}</div>
            <p className="text-sm text-purple-200 font-semibold">
              {skill.name}
            </p>
          </div>
        ))}
      </div>

      <div className="absolute inset-0 overflow-hidden -z-10">
        {[...Array(50)].map((_, i) => (
          <span
            key={i}
            className="absolute bg-white rounded-full animate-twinkle"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              boxShadow: "0 0 6px rgba(255,255,255,0.8)",
              animationDuration: `${2 + Math.random() * 3}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
