import { Trophy, Award, Medal, Star } from 'lucide-react';

export default function Awards() {
  const awards: { year: number; title: string; icon: typeof Trophy; description: string; image?: string }[] = [
    {
      year: 2025,
      title: 'Outstanding Student Chapter Award (Large)',
      icon: Medal,
      image: 'media/events/award-2025.jpg',
      description:
        'Presented by the IEEE Tunisia Section to the IEEE IIT CS SB Chapter for delivering excellent services to IEEE members (24 December 2025, Hammamet, Tunisia).',
    },
    {
      year: 2024,
      title: 'Best student organization of the year',
      icon: Trophy,
      description: 'Recognition of a years worth of work',
      image: 'awr1.jpeg',
    },
    {
      year: 2023,
      title: 'Outstanding R8 chapter of the month',
      icon: Award,
      description: 'National Level Recognition',
      image: 'awr2.jpg',
    },
  ];

  return (
    <section
      id="awards"
      className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvc3ZnPg==')]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Awards &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Recognition
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Celebrating our achievements and milestones in technical excellence and community
            service
          </p>
        </div>

        {/* Centered cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {awards.map((award, index) => {
            const Icon = award.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6 hover:border-blue-400/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 w-full sm:w-[22rem]"
              >
                {/* Image above text - no cropping */}
                {award.image ? (
                  <div className="mb-4">
                    <img
                      src={award.image}
                      alt={award.title}
                      className="w-full h-auto object-contain rounded-lg border border-blue-500/20"
                    />
                  </div>
                ) : (
                  <div className="mb-4 h-40 rounded-lg border-2 border-dashed border-blue-500/30 flex items-center justify-center text-gray-500 text-sm">
                    Award photo
                  </div>
                )}

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-blue-400 font-semibold mb-1">{award.year}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{award.title}</h3>
                    <p className="text-gray-400 text-sm">{award.description}</p>
                  </div>
                </div>

                <div className="mt-4 h-1 w-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 w-0 group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}