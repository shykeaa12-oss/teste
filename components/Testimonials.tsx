
import React from 'react';
import { Star, User } from 'lucide-react';

const testimonials = [
  {
    name: "M. Fernandes",
    text: "🔥 Esse vídeo vai mudar sua visão sobre o mundo da diversão adulta. Não consegui parar de assistir!",
    role: "Membro Premium"
  },
  {
    name: "J. Albuquerque",
    text: "💯 Vale cada centavo! Nunca vi nada tão excitante e exclusivo como esse conteúdo. A qualidade é absurda.",
    role: "Verificado"
  },
  {
    name: "R. Castro",
    text: "Discreto e rápido. O vídeo superou todas as minhas expectativas. O Toguro se superou nesse!",
    role: "Acesso Imediato"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-black text-white text-center mb-16 uppercase italic">O que eles estão falando...</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="p-8 rounded-3xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm flex flex-col space-y-6 hover:border-red-600/30 transition-colors">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#dc2626" className="text-red-600" />
                ))}
              </div>
              <p className="text-gray-300 italic text-lg leading-relaxed flex-grow">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <div className="bg-slate-800 p-2 rounded-full">
                  <User size={24} className="text-red-500" />
                </div>
                <div>
                  <p className="font-black text-white uppercase italic">{t.name}</p>
                  <p className="text-xs text-red-600 font-bold tracking-widest">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
