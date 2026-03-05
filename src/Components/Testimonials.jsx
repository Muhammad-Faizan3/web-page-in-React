import React from 'react';
import avatar from '../assets/Avatar.png'
import avatar1 from '../assets/Avatar(1).png'
import avatar2 from '../assets/Avatar21.png'
import Customer from '../assets/Customer-11.png'
import Customer1 from '../assets/olena-sergienko-XttWKETqCCQ-unsplash1(1).png'
import avatar3 from '../assets/Avatar(2).png'


const TestimonialCard = ({ rating, text, name, country, avatar }) => (
  <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
    <div className="text-yellow-400 mb-3">{rating}</div>
    <p className="text-gray-600 text-sm mb-6">{text}</p>
    <div className="flex items-center gap-3">
      <img className="w-10 h-10 rounded-full" src={avatar} alt={name} />
      <div className="text-left">
        <p className="font-semibold">{name}</p>
        <span className="text-xs text-gray-500">{country}</span>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      rating: "★★★★★",
      text: "This platform changed the way I stay in touch with my friends and family. The interface is smooth and I love how easy it is to share my moments!",
      name: "Emily R",
      country: "USA",
      avatar: avatar
    },
    {
      rating: "★★★★★",
      text: "Finally, a social network that understands what I need! The privacy features are a game-changer.",
      name: "Amit K",
      country: "India",
      avatar: avatar1
    },
    {
      rating: "★★★★★",
      text: "I joined just to explore, but now I can't imagine my day without it. Everything feels personal and real.",
      name: "Sophie M",
      country: "UK",
      avatar: Customer
    },
    {
      rating: "★★★★★",
      text: "This platform changed the way I stay in touch with my friends and family. The interface is smooth and I love how easy it is to share my moments!",
      name: "Emily R",
      country: "USA",
      avatar: avatar2
    },
    {
      rating: "★★★★★",
      text: "Finally, a social network that understands what I need! The privacy features are a game-changer.",
      name: "Amit K",
      country: "India",
      avatar: Customer1
    },
    {
      rating: "★★★★★",
      text: "I joined just to explore, but now I can't imagine my day without it. Everything feels personal and real.",
      name: "Sophie M",
      country: "UK",
      avatar: avatar3
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold mb-12">
          What Our Users Say
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
        
        <br />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(3, 6).map((testimonial, index) => (
            <TestimonialCard key={index + 3} {...testimonial} />
          ))}
        </div>

        <button className="mt-12 text-[#ff5a52] font-semibold hover:underline">
          See More
        </button>
      </div>
    </section>
  );
};

export default Testimonials;