import React from 'react';
import Body1 from '../assets/Body.png'
import iphone from "../assets/iPhone14Pro.png";
const Footer = () => (
  <footer className="py-20 bg-[#ff5a52] text-white">
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
      <div>
        <h2 className="text-4xl font-extrabold mb-4">
          Join the Fun - Download<br />MyBindle Now!
        </h2>
        <p className="text-white/90 mb-6 max-w-md">
          Your Social Network, Your Way. Download MyBindle now and be part of a growing community.
        </p>

        <div className="flex gap-4">
          <button className="bg-white text-black px-6 py-3 rounded-xl hover:scale-105 transition">
            App Store
          </button>
          <button className="bg-white text-black px-6 py-3 rounded-xl hover:scale-105 transition">
            Google Play
          </button>
        </div>
      </div>

      <div className="relative flex justify-center items-end">
        <img src={Body1}
          className="w-64 hidden sm:block translate-x-10 translate-y-10 rounded-2xl shadow-xl"
          alt="App mockup" />
        
          <img src={iphone} className="w-72 rounded-3xl shadow-2xl" alt="iphone" />
      </div>
    </div>
  </footer>
);

export default Footer;