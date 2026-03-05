import React from 'react';
import Group3 from '../assets/Group3.png'


const ConnectionListItem = ({ icon, title, description }) => (
  <li className="bg-gray-100 p-4 rounded-xl">
    {icon} <strong>{title}</strong><br />
    <span className="text-sm text-gray-600">{description}</span>
  </li>
);

const Connection = () => (
  <section className="py-20">
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
      <div className="flex justify-center">
        <img src={Group3} alt="Connection" />
      </div>

      <div>
        <h2 className="text-3xl font-extrabold mb-4">
          Where Every Click Sparks a Connection!
        </h2>
        <p className="text-gray-600 mb-6">
          A small act of kindness today can create a lifetime of impact for someone in need.
        </p>

        <ul className="space-y-4">
          <ConnectionListItem 
            icon="🎬"
            title="Short Videos & Reels"
            description="Bite-sized content that keeps everyone entertained."
          />
          <ConnectionListItem 
            icon="🔔"
            title="Smart Notifications"
            description="Stay updated without the noise."
          />
          <ConnectionListItem 
            icon="👥"
            title="Interest-Based Communities"
            description="Join discussions that match your passion."
          />
        </ul>
      </div>
    </div>
  </section>
);

export default Connection;