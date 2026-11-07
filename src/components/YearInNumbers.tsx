import { activities, typeColor, typeCounts, vtoolsUrl } from '../data/report';

const t = (iso: string) => Date.parse(iso + 'T00:00:00Z');
const START = t('2026-01-20');
const END = t('2026-10-24');
const SPAN = END - START;
const MAX = 260;
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
const peaks: Record<string, string> = {
  'Ramadan Reloaded Initiative': 'Ramadan Reloaded',
  'Code Core: Space Hackathon Edition': 'Code Core',
  'ATIC 2.0, AfroTech Intelligence Congress': 'ATIC 2.0',
};
const legend: [string, string][] = [
  ['Meeting', typeColor.Meeting], ['Talk', typeColor.Talk], ['Workshop', typeColor.Workshop],
  ['Bootcamp', typeColor.Bootcamp], ['Outreach', typeColor.Outreach], ['Hackathon and congress', typeColor.Hackathon],
];

export default function YearInNumbers() {
  return (
    <section id="year" className="py-20 bg-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Year in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Numbers</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Every session of 2026. Each bar is one activity, and its height is the number of people who attended.
          </p>
        </div>

        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-4 sm:p-8">
          <div
            className="relative h-56 sm:h-72 border-b-2 border-slate-500"
            role="img"
            aria-label="Bar chart of the 44 activities between January and October 2026, by attendance"
          >
            {[100, 200].map((g) => (
              <div key={g} className="absolute left-0 right-0 border-t border-dashed border-slate-700" style={{ bottom: `${(g / MAX) * 100}%` }}>
                <span className="absolute left-0 -top-5 text-xs text-gray-500">{g}</span>
              </div>
            ))}
            {activities.map(([d, title, type, att, vid], i) => {
              const left = ((t(d) - START) / SPAN) * 100;
              const h = Math.max(att / MAX, 0.02) * 100;
              const label = `${new Date(t(d)).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', timeZone: 'UTC' })}: ${title}${att ? `, ${att} attended` : ''}`;
              return (
                <a
                  key={i}
                  href={vtoolsUrl(vid)}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  aria-label={label}
                  className="bar-grow absolute bottom-0 w-1.5 sm:w-2 -ml-0.5 rounded-t hover:brightness-125 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                  style={{ left: `${left}%`, height: `${h}%`, background: typeColor[type], transitionDelay: `${i * 30}ms` }}
                >
                  {peaks[title] && (
                    <span className={`hidden sm:block absolute bottom-full mb-1 whitespace-nowrap text-xs text-gray-300 ${left > 80 ? 'right-0' : 'left-0'}`}>
                      <b className="text-white text-base">{att}</b> {peaks[title]}
                    </span>
                  )}
                </a>
              );
            })}
          </div>
          <div className="relative h-7" aria-hidden="true">
            {months.map((m, i) => (
              <span key={m} className="absolute top-1.5 text-xs text-gray-500" style={{ left: `${((Date.UTC(2026, i, 1) - START) / SPAN) * 100}%` }}>
                {m}
              </span>
            ))}
          </div>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 mt-4 text-sm text-gray-400">
            {legend.map(([name, color]) => (
              <li key={name} className="flex items-center">
                <i className="inline-block w-2.5 h-2.5 rounded-sm mr-2" style={{ background: color }} />
                {name}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {typeCounts.map(([label, n]) => (
            <span key={label} className="px-4 py-1.5 rounded-full border border-blue-500/30 text-gray-300 bg-blue-900/20">
              <b className="text-cyan-400">{n}</b> {label}
            </span>
          ))}
        </div>
        <p className="text-center text-gray-500 text-sm mt-6">
          Activities reported between 24 January and 20 October 2026. Attendances count every participant of every session.
          Click a bar to open its vTools page.
        </p>

        <details className="mt-10 max-w-4xl mx-auto group">
          <summary className="cursor-pointer text-center text-blue-400 font-semibold hover:text-blue-300">
            All {activities.length} activities, with vTools links
          </summary>
          <div className="mt-6 overflow-x-auto rounded-xl border border-slate-700">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-900/60 text-gray-400">
                <tr>
                  <th className="px-4 py-3 font-medium">Date</th>
                  <th className="px-4 py-3 font-medium">Activity</th>
                  <th className="px-4 py-3 font-medium">Type</th>
                  <th className="px-4 py-3 font-medium text-right">Attended</th>
                </tr>
              </thead>
              <tbody>
                {activities.map(([d, title, type, att, vid], i) => (
                  <tr key={i} className="border-t border-slate-700/70 hover:bg-slate-900/40">
                    <td className="px-4 py-2 whitespace-nowrap text-cyan-400">
                      {new Date(t(d)).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', timeZone: 'UTC' })}
                    </td>
                    <td className="px-4 py-2">
                      <a href={vtoolsUrl(vid)} target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-blue-400 underline decoration-slate-600 hover:decoration-blue-400">
                        {title}
                      </a>
                    </td>
                    <td className="px-4 py-2 text-gray-400">{type}</td>
                    <td className="px-4 py-2 text-right text-gray-300">{att || '–'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </details>
      </div>
    </section>
  );
}
