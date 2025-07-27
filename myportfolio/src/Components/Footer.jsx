import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8"
      >
        {/* Left: Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Manoj Kumar Sunar</h3>
          <p className="text-sm mb-1 flex items-center gap-2">
            <MapPin size={16} className="text-indigo-500" />
            Kailali, Tilakpur (Currently in Pokhara)
          </p>
          <p className="text-sm mb-1 flex items-center gap-2">
            <Mail size={16} className="text-indigo-500" />
            mutipletask@gmail.com
          </p>
          <p className="text-sm flex items-center gap-2">
            <Phone size={16} className="text-indigo-500" />
            +977-9804637336
          </p>
        </div>

        {/* Right: Links */}
        <div className="space-y-2">
          <p className="text-sm flex items-center gap-2">
            <Github size={16} className="text-indigo-500" />
            <a
              href="https://github.com/Manoj-Sunar"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-indigo-600"
            >
              github.com/Manoj-Sunar
            </a>
          </p>
          <p className="text-sm flex items-center gap-2">
            <Globe size={16} className="text-indigo-500" />
            <a
              href="https://chamlingcycle.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-indigo-600"
            >
              chamlingcycle.com
            </a>
          </p>
          <p className="text-sm">
            Available for freelance, remote, and open-source projects.
          </p>
        </div>
      </motion.div>

      {/* Bottom: Copyright */}
      <div className="text-center text-xs text-gray-500 mt-8 border-t border-gray-300 dark:border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Manoj Kumar Sunar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
