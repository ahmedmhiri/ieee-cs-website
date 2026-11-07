import colors from 'tailwindcss/colors';
import plugin from 'tailwindcss/plugin';

/**
 * Themes: the site's existing Tailwind colour names stay the same
 *   slate / gray  -> neutral surfaces and text
 *   blue          -> primary brand colour
 *   cyan          -> accent colour
 *   gold          -> highlight colour (chart peaks)
 * but each one reads from a CSS variable, so switching `data-theme` on <html> re-colours everything.
 * To add a theme: add an entry below and a button in src/components/ThemeSwitcher.tsx.
 */

const hex = (n) => '#' + n.map((v) => Math.round(v).toString(16).padStart(2, '0')).join('');
const rgb = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
const mix = (h, to, t) => hex(rgb(h).map((v, i) => v + (to[i] - v) * t));
// Build an 11-step scale from one brand colour. `anchor` is the shade that equals the brand colour exactly.
const scaleFrom = (base, anchor) => {
  const tints = { 50: 0.93, 100: 0.84, 200: 0.68, 300: 0.48, 400: 0.26, 500: 0.12 };
  const shades = { 600: 0.14, 700: 0.28, 800: 0.42, 900: 0.56, 950: 0.7 };
  const out = {};
  for (const s of [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]) {
    if (s === anchor) out[s] = base;
    else if (s < anchor) out[s] = mix(base, [255, 255, 255], tints[s] * (anchor === 600 ? 1 : 1.1));
    else out[s] = mix(base, [0, 0, 0], shades[s] * (anchor === 600 ? 0.9 : 1));
  }
  return out;
};

// IEEE Computer Society brand palette: gold #FFA300, cyan #00B5E2, blue #00629B, cool gray #75787B, black, white.
const ieeeNeutral = {
  50: '#f7f7f7', 100: '#eeeeee', 200: '#dcdddd', 300: '#bcbdbf', 400: '#9a9c9e', 500: '#75787b',
  600: '#4f5356', 700: '#33373a', 800: '#202325', 900: '#131516', 950: '#080909',
};

export const themes = {
  ieee: {
    slate: ieeeNeutral,
    gray: ieeeNeutral,
    blue: scaleFrom('#00629B', 600),
    cyan: scaleFrom('#00B5E2', 500),
    gold: scaleFrom('#FFA300', 500),
  },
  midnight: { slate: colors.slate, gray: colors.gray, blue: colors.blue, cyan: colors.cyan, gold: colors.amber },
  aurora: { slate: colors.zinc, gray: colors.zinc, blue: colors.violet, cyan: colors.fuchsia, gold: colors.amber },
  matrix: { slate: colors.neutral, gray: colors.neutral, blue: colors.emerald, cyan: colors.lime, gold: colors.yellow },
  sunset: { slate: colors.stone, gray: colors.stone, blue: colors.orange, cyan: colors.rose, gold: colors.amber },
};

const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
const hexToRgb = (h) => rgb(h).join(' ');
const scale = (name) =>
  Object.fromEntries(shades.map((s) => [s, `rgb(var(--${name}-${s}) / <alpha-value>)`]));

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: { slate: scale('slate'), gray: scale('gray'), blue: scale('blue'), cyan: scale('cyan'), gold: scale('gold') },
    },
  },
  plugins: [
    plugin(({ addBase }) => {
      const vars = (t) =>
        Object.fromEntries(
          Object.entries(t).flatMap(([name, palette]) =>
            shades.map((s) => [`--${name}-${s}`, hexToRgb(palette[s])])
          )
        );
      const base = { ':root': vars(themes.ieee) };
      for (const [id, t] of Object.entries(themes)) base[`:root[data-theme="${id}"]`] = vars(t);
      addBase(base);
    }),
  ],
};
