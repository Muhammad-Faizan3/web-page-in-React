
const FeatureCard = ({ title, description }) => (
  <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
    <h3 className="font-bold mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      title: "🔥 Seamless Connections",
      description: "Stay in touch with friends, family, and like-minded people with just a tap."
    },
    {
      title: "📸 Share Your Story",
      description: "Upload photos, videos, and updates to let the world know what's happening in your life."
    },
    {
      title: "💬 Real-Time Chat",
      description: "Whether it's a DM or a group conversation, connect instantly."
    },
    {
      title: "🔒 Privacy First",
      description: "Your data, your control. We prioritize privacy with world-class security."
    },
    {
      title: "🌍 Discover & Explore",
      description: "Find trending content, join communities, and follow pages you love."
    },
    {
      title: "📈 Grow Your Business",
      description: "Market your brand, connect with customers, and build relationships."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold mb-3">
          Features That Keep You Hooked!
        </h2>
        <p className="text-gray-600 mb-12">
          Meet, Chat, Share – Anytime, Anywhere!
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;