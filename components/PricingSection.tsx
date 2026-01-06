
import React from 'react';
import { Check, ShoppingCart, Timer, Flame, TrendingUp, ShieldCheck, Lock, CreditCard } from 'lucide-react';

interface PricingProps {
  isUpsellSelected: boolean;
  setIsUpsellSelected: (val: boolean) => void;
  timeLeftStr: string;
}

export const PricingSection: React.FC<PricingProps> = ({ isUpsellSelected, setIsUpsellSelected, timeLeftStr }) => {
  const basePrice = 12.99;
  const upsellPrice = 7.99;
  const totalPrice = isUpsellSelected ? (basePrice + upsellPrice).toFixed(2) : basePrice.toFixed(2);

  const handleCheckout = () => {
    const checkoutUrl = isUpsellSelected 
      ? "https://pay.kiwify.com.br/XX1jtK0" 
      : "https://pay.kiwify.com.br/bQ6CdmT";
    
    window.location.href = checkoutUrl;
  };

  return (
    <section id="pricing" className="py-24 px-4 bg-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600 rounded-full blur-[150px] opacity-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-900 rounded-full blur-[150px] opacity-10 -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="bg-slate-900 rounded-[2rem] shadow-[0_0_50px_rgba(0,0,0,1)] overflow-hidden border-2 border-red-600/50">
          <div className="bg-red-600 text-white p-5 text-center font-black flex items-center justify-center gap-4 text-xl italic uppercase">
            <TrendingUp className="animate-pulse" />
            OFERTA IMBATÍVEL SÓ HOJE
            <TrendingUp className="animate-pulse" />
          </div>

          <div className="p-10 md:p-16 text-center">
            <h3 className="text-gray-500 text-xl line-through mb-2 font-bold italic">De R$29,99</h3>
            <div className="flex flex-col items-center justify-center mb-8">
              <span className="text-white font-black text-6xl md:text-8xl italic font-heading tracking-tighter">
                R$ {basePrice.toString().replace('.', ',')}
              </span>
              <p className="text-amber-500 font-black mt-4 flex items-center gap-2 text-lg tracking-widest uppercase">
                <Flame size={24} fill="currentColor" className="text-red-600" /> 
                Depois, o preço sobe!
              </p>
            </div>

            <div className="mb-10 p-4 bg-red-600/10 border border-red-600/30 rounded-2xl text-red-500 font-black text-sm md:text-base uppercase italic flex items-center gap-3 justify-center">
              <Timer size={20} className="animate-spin-slow" />
              ⏰ ÚLTIMAS UNIDADES! Só restam 5 cópias por esse preço.
            </div>

            <div 
              onClick={() => setIsUpsellSelected(!isUpsellSelected)}
              className={`mb-10 p-8 rounded-3xl border-2 transition-all cursor-pointer text-left flex items-start gap-5 group ${isUpsellSelected ? 'border-amber-500 bg-amber-500/5' : 'border-dashed border-slate-700 hover:border-red-500/50 bg-slate-900/50'}`}
            >
              <div className={`mt-1 w-8 h-8 rounded-lg flex items-center justify-center border-2 transition-all ${isUpsellSelected ? 'bg-amber-500 border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.5)]' : 'border-slate-500 group-hover:border-red-500'}`}>
                {isUpsellSelected && <Check size={20} className="text-black font-black" />}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-black text-white text-lg md:text-xl uppercase italic tracking-tight">ADICIONAR VÍDEO COMPLEMENTAR</p>
                  <span className="bg-amber-500 text-black text-[10px] font-black px-2 py-0.5 rounded-full uppercase">HOT!</span>
                </div>
                <p className="text-gray-400 text-sm md:text-base font-medium">
                  Adicione outro vídeo exclusivo por apenas <span className="font-black text-amber-500 text-lg">R$7,99</span>. 
                  (Oferta limitada para novos membros!)
                </p>
              </div>
            </div>

            <button 
              onClick={handleCheckout}
              className="w-full bg-red-600 hover:bg-red-700 text-white text-2xl md:text-4xl font-black py-8 rounded-[1.5rem] shadow-[0_10px_40px_rgba(220,38,38,0.4)] transform transition hover:scale-[1.02] active:scale-95 flex flex-col items-center justify-center gap-1 mb-6 uppercase italic border-b-8 border-red-800"
            >
              <div className="flex items-center gap-4">
                <ShoppingCart size={36} fill="currentColor" />
                DESBLOQUEAR ACESSO AGORA
              </div>
              <span className="text-sm font-bold opacity-80">Total: R$ {totalPrice.toString().replace('.', ',')}</span>
            </button>

            {/* Verification & Security Area */}
            <div className="grid grid-cols-3 gap-4 mb-8 py-6 border-y border-slate-800">
              <div className="flex flex-col items-center gap-2">
                <ShieldCheck size={20} className="text-blue-500" />
                <span className="text-[9px] font-black uppercase tracking-widest text-gray-500">Checkout 100% Seguro</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Lock size={20} className="text-green-500" />
                <span className="text-[9px] font-black uppercase tracking-widest text-gray-500">Dados Criptografados</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CreditCard size={20} className="text-red-500" />
                <span className="text-[9px] font-black uppercase tracking-widest text-gray-500">Acesso Vitalício</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 text-slate-500 font-bold uppercase tracking-widest text-xs">
              <span>Oferta expira em:</span>
              <span className="text-red-500 bg-red-500/10 px-3 py-1 rounded-lg border border-red-500/20 font-black tabular-nums">
                [{timeLeftStr}]
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
