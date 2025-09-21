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
            I am a passionate web developer with a knack for creating dynamic
            and responsive web applications. With a strong foundation in
            front-end technologies, I strive to build seamless user experiences.
            My journey in web development has equipped me with skills in HTML5,
            CSS3, JavaScript, Bootstrap, Tailwind , jQuery, and React. I am
            constantly learning and adapting to new technologies to stay ahead
            in this ever-evolving field.
          </h3>
          <img
            className="lg:h-[40rem] md:h-[25rem] h-[20rem] mix-blend-lighten"
            src="../../public/Images/1753132573507-removebg-preview.png"
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default AboutSection;
