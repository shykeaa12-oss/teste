
import React from 'react';
import { Flame, BadgeCheck } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-slate-950 border-b border-slate-800 py-4 md:py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-5 md:space-y-8">
        
        {/* Profile Verification Badge - Optimized for Mobile */}
        <div className="flex flex-row items-center gap-3 md:gap-4 bg-slate-900/60 p-3 md:p-4 rounded-[2rem] border border-slate-800 shadow-2xl backdrop-blur-xl">
          <div className="relative">
            <div className="w-14 h-14 md:w-20 md:h-20 rounded-full p-[2px] bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600">
              <div className="w-full h-full rounded-full border-2 border-slate-950 overflow-hidden">
                <img 
                  src="https://lh3.googleusercontent.com/d/1HS2z2zSqg4FC7xkU3OplGnPinYiy4Pmb" 
                  alt="Rafael Martins" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=Rafael+Martins&background=dc2626&color=fff";
                  }}
                />
              </div>
            </div>
            {/* Official Instagram Verification Badge */}
            <div className="absolute -bottom-1 -right-1 bg-white rounded-full">
              <BadgeCheck size={20} className="text-[#0095F6]" fill="#0095F6" stroke="white" strokeWidth={1} />
            </div>
          </div>
          
          <div className="text-left">
            <div className="flex items-center gap-1.5">
              <h3 className="text-lg md:text-xl font-black text-white italic tracking-tight">rafamartiin</h3>
              <BadgeCheck size={18} className="text-[#0095F6]" fill="#0095F6" stroke="white" strokeWidth={1} />
            </div>
            <p className="text-blue-400 text-[10px] md:text-xs font-black uppercase tracking-widest">Meta Verified Official</p>
            <div className="flex gap-3 mt-0.5">
              <span className="text-[10px] md:text-xs text-gray-500"><strong className="text-white">19.4k</strong> seguidores</span>
              <span className="text-[10px] md:text-xs text-gray-500"><strong className="text-white">51</strong> posts</span>
            </div>
          </div>
        </div>

        {/* Main Title - Mobile Optimized Typography */}
        <div className="space-y-3 md:space-y-4 max-w-4xl px-2">
          <h1 className="text-2xl md:text-5xl lg:text-7xl font-black text-white leading-[1.1] font-heading uppercase italic tracking-tighter">
            🔥 VÍDEO COMPLETO: <br className="md:hidden" />
            <span className="text-red-600">PAI E FILHO</span> <br className="md:hidden" />
            <span className="text-white">COM A</span> <br className="md:hidden" />
            <span className="bg-red-600 px-2 italic text-slate-950 inline-block mt-1">MADRASTA</span> 🔥
          </h1>
          <p className="text-gray-400 text-sm md:text-xl font-bold uppercase tracking-tight">
            A cena proibida que quebrou as redes sociais. <br className="md:hidden" />
            <span className="text-red-500">Acesso Vitalício e Imediato.</span>
          </p>
        </div>

        {/* Live Viewer Counter */}
        <div className="flex items-center gap-2 bg-red-600/10 px-4 py-2 rounded-full border border-red-600/20">
          <div className="w-2 h-2 bg-red-600 rounded-full animate-ping"></div>
          <p className="text-red-500 text-[10px] md:text-sm font-black uppercase italic tracking-widest">
            1.248 pessoas assistindo agora
          </p>
        </div>
      </div>
    </header>
  );
};
