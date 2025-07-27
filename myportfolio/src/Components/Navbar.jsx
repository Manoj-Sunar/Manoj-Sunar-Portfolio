import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Theme from './Theme';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Education', href: '/education' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 bg-white dark:bg-gray-800 shadow-md"
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="w-[40px] h-[40px]">
          <Link to="/">
            <img src="/manoj.png" alt="Logo" className="w-full h-full object-cover" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.href}
                className="text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Theme + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Theme />
          <button
            className="md:hidden text-gray-700 dark:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col md:hidden px-4 pb-4 gap-3 bg-white dark:bg-gray-800"
          >
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
