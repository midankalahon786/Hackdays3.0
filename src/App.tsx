//TO ADD ANIMATIONS
import React, { useEffect, useRef } from "react";
import {
  Trophy,
  Code,
  Gamepad2,
  Palette,
  Bug,
  Keyboard,
  ChevronDown,
  Zap,
  ExternalLink,
  ShoppingCart,
} from "lucide-react";

function EventCard({
  title,
  icon: Icon,
  prizePool,
  description,
  date,
  formLink,
}: {
  title: string;
  icon: React.ElementType;
  prizePool: string;
  description: string;
  date: string;
  formLink: string;
}) {
  return (
    <div className="group relative bg-gray-900 p-6 rounded-xl border border-gray-800 shadow-xl transform transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500">
      <div className="absolute -top-4 left-4 bg-indigo-600 p-3 rounded-lg text-white shadow-lg shadow-indigo-500/50 ">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold mt-4 mb-2 text-white">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex justify-between items-center mb-4">
        <span className="text-indigo-400 font-semibold">{prizePool}</span>
        <span className="text-sm text-gray-500">{date}</span>
      </div>
      <a
        href={formLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full inline-flex items-center cursor-pointer justify-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-300 group-hover:shadow-lg group-hover:shadow-indigo-500/30"
      >
        Register Now <ExternalLink size={16} />
      </a>
      <div className="absolute inset-0 bg-indigo-600 rounded-xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
    </div>
  );
}

function SponsorLogo({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="bg-gray-900 p-4 rounded-lg border border-gray-800 hover:border-indigo-500 transition-all duration-300">
      <img
        src={src}
        alt={alt}
        className="h-12 object-contain brightness-200 hover:brightness-100 transition-all duration-300"
      />
    </div>
  );
}

function SponsorsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth === scrollWidth) {
          scrollRef.current.scrollLeft = 0;
        } else {
          scrollRef.current.scrollLeft += 1;
        }
      }
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden" ref={scrollRef}>
      {/* //TO ADD SPONSORSHIP LOGOS */}
      <div className="flex gap-8 animate-scroll">
        <SponsorLogo
          src="https://imgs.search.brave.com/9ANFYq5zEx-sqRamUHvEAvvdPef24E5BSGOrATwPaZE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9hL2EyL0xv/Z29fb2ZfT2lsX0lu/ZGlhX0xpbWl0ZWQu/cG5nLzIyMHB4LUxv/Z29fb2ZfT2lsX0lu/ZGlhX0xpbWl0ZWQu/cG5n"
          alt="Oil India"
        />
     
        <SponsorLogo
          src="https://imgs.search.brave.com/H0vfRCy6wDTBJd7MzSUvTGNnW2PnPOjrtcsdzV5i8Fo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJzLzgwMTM4/L3NjcmVlbnNob3Rz/LzE1NzUzMzgvbWVk/aWEvNjhmNTRkYTg1/NDQwMDJiMDdlY2Q1/NGMwMzc0ODA2MTAu/anBnP3Jlc2l6ZT00/MDB4MzAwJnZlcnRp/Y2FsPWNlbnRlcg"
          alt="Royal Enfield"
        />
       
        {/* Duplicate logos for seamless scrolling */}
        <SponsorLogo
          src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Oil_India_Limited_Logo.png"
          alt="Oil India"
        />
        <SponsorLogo
          src="https://upload.wikimedia.org/wikipedia/commons/8/80/Indian_Oil_Logo.svg"
          alt="IOCL"
        />
       
        <SponsorLogo
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Royal_Enfield_logo.svg/2560px-Royal_Enfield_logo.svg.png"
          alt="Royal Enfield"
        />
       
      </div>
    </div>
  );
}

function MerchandiseCard() {
  return (
    <div className="bg-black-900 rounded-xl overflow-hidden  border-gray-800 hover:border-indigo-500 transition-all duration-300 group">
      <div className="relative">
        <div className="grid grid-cols-2 gap-4 p-4">
          <img
            src="./front .png"
            alt="T-shirt Front"
            className="rounded-lg w-full h-50 object-cover transform transition-transform duration-300 group-hover:scale-105"
          />
          <img
            src="./back.png"
            alt="T-shirt Back"
            className="rounded-lg w-full h-50 object-cover transform transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2">
            TechFest 2024 Official T-Shirt
          </h3>
          <p className="text-gray-400 mb-4">
            Limited edition event t-shirt with custom design
          </p>
          <div className="flex justify-between items-center mb-4">
            <span className="text-2xl font-bold text-indigo-400">₹349</span>
            <div className="flex gap-2">
              <select className="bg-gray-800 text-white px-3 py-2 rounded-lg border border-gray-700">
                <option>Size S</option>
                <option>Size M</option>
                <option>Size L</option>
                <option>Size XL</option>
                <option>Size XXL</option>
              </select>
            </div>
          </div>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSf_9FwiB3h9ZNhEpcA64h1SUgcCPK9Ze9zie6qn5ndYtkojGw/viewform?usp=header">
            <button className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-indigo-500/30">
              <ShoppingCart size={20} />
              Buy Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

function App() {
  const eventsSectionRef = useRef<HTMLDivElement>(null);

  const handleScrollToEvents = () => {
    eventsSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const events = [
    {
      title: "Hackathon",
      icon: Code,
      prizePool: "₹20,000",
      description: "48-hour coding challenge to build innovative solutions",
      date: "Day 1-2",
      formLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSdGrUOiNS4T1buIkT0rKb7-9LF1AnuIhfpAyo9OQZOHMw_Bbw/viewform?usp=dialog",
    },
    {
      title: "Esports Championship",
      icon: Gamepad2,
      prizePool: "₹20,000",
      description: "Valorant, BGMI, Forza Horizon, FIFA & Tekken tournaments",
      date: "Day 1-3",
      formLink: "https://google.com",
    },
    {
      title: "Kalakriti",
      icon: Palette,
      prizePool: "₹20,000",
      description: "Digital art and graphic design competition",
      date: "Day 2",
      formLink: "https://forms.gle/your-kalakriti-form",
    },
    {
      title: "Bug Bounty",
      icon: Bug,
      prizePool: "₹20,000",
      description: "Find and report security vulnerabilities",
      date: "Day 2",
      formLink: "https://forms.gle/your-bugbounty-form",
    },
    {
      title: "Speed Typing",
      icon: Keyboard,
      prizePool: "₹20,000",
      description: "Test your typing speed and accuracy",
      date: "Day 3",
      formLink: "https://forms.gle/your-typing-form",
    },
    {
      title: "Chess Tournament",
      icon: Trophy,
      prizePool: "₹20,000",
      description: "Strategic battle of minds",
      date: "Day 1-2",
      formLink: "https://facebook.com",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
        <div className="relative max-w-4xl mx-auto z-10">
          <h1 className="text-7xl font-bold mb-6 animate-title-glow">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              HackDays 3.0
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 animate-fade-in-delay">
            Presented by Department of IT, Gauhati University
          </p>
          <div className="flex justify-center gap-4">
            <button
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/50 animate-pulse-slow flex items-center gap-2"
              onClick={handleScrollToEvents}
            >
              Explore Events <Zap size={20} className="animate-bounce" />
            </button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gray-500" />
        </div>
      </header>

      {/* Events Section */}
      <section ref={eventsSectionRef} className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 animate-text-glow">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
              Events
            </span>
            {/* add google form */}
          </h2>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSf_9FwiB3h9ZNhEpcA64h1SUgcCPK9Ze9zie6qn5ndYtkojGw/viewform?usp=header">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
              {events.map((event, index) => (
                <EventCard key={index} {...event} />
              ))}
            </div>
          </a>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-20 px-4 relative bg-gray-900">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 animate-text-glow">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
              Our Sponsors
            </span>
          </h2>
          <SponsorsCarousel />
        </div>
      </section>

      {/* Merchandise Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 animate-text-glow">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
              Official Merchandise
            </span>
          </h2>
          <div className="max-w-2xl mx-auto">
            <MerchandiseCard />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
