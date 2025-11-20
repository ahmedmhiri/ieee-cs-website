import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const [particles] = useState(() =>
    Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 10,
    }))
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.observe-animate').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30 animate-float"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOCIgc3Ryb2tlPSJyZ2JhKDU5LCAxMzAsIDI0NiwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="observe-animate opacity-0">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            IEEE Computer Society
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              IIT Student Branch Chapter 
            </span>
          </h1>
          {/* <p className="text-xl md:text-2xl text-blue-200 mb-8 font-light">
            Student Branch
          </p> */}
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Empowering the next generation of computer scientists
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
            >
              Discover More
            </button>
            <button
              onClick={() => document.querySelector('#events')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              View Events
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
