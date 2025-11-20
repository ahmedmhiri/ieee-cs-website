import { useState } from 'react';
import { Linkedin, ChevronDown, ChevronUp } from 'lucide-react';

export default function Team() {
  const [showPrevious, setShowPrevious] = useState(false);

  const currentTeam = [
    {
      name: 'Mohamed Zouari',
      position: 'CS SB Chair',
      image: 'chair.JPG',
      linkedin: 'https://www.linkedin.com/in/mohamedzouari202/',
    },
    {
      name: 'Bassem Moalla',
      position: 'CS SB Vice-Chair',
      image: 'viceweb.jpg',
      linkedin: 'https://www.linkedin.com/in/bassem-moalla-b0266b2ab/',
    },
    {
      name: 'Amel Ben Ameur',
      position: 'CS SB Vice-Chair',
      image: 'vice.jpg',
      linkedin: 'https://www.linkedin.com/in/amel-ben-ameur-707509226/',
    },
    {
      name: 'Lina Mallouli',
      position: 'CS SB Secretary',
      image: 'sec.jpg',
      linkedin: 'https://www.linkedin.com/in/lina-mallouli-a16a37176/',
    },
    {
      name: 'Yessine Louati',
      position: 'CS SB Treasurer',
      image: 'treso.jpg',
      linkedin: 'https://www.linkedin.com/in/mouhamed-yessine-louati-047254330/',
    },
    {
      name: 'Youssef Sahnoun',
      position: 'CS SB Webmaster',
      image: 'web.jpg',
      linkedin: 'https://www.linkedin.com/in/youssef-sahnoun-74500b174/',
    },
    {
      name: 'Hamza Maalej',
      position: 'CS SB Project-Manager',
      image: 'PM.jpg',
      linkedin: 'https://www.linkedin.com/in/hamza-maalej-21815b35b/',
    },
  ];

  const previousTeam = [
    {
      name: 'Rabie Becha',
      position: 'CS SB Chair',
      image: 'chair5.jpg',
      linkedin: 'https://www.linkedin.com/in/mohamed-rabie-becha-a06418334/',
    },
    {
      name: 'Ayoub Bougacha',
      position: 'CS SB Vice-Chair',
      image: 'vice5.jpg',
      linkedin: 'https://www.linkedin.com/in/bougacha-ayoub-b18bba29a/',
    },
    {
      name: 'Sirine Ben Hassouna',
      position: 'CS SB Secretary',
      image: 'sec5.jpg',
      linkedin: 'https://www.linkedin.com/in/sirine-benhassouna-a89baa2aa/m',
    },
    {
      name: 'Mahdi  Bouassida',
      position: 'CS SB Treasurer',
      image: 'treso5.jpg',
      linkedin: 'https://www.linkedin.com/in/mahdi-bouassida789/',
    },
    {
      name: 'Bassem Moalla',
      position: 'CS SB Webmaster',
      image: 'viceweb.jpg',
      linkedin: 'https://www.linkedin.com/in/bassem-moalla-b0266b2ab/',
    },
  ];

  const TeamCard = ({ member, isPrevious = false }: { member: typeof currentTeam[0], isPrevious?: boolean }) => (
    <div className={`group relative ${isPrevious ? 'opacity-75' : ''}`}>
      <div className="relative bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur-sm border border-blue-500/30 rounded-xl overflow-hidden hover:border-blue-400/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
        <div className="aspect-square overflow-hidden">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-6 w-full">
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors mx-auto"
            >
              <Linkedin className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
        <p className="text-blue-400 font-medium">{member.position}</p>
      </div>
    </div>
  );

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOCIgc3Ryb2tlPSJyZ2JhKDU5LCAxMzAsIDI0NiwgMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Team</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Meet the dedicated individuals driving innovation and excellence
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-10">
            Executive Committee 2025-2026
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentTeam.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => setShowPrevious(!showPrevious)}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-400 rounded-lg hover:from-blue-500/30 hover:to-cyan-500/30 transition-all duration-300"
          >
            <span>{showPrevious ? 'Hide' : 'Show'} Previous Committee (2024-2025)</span>
            {showPrevious ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
        </div>

        {showPrevious && (
          <div className="mt-16 animate-fade-in">
            <h3 className="text-3xl font-bold text-white/80 text-center mb-10">
              Executive Committee 2024-2025
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {previousTeam.map((member, index) => (
                <TeamCard key={index} member={member} isPrevious />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
