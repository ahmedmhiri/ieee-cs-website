import { Image as ImageIcon } from 'lucide-react';
import { galleryPhotos, gallerySlots } from '../data/report';

export default function Gallery() {
  const count = Math.max(gallerySlots, galleryPhotos.length);
  return (
    <section id="gallery" className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Gallery</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Moments from our events, bootcamps and competitions</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: count }).map((_, i) => {
            const src = galleryPhotos[i];
            return src ? (
              <img key={i} src={src} alt="" loading="lazy" className="w-full h-48 md:h-56 object-cover rounded-xl border border-slate-700 hover:scale-105 transition-transform duration-300" />
            ) : (
              <div key={i} className="h-48 md:h-56 rounded-xl border-2 border-dashed border-blue-500/30 flex flex-col items-center justify-center text-gray-500">
                <ImageIcon className="w-8 h-8 mb-1" />
                <span className="text-sm">Photo</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
