import React from 'react';
import Body from '../assets/Body.png'
import Iphone from '../assets/iphone14Pro.png'


const Donation = () => (
  <section className="max-w-7xl mx-auto px-6 py-20">
    <div className="relative bg-[#ff5a52] rounded-3xl overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[]">
      </div>

      <div className="relative grid lg:grid-cols-2 gap-10 items-center px-10 py-16 text-white">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Be the Reason<br />
            Someone Smiles Today!
          </h2>

          <p className="text-white/90 max-w-lg mb-8">
            Your generosity can change lives. Every donation brings hope,
            support, and a brighter future. Give today and make a difference!
          </p>

          <button className="bg-white text-[#ff5a52] font-semibold px-8 py-3 rounded-xl shadow hover:scale-105 transition">
            Donate Now
          </button>
        </div>

        <div className="relative flex justify-center items-end">
          <img src={Body}
            className="w-64 md:w-72 rounded-2xl shadow-xl translate-x-10 translate-y-10 z-10 hidden sm:block"
            alt="App mockup" />
          <img src={Iphone} className="w-72 md:w-80 rounded-3xl shadow-2xl"
            alt="iPhone mockup" />
        </div>
      </div>
    </div>
  </section>
);

export default Donation;