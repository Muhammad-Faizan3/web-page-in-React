import React from 'react';
import Header from '../Components/Header';
import Features from '../Components/Features';
import Connection from '../Components/Connection';
import InstallSteps from '../Components/InstallSteps';
import Donation from '../Components/Donation';
import Testimonials from '../Components/Testimonials';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <div className="bg-white text-gray-800">
      <Header />
      <main>
        <Features />
        <Connection />
        <InstallSteps />
        <Donation />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Home;