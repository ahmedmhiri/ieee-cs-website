import { Cpu } from 'lucide-react';

export default function Preloader() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center z-50">
      <div className="text-center">
        {/* <div className="relative">
          <Cpu className="w-24 h-24 text-blue-400 animate-spin" strokeWidth={1.5} />
          <div className="absolute inset-0 bg-blue-400 blur-3xl opacity-30 animate-pulse"></div>
        </div> */}
        <img src="logoCs.png" width={300} />
        <div className="mt-8 text-white text-xl font-light tracking-wider">
          Loading IEEE CS IIT SB
        </div>
        <div className="mt-4 flex justify-center space-x-2">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
}
