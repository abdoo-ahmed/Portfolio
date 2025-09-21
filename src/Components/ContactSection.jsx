import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
import { useRef } from "react";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const ContactSection = () => {
  const circleRef = useRef(null);
  const sectionRef = useRef(null);
  const initialTextRef = useRef(null);
  const finalTextRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const clearup = () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.trigger === sectionRef.current) {
          st.kill(true);
        }
      });
    };

    clearup();

    gsap.set(circleRef.current, {
      scale: 1,
      backgroundColor: "white",
    });
    gsap.set(initialTextRef.current, {
      opacity: 1,
    });

    gsap.set(finalTextRef.current, {
      opacity: 0,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=200%",
        pin: true,
        scrub: 0.5,
        anticipatepin: 1,
        fastScrollEnd: true,
        preventOverlaps: true,
        invalidateOnRefresh: true,
      },
    });

    tl.to(
      circleRef.current,
      {
        scale: 5,
        backgroundColor: "#9333EA",
        ease: "power1.inOut",
        duration: 0.5,
      },
      0
    );
    tl.to(
      initialTextRef.current,
      {
        opacity: 0,
        ease: "power1.Out",
        duration: 0.2,
      },
      0.1
    );

    tl.to(
      circleRef.current,
      {
        scale: 17,
        backgroundColor: "#E9D5FF",
        boxShadow: "0 0 50px 20px rgba(233 , 213 , 255 , 0.3)",
        ease: "power1.inOut",
        duration: 0.5,
      },
      0.5
    );

    tl.to(
      finalTextRef.current,
      {
        opacity: 1,
        ease: "power2.in",
        duration: 0.2,
      },
      0.7
    );
    return clearup;
  });

  return (
    <>
      <section
        id="Contact"
        ref={sectionRef}
        style={{ overscrollBehavior: "none" }}
        className="flex items-center justify-center bg-black relative"
      >
        <div
          ref={circleRef}
          className="w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 rounded-full flex items-center justify-center relative transition-shadow duration-1000 shadow-violet-300/50 shadow-lg bg-gradient-to-r from-violet-400 to-pink-100"
        >
          <p
            ref={initialTextRef}
            className="text-black font-bold text-base sm:text-lg md:text-xl absolute inset-0 flex items-center text-center  "
          >
            SCROLL DOWN
          </p>
          <div
            ref={finalTextRef}
            className="text-center relative flex flex-col items-center justify-center opacity-0"
          >
            <h1
              style={{
                textShadow: " 0 0 10px #9333ea, 0 0 20px #9333ea",
                transition: "all 0.4s ease-in-out",
              }}
              className="text-black md:w-[10rem] w-[20rem] lg:scale-[0.4] sm:scale-[0.25] scale-[0.07] md:font-bold text-sm sm:text-base leading-none mb-6"
            >
              🌟 Contact Me
            </h1>

            <p className="text-black lg:w-[40rem] w-[20rem] absolute sm:mb-3 mb-4 md:scale-[0.1] scale-[0.068]">
              I'm always open to collaboration, freelancing, or just a friendly
              hello!
            </p>

            <p className="text-black lg:w-[40rem] w-[20rem] absolute sm:mt-3 mt-1 md:scale-[0.1] scale-[0.068]">
              <div className="flex flex-wrap gap-4 justify-center mb-6">
                {[
                  {
                    icon: <FaFacebookF />,
                    link: "https://www.facebook.com/abd.elrahman.ahmed.271204",
                  },
                  {
                    icon: <FaGithub />,
                    link: "https://github.com/abdoo-ahmed",
                  },
                  {
                    icon: <FaLinkedinIn />,
                    link: "https://www.linkedin.com/in/abdo-ahmed-96532a2ab",
                  },
                  { icon: <FaWhatsapp />, link: "https://wa.me/201227955020" },
                  {
                    icon: <FaEnvelope />,
                    link: "mailto:abdoahmed8959@gmail.com",
                  },
                  { icon: <FaPhone />, link: "tel:01227955020" },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full text-white 
                              bg-gradient-to-tr from-purple-500 to-blue-500
                              hover:bg-violet-700
                              transition-all duration-500 shadow-lg text-xl
                              hover:shadow-[0_0_10px_#9333ea,0_0_20px_#9333ea] hover:scale-[1.1]"
                    style={{ transition: "all 0.4s ease-in-out" }}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
