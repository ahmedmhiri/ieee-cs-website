// Content from the CS IIT Annual Report 2025-2026.
// Media: drop files into public/media/... and list them here. Empty values render a placeholder.

export const vtoolsUrl = (id: number) => `https://events.vtools.ieee.org/m/${id}`;
const vt = (label: string, id: number) => ({ label, url: vtoolsUrl(id) });

export type Activity = [date: string, title: string, type: ActivityType, attendance: number, vtoolsId: number];
export type ActivityType =
  | 'Meeting' | 'Talk' | 'Workshop' | 'Bootcamp' | 'Outreach' | 'Hackathon' | 'Congress';

export const galleryPhotos: string[] = [
  '/media/gallery/atic-stage.jpg',
  '/media/gallery/xtreme-group.jpg',
  '/media/gallery/codecore-hall.jpg',
  '/media/gallery/atic-panel.jpg',
  '/media/gallery/xtreme-night.jpg',
  '/media/gallery/codecore-audience.jpg',
  '/media/gallery/atic-roundtable.jpg',
  '/media/gallery/ai-bootcamp-class.jpg',
  '/media/gallery/xtreme-teams.jpg',
  '/media/gallery/atic-music.jpg',
  '/media/gallery/codecore-team.jpg',
  '/media/gallery/ai-bootcamp-stand.jpg',
  '/media/gallery/chaos-stage.jpg',
  '/media/gallery/chaos-panel.jpg',
  '/media/gallery/chaos-crowd.jpg',
  '/media/gallery/stem-class.jpg',
];
export const gallerySlots = 8;

export const stats = { members: 49, activities: 44, attendances: 1692, years: 2 };

export const typeCounts: [string, number][] = [
  ['Talks', 9], ['Bootcamps', 14], ['Workshops', 2], ['Meetings', 15],
  ['Outreach', 2], ['Congress', 1], ['Hackathon', 1],
];

export const typeColor: Record<ActivityType, string> = {
  Meeting: 'rgb(var(--slate-500))',
  Talk: 'rgb(var(--blue-500))',
  Workshop: '#14b8a6',
  Bootcamp: 'rgb(var(--cyan-500))',
  Outreach: '#e5e7eb',
  Hackathon: 'rgb(var(--gold-500))',
  Congress: 'rgb(var(--gold-500))',
};

// The 44 activities reported on vTools (24 Jan - 20 Oct 2026).
export const activities: Activity[] = [
  ['2026-01-24', 'Officers Meeting', 'Meeting', 0, 539467],
  ['2026-01-29', 'IEEE CS and WIE Virtual Meeting', 'Meeting', 15, 539471],
  ['2026-01-30', 'Introduction to MERN Stack (online workshop)', 'Workshop', 40, 539528],
  ['2026-02-07', 'Introduction to Flutter', 'Workshop', 15, 539606],
  ['2026-02-11', 'AI Bootcamp awareness stand', 'Outreach', 53, 555250],
  ['2026-02-13', 'Ramadan initiative, 1st meet', 'Meeting', 6, 539464],
  ['2026-02-14', 'AI Bootcamp', 'Bootcamp', 43, 539697],
  ['2026-02-15', 'Ramadan initiative, 2nd meet', 'Meeting', 24, 540009],
  ['2026-02-16', 'CS Legacy', 'Meeting', 0, 540740],
  ['2026-02-21', 'Ramadan Reloaded Initiative', 'Talk', 256, 556064],
  ['2026-02-22', 'From Student to Entrepreneur (CS Nights, FSS)', 'Talk', 58, 543139],
  ['2026-02-24', 'Crypto Trading Strategies (CS Nights, ISGIS)', 'Talk', 50, 543141],
  ['2026-02-26', 'CS-Legacy talk, Ramadan edition', 'Talk', 30, 542922],
  ['2026-02-27', 'MLSA (CS Nights, ISIMS)', 'Talk', 30, 544696],
  ['2026-03-01', 'From Academic Training to Professional Excellence (CS Nights, ENIS)', 'Talk', 39, 543832],
  ['2026-03-06', 'Computer Vision (CS Nights, IIT)', 'Talk', 30, 554737],
  ['2026-03-16', 'Competitive Programming, session 1', 'Bootcamp', 20, 550870],
  ['2026-03-17', 'Competitive Programming, session 2', 'Bootcamp', 20, 550883],
  ['2026-03-18', 'Competitive Programming, session 3', 'Bootcamp', 20, 550884],
  ['2026-04-18', 'Code Core: Space Hackathon Edition', 'Hackathon', 210, 576517],
  ['2026-07-10', 'ATIC planning and coordination meeting', 'Meeting', 5, 567924],
  ['2026-08-03', 'Joint planning meeting', 'Meeting', 13, 572317],
  ['2026-08-09', 'Technical session on Generative AI', 'Talk', 28, 572049],
  ['2026-08-20', 'Agentic AI for Securing Intelligent Sensing Systems', 'Talk', 23, 574216],
  ['2026-08-24', 'ATIC bootcamp 1: Red Team vs Blue Team', 'Bootcamp', 46, 575090],
  ['2026-08-28', 'ATIC bootcamp 2: LLM and prompt engineering', 'Bootcamp', 35, 576543],
  ['2026-08-30', 'ATIC bootcamp 3: AI deployment and production', 'Bootcamp', 35, 576569],
  ['2026-09-02', 'ATIC bootcamp 4: Agentic AI for cybersecurity', 'Bootcamp', 70, 576571],
  ['2026-09-06', 'XtremeRoad 1: the world of competitive programming', 'Bootcamp', 21, 576458],
  ['2026-09-08', 'ATIC bootcamp 5: Web application hacking and OWASP Top 10', 'Bootcamp', 23, 582364],
  ['2026-09-10', 'Joint event planning meeting', 'Meeting', 15, 578033],
  ['2026-09-14', 'XtremeRoad 2: algorithmic strategies', 'Bootcamp', 38, 580550],
  ['2026-09-16', 'AfroTech Intelligence Congress organisation meeting', 'Meeting', 4, 583039],
  ['2026-09-18', 'XtremeRoad 3: algorithmic strategies and problem solving', 'Bootcamp', 26, 580551],
  ['2026-09-21', 'ATIC progress and funding meeting', 'Meeting', 7, 590057],
  ['2026-09-23', 'XtremeRoad 4: inside competitive programming', 'Bootcamp', 46, 580873],
  ['2026-09-23', 'ATIC progress, task distribution and website review', 'Meeting', 14, 590065],
  ['2026-09-24', 'ATIC cybersecurity track planning', 'Meeting', 5, 590067],
  ['2026-09-26', 'XtremeRoad 5: search and sort', 'Bootcamp', 23, 585735],
  ['2026-09-28', 'ATIC pending tasks review', 'Meeting', 3, 590070],
  ['2026-09-30', 'ATIC 2026 promotional stand', 'Outreach', 75, 591812],
  ['2026-10-05', 'ATIC Nano Mentoring Program onboarding', 'Meeting', 3, 590076],
  ['2026-10-17', 'ATIC 2.0, AfroTech Intelligence Congress', 'Congress', 170, 590105],
  ['2026-10-20', 'Sponsoring meeting, IEEEXtreme collaboration', 'Meeting', 5, 587720],
];

export interface EventItem {
  title: string;
  date: string;
  time?: string;
  location: string;
  description: string;
  image?: string;
  imagePosition?: string; // CSS object-position, e.g. 'top' for tall posters
  link?: string;
  links?: { label: string; url: string }[]; // one vTools page per session, for series
  status: 'past' | 'upcoming';
}

// 2025-2026 events from the annual report. Add `image: 'media/<folder>/<file>.jpg'` when photos are ready.
export const events2026: EventItem[] = [
  {
    title: 'IEEEXtreme 20.0',
    date: '30-31 Oct 2026',
    location: 'International Institute of Technology, Sfax',
    image: 'media/events/ieeextreme.jpg',
    description:
      'An overnight algorithmic programming competition hosted at the International Institute of Technology in Sfax. A ceremony presented the format, then teams solved algorithmic problems under time pressure, building problem-solving, teamwork and time-management skills.',
    link: 'https://events.vtools.ieee.org/m/592084',
    status: 'past',
  },
  {
    title: 'ATIC 2.0: AfroTech Intelligence Congress',
    date: '17 Oct 2026',
    location: 'El Ksar Resort & Thalasso, Sousse, Tunisia',
    description: '170 attendees (60 from outside the IEEE membership). Prepared by most of this year’s officers’ meetings and promoted through the ATIC 2026 bootcamp series.',
    image: 'media/events/atic-2.0.jpg',
    link: 'https://events.vtools.ieee.org/m/590105',
    status: 'past',
  },
  {
    title: 'ATIC 2026: Road to the Congress',
    links: [
      vt('Bootcamp 1', 575090), vt('Bootcamp 2', 576543), vt('Bootcamp 3', 576569), vt('Bootcamp 4', 576571),
      vt('Bootcamp 5', 582364), vt('Promo stand', 591812),
    ],
    date: '24 Aug - 30 Sep 2026',
    location: 'Online and on campus',
    image: 'media/events/atic-road.jpg',
    description:
      'Five online bootcamp sessions (Red Team vs Blue Team, LLM and prompt engineering, AI deployment, agentic AI for cybersecurity, web application hacking and OWASP Top 10) and an on-campus promotional stand. 284 attendances.',
    status: 'past',
  },
  {
    title: 'Competitive Programming and XtremeRoad',
    links: [
      vt('CP 1', 550870), vt('CP 2', 550883), vt('CP 3', 550884), vt('XtremeRoad 1', 576458),
      vt('XtremeRoad 2', 580550), vt('XtremeRoad 3', 580551), vt('XtremeRoad 4', 580873), vt('XtremeRoad 5', 585735),
    ],
    date: '16 Mar - 26 Sep 2026',
    location: 'Online',
    image: 'media/events/xtremeroad.jpg',
    description:
      'Eight sessions: three competitive programming sessions in March, then the five-session XtremeRoad bootcamp in September. 214 attendances, 60 from outside the IEEE membership.',
    status: 'past',
  },
  {
    title: 'CHAOS Tournament',
    date: '26-29 Aug 2026',
    location: 'Sfax, Tunisia',
    image: 'media/events/chaos.jpg',
    links: [
      vt('Qualification, 26 Aug', 591952),
      vt('Second qualification, 27 Aug', 591954),
      vt('Main event and finals, 29 Aug', 591955),
    ],
    description:
      'An esports tournament co-organised by IEEE CS IIT SBC, with Valorant, EA FC and eFootball. Two hybrid qualification phases (80 and 50 players) led to the main event on 29 August: finals, a panel on Esports and Gaming, a live broadcast and about 80 people on site, with a 2,700 DT prize pool.',
    status: 'past',
  },
  {
    title: 'Code Core: Space Hackathon Edition',
    date: '18 Apr 2026',
    location: 'Sfax, Tunisia',
    image: 'media/events/codecore.jpg',
    description: 'Our hackathon: 210 participants, 120 of them from outside the IEEE membership.',
    link: 'https://events.vtools.ieee.org/m/576517',
    status: 'past',
  },
  {
    title: 'STEM Discovery Day: Robotics, AI and Team Building',
    date: '24 Mar 2026',
    location: 'Lycée Gremda, Sfax',
    image: 'media/events/stem-discovery-day.jpg',
    link: 'https://events.vtools.ieee.org/m/592142',
    description:
      'An outreach visit to a high school with two interactive workshops, Robotics and Artificial Intelligence, to introduce students to STEM. Organised by IEEE WIE IIT with IEEE CS IIT and IEEE RAS IIT.',
    status: 'past',
  },
  {
    title: 'CS Nights',
    links: [vt('Computer Vision session', 554737)],
    date: '6 Mar 2026',
    location: 'Online',
    image: 'media/events/cs-nights.jpg',
    description:
      'Our session in the CS Nights series, which the Computer Society student chapters run jointly: Computer Vision, an introduction to the YOLO object detection model and the OpenCV library. 30 attendees.',
    status: 'past',
  },
  {
    title: 'Ramadan Initiatives',
    links: [vt('Ramadan Reloaded', 556064), vt('CS-Legacy talk', 542922)],
    date: '21-26 Feb 2026',
    location: 'Online, with Ragnex',
    image: 'media/events/ramadan.jpg',
    imagePosition: 'top',
    description: 'Ramadan Reloaded Initiative (256 attendees) and the CS-Legacy Ramadan edition talk (30 attendees). 205 of the 286 attendances came from outside the IEEE membership.',
    status: 'past',
  },
  {
    title: 'AI Bootcamp',
    links: [vt('Awareness stand', 555250), vt('Bootcamp', 539697)],
    date: '11-14 Feb 2026',
    location: 'Sfax, Tunisia',
    image: 'media/events/ai-bootcamp.jpg',
    description: 'An awareness stand engaging the engineering community (53 attendees) followed by the bootcamp itself (43 attendees).',
    status: 'past',
  },
  {
    title: 'Workshops and Technical Talks',
    links: [vt('MERN Stack', 539528), vt('Flutter', 539606), vt('Generative AI', 572049), vt('Agentic AI', 574216)],
    date: '30 Jan - 20 Aug 2026',
    location: 'Online and in person',
    image: 'media/events/workshops.jpg',
    description: 'Introduction to MERN Stack, Introduction to Flutter, a technical session on Generative AI, and Agentic AI for Securing Intelligent Sensing Systems.',
    status: 'past',
  },
];

export const members = [
  'Mohamed Aziz Zouari', 'Ibrahim Aloulou', 'Zina Ammar', 'Amel Benameur', 'Ahmed Zouch', 'Dhia Talbi',
  'Youssef Hamza', 'Rabie Boukhris', 'Omar Walha', 'Taieb Jemal', 'Mohamed Mdaffar', 'Mohamed Jallouli',
  'Youssef Sahnoun', 'Chaima Zidi', 'Firas Bendhaou', 'Eya Kassis', 'Ahmed Borcheni', 'Dalansi Rahma',
  'Dhia Triki', 'Mohamed Aziz Moalla', 'Ahmed Walha', 'Mouhamed Louati', 'Zaynab Ayadi', 'Yassine Abdedayem',
  'Ahmed Khdir', 'Yessine Mnejja', 'Yessine Faires', 'Ahmed Masmoudi', 'Hajer Safi', 'Chaima Jerbi',
  'Fedy Ammous', 'Tarek Kamoun', 'Mohamed Khemakhem', 'Mohamed Chaabouni', 'Ahmed Ketata', 'Akram Ben Ameur',
  'Yesmine Besbes', 'Emna Ammar', 'Hamza Rhimi', 'Mohamed Aziz Krid', 'Fedi Grati', 'Fatma Ben Zarrouk',
  'Fatma Ben Kahla', 'Naim Ieee', 'Mohamed Grati', 'Aicha Loukil', 'Chahd Ieee', 'Malek Beltaief', 'Mahdi Bouassida',
];
