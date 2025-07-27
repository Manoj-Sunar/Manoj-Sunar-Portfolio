import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="py-30 px-4 w-full mx-auto flex flex-col dark:bg-black lg:flex-row items-center gap-12"
    >
      {/* Layout Wrapper */}
      <motion.div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-64 h-64 rounded-full overflow-hidden shadow-xl border-4 border-indigo-500"
        >
          <img
            src="/manoj6.JPG"
            alt="Manoj Kumar Sunar"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Right: Content */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            About Me
          </h1>

          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Hello! I'm <span className="font-semibold text-black dark:text-white">Manoj Kumar Sunar</span>, a passionate Full Stack Developer with a Bachelor's degree in Computer Science and Information Technology (BSc CSIT).
          </p>

          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-4">
            My goal is to build scalable digital solutions that help people and businesses. I enjoy collaborating with teams to bring ideas to life using modern technologies and clean UI/UX design principles.
          </p>

          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
            <li>
              <strong>Full Stack Developer</strong> for{' '}
              <a href="https://github.com/Manoj-Sunar/Anuj-Dai-Blog" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 underline hover:opacity-80">
                Anuj-Dai-Blog
              </a>{' '}
              and{' '}
              <a href="https://github.com/Lumino-Technology/Business-Accounting-Software" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 underline hover:opacity-80">
                Business-Accounting-Software
              </a>.
            </li>
            <li>
              <strong>Frontend Developer</strong> for{' '}
              <a href="https://github.com/ManojSunar/gecko_gears" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 underline hover:opacity-80">
                gecko_gears
              </a>
              ,{' '}
              <a href="https://github.com/ManojSunar/Kinmel_Dokan" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 underline hover:opacity-80">
                Kinmel_Dokan
              </a>
              , and{' '}
              <a href="https://chamlingcycle.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 underline hover:opacity-80">
                chamlingcycle.com
              </a>.
            </li>
          </ul>

          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-4">
            <strong>Tech Stack:</strong> React.js, Next.js, Tailwind CSS, Node.js, MongoDB, Express.js.
          </p>

          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-4">
            <strong>Traits:</strong> Detail-oriented, team player, fast learner, and passionate about clean code.
          </p>

          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6">
            <strong>Hobbies:</strong> Exploring new technologies, writing technical blogs, and enjoying outdoor adventures.
          </p>

          {/* New Section: Address and Education */}
          <div className="text-base md:text-lg text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">📍 Permanent Address</h2>
              <p>Kailali, Lamki Chuha - 5, Tilakpur, Nepal</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">🎓 Education</h2>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>SLC:</strong> Global Academy, Lamki</li>
                <li><strong>Nursery to Class 8:</strong> Shree Jana Prabhat Lower Secondary School</li>
                <li><strong>+2 Science:</strong> Shree Jana Jagriti Higher Secondary School</li>
                <li><strong>Bachelor's (BSc CSIT):</strong> Mount Annapurna Campus, Pokhara</li>
              </ul>
            </div>
          </div>

        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
