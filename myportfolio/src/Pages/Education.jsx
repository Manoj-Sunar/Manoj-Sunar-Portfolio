import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section className="bg-white dark:bg-gray-900 px-4 py-30">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-5xl mx-auto space-y-12"
      >
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Education & Skills
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
            A blend of academic learning, self-motivation, and hands-on project experience.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400">
            🎓 Academic Journey
          </h2>
          <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 space-y-2">
            <li><strong>BSc CSIT</strong> – Mount Annapurna Campus, Pokhara (Tribhuvan University) – <em>Completed 2025</em></li>
            <li><strong>+2 Science</strong> – Shree Jana Jagriti Higher Secondary School</li>
            <li><strong>SLC</strong> – Global Academy, Lamki</li>
            <li><strong>Nursery to Class 8</strong> – Shree Jana Prabhat Lower Secondary School</li>
          </ul>
        </div>

        {/* Skills */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400">
            🛠️ Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800 dark:text-gray-300">
            <div>
              <h3 className="font-semibold mb-2">Frontend</h3>
              <ul className="list-disc list-inside">
                <li>React.js, Next.js, JavaScript (ES6+)</li>
                <li>Tailwind CSS, Bootstrap, HTML5, CSS3</li>
                <li>Responsive Design, REST API Integration</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Backend & Tools</h3>
              <ul className="list-disc list-inside">
                <li>Node.js, Express.js, MongoDB (Mongoose)</li>
                <li>JWT Authentication, RESTful API</li>
                <li>Git, GitHub, Postman, VS Code</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400">
            🚀 Projects & Experience
          </h2>

          <div className="space-y-4 text-gray-800 dark:text-gray-300">
            <div>
              <h3 className="text-xl font-bold">Anuj-Dai-Blog <span className="text-sm font-normal text-indigo-500">(Full Stack)</span></h3>
              <p>
                A dynamic blogging platform with filtering by tags, titles, and authors. Built with React, Tailwind CSS, Node.js, and MongoDB.
                Includes user authentication and admin features.
                <a href="https://github.com/Manoj-Sunar/Anuj-Dai-Blog" target="_blank" rel="noopener noreferrer" className="underline text-indigo-500 ml-2">GitHub</a>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Business Accounting Software <span className="text-sm font-normal text-indigo-500">(Full Stack)</span></h3>
              <p>
                Developed a professional accounting system for businesses with income/expense tracking, report generation, and admin dashboards. Uses React, Recharts, Node.js, and MongoDB.
                <a href="https://github.com/Lumino-Technology/Business-Accounting-Software" target="_blank" rel="noopener noreferrer" className="underline text-indigo-500 ml-2">GitHub</a>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Gecko Gears <span className="text-sm font-normal text-indigo-500">(Frontend)</span></h3>
              <p>
                An eCommerce platform for auto parts. Built UI for product listing, filtering, and cart system using React and ensured mobile responsiveness.
                <a href="https://github.com/Lumino-Technology/gecko_gears" target="_blank" rel="noopener noreferrer" className="underline text-indigo-500 ml-2">GitHub</a>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Kinmel Dokan <span className="text-sm font-normal text-indigo-500">(Frontend)</span></h3>
              <p>
                Online shopping platform built with React and Tailwind CSS, featuring search, product filtering, and smooth shopping experience.
                <a href="https://github.com/Lumino-Technology/Kinmel_Dokan" target="_blank" rel="noopener noreferrer" className="underline text-indigo-500 ml-2">GitHub</a>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Chamling Cycle <span className="text-sm font-normal text-indigo-500">(Frontend)</span></h3>
              <p>
                A modern business website for a local cycle shop. Built using Next.js and Tailwind CSS, focusing on design alignment with client branding.
                <a href="https://chamlingcycle.com" target="_blank" rel="noopener noreferrer" className="underline text-indigo-500 ml-2">Live Site</a>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
