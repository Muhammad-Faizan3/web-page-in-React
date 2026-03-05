import Group from '../assets/Group12.png'
import Group1 from '../assets/Group1.png'

const Header = () => (
  <header className="bg-[#ff5a52] text-white min-h-screen w-full flex flex-col justify-center">
    
    <div className="flex items-center pt-10 justify-center">
      <img src={Group} alt="MyBindle Logo" />
    </div>

    <div className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-2 gap-12 items-center flex-1">
      <div>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          Stay Connected<br />
          Stay Social<br />
          Stay You!
        </h1>

        <p className="text-white/90 max-w-lg mb-8">
          A place where friendships grow, communities thrive, and moments turn into unforgettable experiences.
          Whether you're looking to reconnect with old friends or share what matters most to you —
          Mybindle is your home on the internet.
        </p>

        <button className="bg-white text-[#ff5a52] font-semibold px-6 py-3 rounded-full shadow hover:scale-105 transition">
          Get Started
        </button>
      </div>

      <div className="relative flex justify-center">
        <img 
          src={Group1} 
          className="max-w-sm w-full rounded-3xl shadow-2xl" 
          alt="App Preview" 
        />
      </div>
    </div>
  </header>
);

export default Header;