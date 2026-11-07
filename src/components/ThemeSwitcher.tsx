import { useEffect, useState } from 'react';
import { Palette } from 'lucide-react';

const themes = [
  { id: 'ieee', name: 'IEEE CS', swatch: ['#00629B', '#00B5E2'] },
  { id: 'midnight', name: 'Midnight', swatch: ['#3b82f6', '#06b6d4'] },
  { id: 'aurora', name: 'Aurora', swatch: ['#8b5cf6', '#d946ef'] },
  { id: 'matrix', name: 'Matrix', swatch: ['#10b981', '#84cc16'] },
  { id: 'sunset', name: 'Sunset', swatch: ['#f97316', '#f43f5e'] },
];

const read = () => {
  try {
    const saved = localStorage.getItem('cs-theme');
    return themes.some((t) => t.id === saved) ? (saved as string) : 'ieee';
  } catch {
    return 'ieee';
  }
};

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState(read);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem('cs-theme', theme);
    } catch {
      /* private mode: theme just won't persist */
    }
  }, [theme]);

  return (
    <div className="fixed bottom-8 left-8 z-30">
      {open && (
        <div className="mb-3 p-2 rounded-xl bg-slate-900/95 backdrop-blur-md border border-blue-500/30 shadow-2xl animate-pop">
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => {
                setTheme(t.id);
                setOpen(false);
              }}
              className={`flex items-center w-full gap-3 px-3 py-2 rounded-lg text-sm text-left transition-colors ${
                theme === t.id ? 'bg-blue-500/20 text-white' : 'text-gray-300 hover:bg-slate-800'
              }`}
            >
              <span
                className="w-5 h-5 rounded-full border border-white/20"
                style={{ background: `linear-gradient(135deg, ${t.swatch[0]}, ${t.swatch[1]})` }}
              />
              {t.name}
            </button>
          ))}
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Change theme"
        aria-expanded={open}
        className="w-12 h-12 rounded-full bg-slate-900/90 backdrop-blur-md border border-blue-500/40 text-blue-400 flex items-center justify-center shadow-xl hover:scale-110 hover:rotate-12 transition-all duration-300"
      >
        <Palette className="w-5 h-5" />
      </button>
    </div>
  );
}
