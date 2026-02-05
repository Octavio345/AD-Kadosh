// src/pages/HomePage.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';
import Hero from '../components/Sections/Hero/Hero';
import About from '../components/Sections/About/About';
import Ministries from '../components/Sections/Ministries/Ministries';
import Contact from '../components/Sections/Contact/Contact';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Igreja Kadosh | Santo ao Senhor</title>
        <meta name="description" content="Igreja Kadosh - Comunidade cristã de fé, amor e transformação. Cultos inspiradores, família acolhedora." />
        <meta name="keywords" content="igreja, cristã, fé, esperança, culto, Kadosh, comunidade, espiritualidade" />
        <link rel="canonical" href="https://igrejakadosh.com" />
      </Helmet>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-white"
      >
        <Header />
        <main>
          <Hero />
          <About />
          <Ministries />
          <Contact />
          <div className="h-20"></div>
        </main>
        <Footer />
      </motion.div>
    </>
  );
};

export default HomePage;