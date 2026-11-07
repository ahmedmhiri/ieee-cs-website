import { Linkedin } from 'lucide-react';

export default function Team() {
  // Executive board 2025-2026, from the annual report.
  // Add `image` (file in /public) and `linkedin` for anyone who is missing them.
  type Member = { name: string; position: string; image?: string; linkedin?: string };
  const currentTeam: Member[] = [
    {
      name: 'Youssef Sahnoun',
      position: 'CS SB Chair',
      image: 'team/youssef-sahnoun.jpg',
      linkedin: 'https://www.linkedin.com/in/youssef-sahnoun-74500b174/',
    },
    { name: 'Emna Ammar', position: 'CS SB Vice-Chair', image: 'team/emna-ammar.jpg' },
    {
      name: 'Amel BenAmeur',
      position: 'CS SB Vice-Chair',
      image: 'team/amel-benameur.jpg',
      linkedin: 'https://www.linkedin.com/in/amel-ben-ameur-707509226/',
    },
    { name: 'Zina Ammar', position: 'CS SB Secretary', image: 'team/zina-ammar.jpg' },
    { name: 'Mouhamed Louati', position: 'CS SB Treasurer', image: 'team/mouhamed-louati.jpg' },
    { name: 'Ahmed Mhiri', position: 'CS SB Webmaster', image: 'team/ahmed-mhiri.jpg' },
    { name: 'Yesmine Besbes', position: 'CS SB Webmaster', image: 'team/yesmine-besbes.jpg' },
    { name: 'Mohamed Chaabouni', position: 'CS SB Webmaster', image: 'team/mohamed-chaabouni.jpg' },
  ];

  const initials = (name: string) =>
    name.split(' ').filter(Boolean).slice(0, 2).map((p) => p[0]).join('').toUpperCase();

  const TeamCard = ({ member }: { member: Member }) => (
    <div className="group relative">
      <div className="relative bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur-sm border border-blue-500/30 rounded-xl overflow-hidden hover:border-blue-400/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
        <div className="aspect-square overflow-hidden">
          {member.image ? (
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-cyan-500/20 text-6xl font-bold text-blue-300">
              {initials(member.name)}
            </div>
          )}
        </div>
        {member.linkedin && (
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
        )}
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
      </div>
    </section>
  );
}
