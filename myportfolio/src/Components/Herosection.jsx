// src/components/Herosection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const Herosection = () => {


    
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-white dark:bg-black"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white"
      >
        Hi, I'm <span className="text-blue-600 dark:text-blue-400">Manoj Sunar</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-4 text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-2xl"
      >
        Full Stack Developer from Nepal | Skilled in React, Node.js, MongoDB,
        and Tailwind CSS. I love building fast, responsive, and beautiful web apps.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-8 flex gap-4 flex-wrap justify-center"
      >
        <a
          href="https://github.com/Manoj-Sunar"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-2 bg-black text-white rounded-full hover:opacity-80 transition"
        >
          <Github size={18} />
          GitHub
        </a>
        <a
          href="/resume/Manojsunar_resume.html"
          download
          className="inline-block px-6 py-2 border dark:text-gray-900 border-gray-800 dark:border-white rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white dark:bg-white transition"
        >
          Download CV
        </a>
      </motion.div>
    </section>
  );
};

export default Herosection;
