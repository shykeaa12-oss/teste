
import React, { useState } from 'react';
import { Eye, ShieldCheck, Lock, ShoppingCart, Sparkles, Play, Pause, BadgeCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  const [isPlaying1, setIsPlaying1] = useState(false);
  const [isPlaying2, setIsPlaying2] = useState(false);

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  // IDs dos vídeos/mídias do Google Drive
  const gifId1 = '1kkgaigje3se3SmnIYpZz3_GNR7gRy3-l';
  const videoId2 = '1q6yFVXL0NxYXnW_NtTxTsDXDGYLfcnnR';

  // Link direto para imagem/GIF no Google Drive
  const gifSrc1 = `https://lh3.googleusercontent.com/d/${gifId1}`;
  const videoSrc2 = `https://drive.google.com/file/d/${videoId2}/preview${isPlaying2 ? '?autoplay=1' : ''}`;

  return (
    <section className="py-8 md:py-20 px-4 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 blur-[120px] pointer-events-none rounded-full"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 md:gap-16 relative z-10">
        
        {/* Text Area */}
        <div className="lg:w-[45%] space-y-6 md:space-y-8 text-center lg:text-left">
          <button 
            onClick={scrollToPricing}
            className="group relative inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-black uppercase italic text-base md:text-lg shadow-[0_0_30px_rgba(220,38,38,0.4)] transition-all transform hover:scale-105 active:scale-95 border-b-4 border-red-800"
          >
            <ShoppingCart size={20} fill="white" />
            COMPRAR AGORA - R$12,99
            <Sparkles size={18} className="text-amber-400" />
          </button>

          <div className="pt-2">
            <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-600/30 px-3 py-1 rounded-full text-blue-500 text-[10px] md:text-xs font-black uppercase tracking-widest">
              <BadgeCheck size={14} /> Perfil Verificado Oficial
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-black text-white leading-[1.1] uppercase italic font-heading mt-4 tracking-tighter">
              A NOITE <span className="text-red-600">INÉDITA</span> <br className="hidden md:block" /> DOS TRÊS.
            </h2>
          </div>

          <p className="text-gray-300 text-base md:text-xl leading-relaxed font-medium px-2 md:px-0">
            Assista ao encontro que gerou a maior polêmica do ano. <span className="text-white font-black italic">Pai e filho dividindo a mesma madrasta na frente das câmeras.</span> 
            <br className="hidden md:block" />
            <span className="text-red-500 font-bold block mt-2">Sem censura e sem cortes.</span>
          </p>
          
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-3 text-white font-black">
            <span className="bg-slate-900 border border-slate-800 px-3 py-2 rounded-xl text-[10px] md:text-xs flex items-center gap-2 shadow-xl">
              <ShieldCheck size={14} className="text-blue-500" /> ORIGINAL
            </span>
            <span className="bg-slate-900 border border-slate-800 px-3 py-2 rounded-xl text-[10px] md:text-xs flex items-center gap-2 shadow-xl">
              <Lock size={14} className="text-red-500" /> SEGURO
            </span>
          </div>
        </div>

        {/* Video Previews - Grid optimized for mobile */}
        <div className="lg:w-[55%] w-full grid grid-cols-2 lg:grid-cols-2 gap-3 md:gap-6">
          
          {/* PREVIA 01 - GIF Version */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-red-600 opacity-20 blur-md rounded-2xl group-hover:opacity-40 transition"></div>
            <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-black aspect-[9/16] h-full flex items-center justify-center">
              <img 
                src={gifSrc1} 
                alt="Prévia 01"
                className={`w-full h-full object-cover transition-opacity duration-500 ${isPlaying1 ? 'opacity-100' : 'opacity-50'}`}
              />
              
              {/* Authenticity Watermark */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-10 rotate-45 select-none whitespace-nowrap z-10">
                <span className="text-white text-lg md:text-4xl font-black tracking-[0.2em]">ORIGINAL</span>
              </div>

              <div 
                onClick={() => setIsPlaying1(!isPlaying1)}
                className="absolute inset-0 z-30 cursor-pointer flex flex-col items-center justify-center transition-all duration-300"
              >
                {!isPlaying1 ? (
                  <div className="bg-red-600 p-4 md:p-6 rounded-full shadow-[0_0_30px_rgba(220,38,38,0.7)] transform transition scale-90 md:scale-100">
                    <Play size={32} className="text-white fill-current translate-x-0.5" />
                  </div>
                ) : (
                  <div className="opacity-0 group-hover:opacity-100 bg-black/40 p-4 md:p-6 rounded-full backdrop-blur-sm transition">
                    <Pause size={32} className="text-white fill-current" />
                  </div>
                )}
                <div className={`mt-4 px-2 py-1 bg-black/60 backdrop-blur-md rounded-lg border border-white/10 ${isPlaying1 ? 'opacity-0' : 'opacity-100'}`}>
                  <span className="text-white font-black italic uppercase text-[8px] md:text-xs flex items-center gap-1">
                    <Eye size={10} className="text-red-500" /> PRÉVIA 1
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* PREVIA 02 - Video Version */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-red-600 opacity-20 blur-md rounded-2xl group-hover:opacity-40 transition"></div>
            <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-black aspect-[9/16] h-full flex items-center justify-center">
              <iframe 
                key={isPlaying2 ? 'p2-playing' : 'p2-paused'}
                src={videoSrc2} 
                className={`w-full h-full border-0 transition-opacity duration-500 ${isPlaying2 ? 'opacity-100' : 'opacity-50'}`}
                allow="autoplay; fullscreen; encrypted-media"
                title="Prévia 02"
              ></iframe>
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-10 -rotate-45 select-none whitespace-nowrap z-10">
                <span className="text-white text-lg md:text-4xl font-black tracking-[0.2em]">ORIGINAL</span>
              </div>

              <div 
                onClick={() => setIsPlaying2(!isPlaying2)}
                className="absolute inset-0 z-30 cursor-pointer flex flex-col items-center justify-center transition-all duration-300"
              >
                {!isPlaying2 ? (
                  <div className="bg-red-600 p-4 md:p-6 rounded-full shadow-[0_0_30px_rgba(220,38,38,0.7)] transform transition scale-90 md:scale-100">
                    <Play size={32} className="text-white fill-current translate-x-0.5" />
                  </div>
                ) : (
                  <div className="opacity-0 group-hover:opacity-100 bg-black/40 p-4 md:p-6 rounded-full backdrop-blur-sm transition">
                    <Pause size={32} className="text-white fill-current" />
                  </div>
                )}
                <div className={`mt-4 px-2 py-1 bg-black/60 backdrop-blur-md rounded-lg border border-white/10 ${isPlaying2 ? 'opacity-0' : 'opacity-100'}`}>
                  <span className="text-white font-black italic uppercase text-[8px] md:text-xs flex items-center gap-1">
                    <Eye size={10} className="text-red-500" /> PRÉVIA 2
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
