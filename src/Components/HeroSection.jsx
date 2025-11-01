import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import Spline from "@splinetool/react-spline";

const HeroSection = () => {
  return (
    <>
      <section
        id="Home"
        className="h-screen bg-gradient-to-b from-violet-900 to-black flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-10 relative overflow-hidden"
      >
        <div className="z-40 xl:mb-0 mb-[20%]">
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.5,
              delay: 1.3,
              type: "spring",
              stiffness: 40,
              damping: 25,
            }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold z-10 mb-6"
          >
            Building fast <br /> reliable results
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.5,
              delay: 1.8,
              type: "spring",
              stiffness: 40,
              damping: 25,
            }}
            className="text-xl text-purple-200 md:text-1xl lg:text-2xl max-w-2xl"
          >
            A passionate Front-End Developer specialized in building interactive
            and responsive user interfaces using React.
          </motion.p>
        </div>



        <Spline
          className="absolute xl:right-[-28%] right-0 top-[-20%] lg:top-0"
          scene="https://prod.spline.design/ZH0N0X5EF3nNQdC1/scene.splinecode"
        />
      </section>
    </>
  );
};

export default HeroSection;
