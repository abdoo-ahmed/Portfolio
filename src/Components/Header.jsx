import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const [ContactFromOpen, setContactFromOpen] = useState(false);
  const openContactFrom = () => setContactFromOpen(true);
  const closeContactFrom = () => setContactFromOpen(false);

  return (
    <header className="absolute w-full z-50 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1.2,
            delay: 0.3,
            type: "spring",
            stiffness: 100,
            damping: 25,
          }}
          className="flex items-center"
        >
          <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-gray-500 to-gray-100 flex items-center justify-center text-purple-600 font-bold text-xl mr-3">
            A
          </div>
          <span className="font-bold text-xl bg-gradient-to-r from-gray-300 to-gray-100 text-transparent bg-clip-text">
            Abdelrahman Ahmed
          </span>
        </motion.div>

        <nav className="lg:flex hidden space-x-8">
          {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map(
            (item, index) => (
              <motion.a
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.7 + index * 0.2,
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                }}
                key={index}
                className="relative text-gray-800 dark:text-gray-200 hover:violet-600 dark:hover:text-violet-400 font-medium transition-colors duration-300 group"
                href={`#${item}`}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transiton-all duration-300"></span>
              </motion.a>
            )
          )}
        </nav>



        <div className="md:flex hidden items-center space-x-4">
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.3,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
            className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
            target="_blank"
            href="https://github.com/abdoo-ahmed"
          >
            <FaGithub className="w-5 h-5" />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.3,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
            className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
            target="_blank"
            href="https://www.facebook.com/abd.elrahman.ahmed.271204"
          >
            <FaFacebook className="w-5 h-5" />
          </motion.a>

          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.3,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
            className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
            target="_blank"
            href="https://wa.me/201227955020"
          >
            <FaWhatsapp className="w-6 h-6" />
          </motion.a>

          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.3,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
            className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
            target="_blank"
            href="https://www.linkedin.com/in/abdo-ahmed-96532a2ab/"
          >
            <FaLinkedin className="w-5 h-5" />
          </motion.a>

          <motion.button
            onClick={openContactFrom}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 1.6,
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
            className="ml-4 px-4 py-2 rounded-xl bg-gradient-to-r from-gray-400 to-gray-100 text-violet-700 font-bold hover:from-violet-700 hover:to-purple-700 hover:text-white transition-colors duration-500"
          >
            Hire Me
          </motion.button>
        </div>



        <div className="md:hidden flex items-center">
          <motion.button
            whileTap={{ scale: 0.7 }}
            onClick={toggleMenu}
            className="text-gray-300 dark:text-gray-200"
          >
            {isMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </motion.button>
        </div>
      </div>


      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isMenuOpen ? "auto" : 0,
          opacity: isMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="md-hidden overflow-hidden bg-white dark:bg-gray-900 shadow-lg px-4 py-5 space-y-5"
      >
        <nav className="flex flex-col space-y-3">
          {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map(
            (item, index) => (
              <a
                onClick={toggleMenu}
                key={index}
                className="text-gray-300 font-medium py-2"
                href={`#${item}`}
              >
                {item}
              </a>
            )
          )}
        </nav>

        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex space-x-5">
            <a target="_blank" href="https://github.com/abdoo-ahmed">
              <FaGithub className="w-5 h-5 text-gray-300" />
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/abd.elrahman.ahmed.271204"
            >
              <FaFacebook className="w-5 h-5 text-gray-300" />
            </a>
            <a target="_blank" href="https://wa.me/201227955020">
              <FaWhatsapp className="w-5 h-5 text-gray-300" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/abdo-ahmed-96532a2ab/"
            >
              <FaLinkedin className="w-5 h-5 text-gray-300" />
            </a>
          </div>

          <button
            onClick={() => {
              toggleMenu();
              window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth",
              });
              openContactFrom();
            }}
            className=" mt-4 block w-full px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-violet-400 font-bold"
          >
            Contact Me
          </button>
        </div>
      </motion.div>



      <AnimatePresence>
        {ContactFromOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-black/50 background-blur-sm z-50 flex items-center justify-center p-4 "
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 30 }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 200,
                damping: 30,
              }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-md p-6"
            >
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-gray-300">
                  Get in Touch!
                </h1>
                <button>
                  <FiX
                    onClick={closeContactFrom}
                    className="w-5 h-5 text-gray-300 font-extrabold"
                  />
                </button>
              </div>


              <form
                className="space-y-4"
                action="https://formspree.io/f/mblzrdew"
                method="POST"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm text-gray-300 font-medium mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 bg-gray-700 focus:border-violet-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-gray-300 font-medium mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 bg-gray-700 focus:border-violet-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-gray-300 font-medium mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    rows="4"
                    id="message"
                    name="message"
                    placeholder="how can we help you"
                    required
                    className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 bg-gray-700 focus:border-violet-500"
                  />
                </div>

                <motion.button
                  whileTap={{ scale: 0.97 }}
                  whileHover={{ scale: 1.03 }}
                  type="submit"
                  className="w-full px-4 py-2 shadow-md hover:shadow-violet-600/50 rounded-lg bg-gradient-to-r from-violet-600 to-violet-400 text-white font-bold hover:from-violet-700 hover:to-purple-700 transition-colors duration-300"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
