import { Cpu, Instagram, Linkedin, Mail, Globe, Heart } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Awards', href: '#awards' },
    { name: 'Events', href: '#events' },
    { name: 'Our Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            {/* <div className="flex items-center space-x-3 mb-4">
              <Cpu className="w-10 h-10 text-blue-400" />
              <div>
                <div className="font-bold text-xl">IEEE CS</div>
                <div className="text-sm text-blue-300">IIT (ISM) Dhanbad</div>
              </div>
            </div> */}
            <img src="logoCs.png" width={160}  />
            <p className="text-gray-400 leading-relaxed mb-4">
              Empowering the next generation of computer scientists through innovation, collaboration, and excellence.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/ieee.cs.iit.sbc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/ieee-cs-iit-student-branch-chapter/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="sbc-iit-cs@ieee.org"
                className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
              {/*<a
                href="https://iitism.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <Globe className="w-5 h-5" />
              </a>*/}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3 text-gray-400">
              <p>
                
                IEEE Computer Society
                IIT Student Branch Chapter
              </p>
              <p>
                Email:{' '}
                <a href="sbc-iit-cs@ieee.org" className="text-blue-400 hover:text-blue-300 transition-colors">
                  sbc-iit-cs@ieee.org
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 IEEE Computer Society IIT Student Branch Chapter. All rights reserved.
            </div>
            {/*<div className="flex items-center space-x-1 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>by IEEE CS IIT SB Web Team</span>
            </div>*/}
          </div>
        </div>
      </div>
    </footer>
  );
}
