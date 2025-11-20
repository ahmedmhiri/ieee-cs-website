import { UserPlus } from 'lucide-react';

export default function JoinUsButton() {
  const handleClick = () => {
    alert('Membership portal coming soon! Stay tuned for updates.');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-30 flex items-center space-x-2 px-6 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-semibold shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110 group"
    >
      <UserPlus className="w-5 h-5 group-hover:rotate-12 transition-transform" />
      <span className="hidden sm:inline">Join Us</span>
    </button>
  );
}
