import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SlShareAlt } from "react-icons/sl";

const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const titelLineRef = useRef(null);
  const triggerRef = useRef(null);
  const horizontalRef = useRef(null);

  const projectImages = [
    {
      id: 1,
      imageSrc: "../../public/Images/Screenshot 2025-09-15 201701.png",
      title: "Basket E-commerce (Contributor)",
      demo: "https://github.com/ecommerce-dev-team/Ecommerce-website",
      live: "https://exquisite-pie-e9b866.netlify.app/",
    },
    {
      id: 2,
      imageSrc: "../../public/Images/Screenshot 2025-09-15 202842.png",
      title: "FreshCart E-commerce",
      demo: "https://github.com/abdoo-ahmed/E-commerc-App",
      live: "https://bright-liger-da2b44.netlify.app",
    },
    {
      id: 3,
      imageSrc: "../../public/Images/Screenshot 2025-09-15 203133.png",
      title: "Admin Dashboard",
      demo: "https://github.com/abdoo-ahmed/DashBoard",
      live: "https://chic-ganache-dec62c.netlify.app",
    },
    {
      id: 4,
      imageSrc: "../../public/Images/Screenshot 2025-09-15 203452.png",
      title: "Dunkin Donuts Clone",
      demo: "https://github.com/abdoo-ahmed/Donuts_WebMaster",
      live: "https://abdoo-ahmed.github.io/Donuts_WebMaster",
    },
    {
      id: 5,
      imageSrc: "../../public/Images/Screenshot 2025-09-15 203954.png",
      title: "Weather App",
      demo: "https://github.com/abdoo-ahmed/weather",
      live: "https://abdoo-ahmed.github.io/weather",
    },
    {
      id: 6,
      imageSrc: "../../public/Images/Screenshot 2025-09-15 204340.png",
      title: "Products Management System",
      demo: "https://github.com/abdoo-ahmed/Products-management-system",
      live: "https://abdoo-ahmed.github.io/Products-management-system",
    },
    {
      id: 7,
      imageSrc: "../../public/Images/Screenshot 2025-09-15 204629.png",
      title: "Movies App",
      demo: "https://github.com/abdoo-ahmed/Movies",
      live: "https://abdoo-ahmed.github.io/Movies",
    },
    {
      id: 8,
      imageSrc: "../../public/Images/Screenshot 2025-09-15 204912.png",
      title: "Solar Company Landing-Page",
      demo: "https://github.com/abdoo-ahmed/Solar-Company-Landing-Page",
      live: "https://abdoo-ahmed.github.io/Solar-Company-Landing-Page",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },

      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      titelLineRef.current,
      { width: 0, opacity: 0 },
      {
        width: "100%",
        opacity: 1,
        duration: 1.5,
        ease: "power3.inOut",
        delay: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      triggerRef.current,
      { y: 100, rotationX: 20, opacity: 0 },
      {
        y: 0,
        rotationX: 0,
        delay: 0.2,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      sectionRef.current,
      {
        backgroundPosition: "50% 0%",
      },
      {
        backgroundPosition: "50% 100%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    const horizontalScorll = gsap.to(".panel", {
      xPercent: -100 * (projectImages.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: () => `+=${horizontalRef.current.offsetWidth}`,
        scrub: 1,
        pin: true,
        snap: {
          snapTo: 1 / (projectImages.length - 1),
          duration: { min: 0.2, max: 0.3 },
          delay: 0.1,
        },
        invalidateOnRefresh: true,
      },
    });

    const panels = gsap.utils.toArray(".panel");
    panels.forEach((panel) => {
      const image = panel.querySelector(".project-image");
      const imageTitle = panel.querySelector(".project-title");
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          containerAnimation: horizontalScorll,
          start: "left right",
          end: "right left",
          scrub: true,
        },
      });
      tl.fromTo(
        image,
        { scale: 0, rotate: -20 },
        { scale: 1, rotate: 1, duration: 0.5 }
      );
      if (imageTitle) {
        tl.fromTo(imageTitle, { y: 30 }, { y: -100, duration: 0.3 }, 0.2);
      }
    });
  }, [projectImages.length]);

  return (
    <section
      ref={sectionRef}
      id="Projects"
      className=" relative pt-20 bg-[#f6f6f6] overflow-hidden"
    >
      <div className="container mx-auto px-4 mb-16 relative z-10">
        <h2
          ref={titleRef}
          className=" text-4xl md:text-5xl lg:text-6xl font-bold text-black text-center mb-4 opacity-0"
        >
          Featured Projects
        </h2>
        <div
          ref={titelLineRef}
          className="w-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto opacity-0"
        ></div>
      </div>

      <div ref={triggerRef} className="overflow-hidden opacity-0">
        <div
          ref={horizontalRef}
          className="horizontal-section flex"
          style={{ width: `${projectImages.length * 80}%` }}
        >
          {projectImages.map((project) => (
            <div
              key={project.id}
              className="panel relative flex items-center justify-center w-full"
            >
              <div className="relative w-full h-full flex flex-col items-center justify-center sm:p-8 md:p-12">
                <img
                  onClick={() => {
                    window.open(
                      `${project.live}`,
                      "_blank",
                      "noopener,noreferrer"
                    );
                  }}
                  className="project-image max-w-full max-h-full rounded-2xl object-cover"
                  src={project.imageSrc}
                  alt={project.title}
                />

                <a
                  target="_blank"
                  href={project.demo}
                  className="project-title flex items-center gap-3 md:text-3xl text-sm md:font-bold text-black mt-6 z-50 text-nowrap hover:text-gray-400 transition-colors duration-300 cursor-pointer"
                >
                  {project.title} <SlShareAlt />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
