import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const introRef = useRef(null);
  const starsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      {
        opacity: 1,
        y: -300,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      introRef.current,
      { y: 100, opacity: 0, filter: "blur(10px)" },
      {
        opacity: 1,
        y: -400,
        duration: 1.5,
        filter: "blur(0px)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          toggleActions: "play none none reverse",
        },
      }
    );

    starsRef.current.forEach((star, index) => {
      const duration = index % 2 === 0 ? 1 : -1;
      const speed = 0.5 + Math.random() * 0.5;
      gsap.to(star, {
        x: `${duration * (100 + index * 20)}`,
        y: `${duration * -50 + index * 10}`,
        rotation: duration * 360,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: speed,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === sectionRef.current) {
          trigger.kill();
        }
      });
    };
  });

  const addToStars = (el) => {
    if (el && !starsRef.current.includes(el)) {
      starsRef.current.push(el);
    }
  };

  return (
    <>
      <section
        id="About"
        ref={sectionRef}
        className="h-screen relative overflow-hidden bg-gradient-to-b from-black to-[#9a74cf50] "
      >
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(10)].map((_, index) => (
            <div
              ref={addToStars}
              key={`star-${index}`}
              className="absolute rounded-full"
              style={{
                width: `${10 + index * 3}px`,
                height: `${10 + index * 3}px`,
                backgroundColor: "white",
                opacity: 0.2 + Math.random() * 0.4,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
        <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center">
          <h1
            ref={titleRef}
            className="text-4xl md:text-6xl z-[999] font-bold sm:mb-16 text-center text-white opacity-0 mt-20"
          >
            About Me
          </h1>
        </div>
        <div
          ref={introRef}
          className="absolute lg:bottom-[-20rem] md:bottom-[-10rem] bottom-[-20rem] left-0 w-full flex md:flex-row flex-col justify-between lg:px-24 px-5 items-center opacity-0"
        >
          <h3 className="text-sm md:text-2xl font-bold text-purple-200 z-50 lg:max-w-[45rem] max-w-[27rem] tracking-wider md:mt-20 sm:mt-[-40rem] mt-[-32rem]">
            Hi, I’m Abdelrahman Ahmed — a passionate web developer dedicated to
            crafting dynamic and responsive web applications. I specialize in
            front-end technologies and aim to deliver seamless user experiences
            that leave a lasting impression. My toolkit includes HTML5, CSS3,
            JavaScript, Bootstrap, Tailwind, jQuery, and React. I’m always
            exploring new technologies and refining my skills to stay ahead in
            the fast-paced world of web development.
          </h3>
          <img
            className="lg:h-[40rem] md:h-[25rem] h-[20rem] mix-blend-lighten"
            src="/Portfolio/Images/1753132573507-removebg-preview.png"
            alt="My image"
          />
        </div>
      </section>
    </>
  );
};

export default AboutSection;
