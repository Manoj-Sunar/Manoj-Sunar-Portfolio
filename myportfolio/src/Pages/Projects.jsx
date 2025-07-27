import React from 'react';
import { motion } from 'framer-motion';


const projects = [
    {
        title: 'Chamling Cycle',
        role: 'Frontend Developer',
        description: 'Bike rental & tour site built with Next.js and Tailwind CSS, live site with booking UI.',
        img: "/chamling/chamling.png",
        link: 'https://chamlingcycle.com',
    },
    {
        title: 'Anuj‑Dai‑Blog',
        role: 'Full Stack Developer',
        description: 'Blogging platform with filtering, React front end, Tailwind CSS, Node.js & MongoDB backend.',
        img: '/blog/anuj-dai-blog.png',
        link: 'https://anuj-dai-blog-frontend.onrender.com/',
    },
    {
        title: 'Business Accounting Software',
        role: 'Full Stack Developer',
        description: 'Income/expense tracker with dashboards, built with React, Recharts, Express & MongoDB.',
        img: '/lumino-finance/lumino-finance.png',
        link: 'https://github.com/Lumino-Technology/Business-Accounting-Software',
    },
    {
        title: 'Gecko Gears Ecommerce Platform Website',
        role: 'Frontend Developer',
        description: 'Income/expense tracker with dashboards, built with React, Recharts, Express & MongoDB.',
        img: '/lumino-finance/lumino-finance.png',
        link: 'https://github.com/Lumino-Technology/gecko_gears',
    },
    {
        title: 'Kinmel Dokan Ecommerce Platform Website',
        role: 'Frontend Developer',
        description: 'Income/expense tracker with dashboards, built with React, Recharts, Express & MongoDB.',
        img: '/lumino-finance/lumino-finance.png',
        link: 'https://github.com/Lumino-Technology/Kinmel_Dokan',
    },
    {
        title: 'My PortFolio',
        role: 'Full Stack Developer',
        description: 'Income/expense tracker with dashboards, built with React, Recharts, Express & MongoDB.',
        img: '/portfolio/portfolio.png',
        link: 'https://manoj-sunar-portfolio.onrender.com/',
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-30 px-4 bg-gray-50 dark:bg-black">
            <h2 className="text-3xl md:text-4xl text-center font-bold text-gray-900 dark:text-white mb-12">
                My Projects
            </h2>

            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-w-6xl mx-auto">
                {projects.map((proj, index) => (
                    <motion.div
                        key={proj.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.6 }}
                        className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden cursor-pointer hover:scale-105 transform transition"
                        onClick={() => window.open(proj.link, '_blank')}
                    >
                        <img src={proj.img} alt={proj.title} className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">{proj.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{proj.role}</p>
                            <p className="text-base text-gray-700 dark:text-gray-200">{proj.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
