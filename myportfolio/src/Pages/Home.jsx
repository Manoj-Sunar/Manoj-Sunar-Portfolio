import React from 'react';
import Herosection from '../Components/Herosection';
import About from './About';

const Home = () => {
  return (
    <div className="w-full  bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Hero Section */}
      <section className="w-full">
        <Herosection />
      </section>

      {/* About Section */}
      <section className="w-full  dark:border-gray-700">
        <About />
      </section>
    </div>
  );
};

export default Home;
