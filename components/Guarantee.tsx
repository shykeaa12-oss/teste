
import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const Guarantee: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-slate-950 border-t border-slate-900">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
        <div className="flex-shrink-0 bg-red-600/10 p-10 rounded-full border-2 border-red-600/20 glow-red">
          <ShieldCheck size={80} className="text-red-600" />
        </div>
        <div>
          <h2 className="text-3xl font-black text-white mb-6 uppercase italic tracking-tighter">💸 GARANTIA DE SATISFAÇÃO TOTAL!</h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-6 font-medium">
            Se você não amar o conteúdo exclusivo que preparamos, ou se sentir que não valeu cada centavo, 
            nós devolvemos 100% do seu dinheiro em até 7 dias. Sem perguntas, sem burocracia. 
            O risco é todo nosso, você só tem a ganhar.
          </p>
          <div className="flex items-center gap-2 text-red-500 font-black italic uppercase text-sm tracking-widest">
            <span className="w-8 h-[2px] bg-red-600"></span>
            SEU ACESSO ESTÁ PROTEGIDO
          </div>
        </div>
      </div>
    </section>
  );
};
