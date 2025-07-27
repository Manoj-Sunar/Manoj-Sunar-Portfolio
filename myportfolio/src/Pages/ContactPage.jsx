import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Globe } from 'lucide-react';

const ContactPage = () => {
    return (
        <section className="px-4 py-30 bg-white dark:bg-black text-gray-900 dark:text-white">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="max-w-4xl mx-auto space-y-12"
            >
                {/* Header */}
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-2">📬 Contact Me</h2>
                    <p className="text-gray-600 dark:text-gray-300 text-lg">
                        I'd love to hear from you! Feel free to reach out for opportunities, collaborations, or questions.
                    </p>
                </div>

                {/* Contact Details */}
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
                    <div className="flex items-center gap-4">
                        <MapPin className="text-indigo-500" />
                        <span>
                            Kailali, Lamki Chuha -5, Tilakpur, Nepal <br />
                            <span className="text-sm text-gray-600 dark:text-gray-400">(Currently residing in Pokhara)</span>
                        </span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Mail className="text-indigo-500" />
                        <span>mutipletask@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Phone className="text-indigo-500" />
                        <span>+977-9804637336</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Github className="text-indigo-500" />
                        <a href="https://github.com/Manoj-Sunar" target="_blank" rel="noopener noreferrer" className="underline">
                            github.com/Manoj-Sunar
                        </a>
                    </div>
                    <div className="flex items-center gap-4">
                        <Globe className="text-indigo-500" />
                        <a href="https://chamlingcycle.com" target="_blank" rel="noopener noreferrer" className="underline">
                            chamlingcycle.com
                        </a>
                    </div>
                </div>


                {/* Form */}
                <form className="grid gap-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 focus:outline-none"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 focus:outline-none"
                            required
                        />
                    </div>
                    <input
                        type="text"
                        placeholder="Subject"
                        className="px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 focus:outline-none"
                    />
                    <textarea
                        placeholder="Your Message"
                        rows={5}
                        className="px-4 py-2 resize-none rounded-md bg-gray-100 dark:bg-gray-800 focus:outline-none"
                        required
                    ></textarea>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="bg-indigo-600  text-white px-6 py-2 rounded-md mt-2 w-full sm:w-fit hover:bg-indigo-700 transition"
                    >
                        Send Message
                    </motion.button>
                </form>

                {/* Availability */}
                <div className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
                    Available for freelance, full-time remote roles, and open-source collaborations.
                </div>
            </motion.div>
        </section>
    );
};

export default ContactPage;
