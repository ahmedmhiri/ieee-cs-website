import { useState } from 'react';
import { Calendar, MapPin, ArrowRight, Clock, Image as ImageIcon, ChevronDown, ChevronUp } from 'lucide-react';
import { events2026, type EventItem } from '../data/report';

export default function Events() {
  const [showAll, setShowAll] = useState(false);
  const earlierEvents: EventItem[] = [
    {
      title: 'Documentary Cinema',
      date: '28 Oct 2025 ',
      time: ' 07:00 PM - 09:00 PM',
      location: 'International Institute of Technology,Sfax',
      description: 'Introduction to Creation and Visual Storytelling.',
      image: 'event1.jpg',
      status: 'past',
      link: 'https://events.vtools.ieee.org/m/511573',
    },
    {
      title: 'The AfroTech Intelligence Congress (ATIC),',
      date: ' 18,19 Oct 2025, 2025',
      time: '12:00 PM - 06:00 PM',
      location: 'El Ksar Resort & Thalasso ,Sousse',
      description: 'The ATIC Congress was more than just a congress it was a platform for learning, growth, and collaboration.',
      image: 'event2.jpg',
      status: 'past',
      link: 'https://events.vtools.ieee.org/m/504325',
    },
    {
      title: 'CrackCode 1.0 : The Mission Of Sherlock',
      date: '22,23 Feb ,2025',
      time: '05:00 PM - 02:00 PM',
      location: 'International Institute of Technology',
      description: 'CrackCode1.0 was a 12-hour Sherlock-themed competitive programming event that united over 150 young participants from across Tunisia and beyond through challenges, creativity, and strong IEEE community engagement.',
      image: 'event3.jpg',
      status: 'past',
      link: 'https://events.vtools.ieee.org/m/472729',
    },
    {
      title: 'Cs Workshop : Git&GitHub',
      date: ' 19 April, 2025',
      time: '11:00 AM - 03:00 PM',
      location: 'International Institute of Technology',
      description: 'Hands-on workshop introducing students to Git and GitHub fundamentals, delivered by Mr. Omar Frikha and organized by the IEEE CS SB IIT on April 19th, 2025.',
      image: 'event4.jpg',
      status: 'past',
      link: 'https://events.vtools.ieee.org/m/482034',
    },
    {
      title: 'CS Vision Talk',
      date: '16 April, 2025',
      time: '07:00 PM - 09:00 PM',
      location: 'Google Meet ',
      description: 'This session served as a meaningful reminder of the power of community, volunteering, and leadership.',
      image: 'event5.jpg',
      status: 'past',
      link: 'https://events.vtools.ieee.org/m/480586',
    },
    {
      title: 'INNOVATEX - IEEE CS SYP High Impact Zonal',
      date: '14,15 Dec, 2024',
      time: '01:00 pM - 02:00 PM',
      location: 'International Institute of Technology',
      description: 'INNOVATEX aims to deliver a high-impact learning experience that blends technical development, innovation, and professional enrichment.',
      image: 'event6.jpg',
      status: 'past',
      link: 'https://events.vtools.ieee.org/m/515897',
    },
  ];

  const allEvents = [...events2026, ...earlierEvents];
  const events = showAll ? allEvents : allEvents.slice(0, 6);

  return (
    <section id="events" className="py-20 bg-slate-800 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-slate-900 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Events</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Join us for exciting workshops, competitions, and learning experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="group bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="relative h-48 overflow-hidden">
                {event.image ? (
                  <img
                    src={event.image}
                    alt={event.title}
                    style={{ objectPosition: event.imagePosition }}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full border-b border-dashed border-blue-500/30 flex flex-col items-center justify-center text-gray-500 bg-slate-900/60">
                    <ImageIcon className="w-8 h-8 mb-1" />
                    <span className="text-sm">Photo</span>
                  </div>
                )}
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      event.status === 'upcoming'
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-500 text-white'
                    }`}
                  >
                    {event.status === 'upcoming' ? 'Upcoming' : 'Past Event'}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {event.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-4">{event.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar className="w-4 h-4 mr-2 text-blue-400" />
                    {event.date}
                  </div>
                  {event.time && (
                    <div className="flex items-center text-gray-400 text-sm">
                      <Clock className="w-4 h-4 mr-2 text-cyan-400" />
                      {event.time}
                    </div>
                  )}
                  <div className="flex items-center text-gray-400 text-sm">
                    <MapPin className="w-4 h-4 mr-2 text-blue-400" />
                    {event.location}
                  </div>
                </div>

                {event.links && (
                  <div className="mb-4">
                    <div className="text-xs text-gray-500 mb-2">Sessions on vTools</div>
                    <div className="flex flex-wrap gap-2">
                      {event.links.map((l) => (
                        <a
                          key={l.url}
                          href={l.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2.5 py-1 text-xs rounded-full border border-blue-500/30 text-blue-400 hover:bg-blue-500 hover:text-white transition-colors"
                        >
                          {l.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {event.link && (
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 text-blue-400 rounded-lg hover:from-blue-500 hover:to-cyan-500 hover:text-white transition-all duration-300 group/btn"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-400 rounded-lg hover:from-blue-500/30 hover:to-cyan-500/30 transition-all duration-300"
          >
            <span>{showAll ? 'Show fewer events' : `Show all ${allEvents.length} events`}</span>
            {showAll ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </section>
  );
}