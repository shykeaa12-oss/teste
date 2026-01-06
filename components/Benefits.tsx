
import React from 'react';
import { Zap, ShieldCheck, Eye, Lock, Camera } from 'lucide-react';

const benefitList = [
  {
    icon: <Camera className="text-red-500" size={32} />,
    title: "Conteúdo inédito",
    desc: "Material capturado em 4K que você não encontrará em nenhum outro lugar da internet."
  },
  {
    icon: <Lock className="text-red-500" size={32} />,
    title: "Acesso Imediato",
    desc: "Sem espera. Pagou, recebeu o link na hora via e-mail e WhatsApp."
  },
  {
    icon: <ShieldCheck className="text-red-500" size={32} />,
    title: "100% Discreto",
    desc: "Fatura neutra no cartão. Sua privacidade é nossa prioridade absoluta."
  },
  {
    icon: <Zap className="text-red-500" size={32} />,
    title: "Excitante & Único",
    desc: "Você vai querer assistir esse vídeo agora. Preparado para o que vem a seguir?"
  }
];

export const Benefits: React.FC = () => {
  return (
    <section className="py-20 px-4 border-y border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase italic">Vantagens Exclusivas</h2>
          <div className="w-24 h-2 bg-red-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefitList.map((item, idx) => (
            <div key={idx} className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-red-900/50 transition-all group hover:bg-slate-900">
              <div className="mb-6 bg-red-950/30 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform border border-red-900/20">
                {item.icon}
              </div>
              <h3 className="text-xl font-black text-white mb-3 uppercase italic tracking-tight">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
