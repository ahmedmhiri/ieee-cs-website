import { useEffect, useRef, useState } from 'react';
import { Users, Award, Calendar, TrendingUp } from 'lucide-react';
import { stats } from '../data/report';

export default function About() {
  const [counts, setCounts] = useState({ members: 0, events: 0, workshops: 0, years: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const targetCounts = {
    members: stats.members,
    events: stats.activities,
    workshops: stats.attendances,
    years: stats.years,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let step = 0;
    const interval = setInterval(() => {
      step++;
      const progress = step / steps;

      setCounts({
        members: Math.floor(targetCounts.members * progress),
        events: Math.floor(targetCounts.events * progress),
        workshops: Math.floor(targetCounts.workshops * progress),
        years: Math.floor(targetCounts.years * progress),
      });

      if (step >= steps) {
        clearInterval(interval);
        setCounts(targetCounts);
      }
    }, stepDuration);
  };

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Us</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">Who We Are</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              The IEEE Computer Society Student Branch Chapter at IIT is a vibrant community of technology enthusiasts, innovators, and future leaders in computer science and engineering. Founded on 14 May 2024.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              We strive to create a platform for students to explore cutting-edge technologies, develop technical skills, and connect with industry professionals through workshops, competitions, and collaborative projects.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              To foster innovation, technical excellence, and professional development among students through hands-on learning experiences and industry engagement.
            </p>
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed">
              To be the leading student organization that bridges the gap between academic learning and industry requirements, producing world-class computer professionals.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300">
            <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <div className="text-4xl font-bold text-white mb-2">{counts.members}</div>
            <div className="text-gray-400">IEEE CS Members</div>
          </div>

          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300">
            <Calendar className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <div className="text-4xl font-bold text-white mb-2">{counts.events}</div>
            <div className="text-gray-400">Activities in 2026</div>
          </div>

          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300">
            <Award className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <div className="text-4xl font-bold text-white mb-2">{counts.workshops.toLocaleString('en-US')}</div>
            <div className="text-gray-400">Total Attendances</div>
          </div>

          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300">
            <TrendingUp className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <div className="text-4xl font-bold text-white mb-2">{counts.years}+</div>
            <div className="text-gray-400">Years Active</div>
          </div>
        </div>
      </div>
    </section>
  );
}
