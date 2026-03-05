import React from 'react';

const InstallStep = ({ step, description }) => (
  <div className="bg-white p-6 rounded-2xl shadow">
    <div className="text-4xl mb-4">📱</div>
    <h3 className="font-semibold">{step}</h3>
    <p className="text-sm text-gray-600 mt-2">{description}</p>
  </div>
);

const InstallSteps = () => {
  const steps = [
    {
      step: "Download",
      description: "Open Play Store or App Store"
    },
    {
      step: "Install App",
      description: "The app installs automatically"
    },
    {
      step: "Ready to Use",
      description: "Sign up or log in to start exploring"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold mb-3">
          How to Install Our App
        </h2>
        <p className="text-gray-600 mb-12">
          Getting started is quick and easy!
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <InstallStep 
              key={index}
              step={step.step}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstallSteps;