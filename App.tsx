
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { Testimonials } from './components/Testimonials';
import { PricingSection } from './components/PricingSection';
import { Guarantee } from './components/Guarantee';
import { Footer } from './components/Footer';
import { Flame, CheckCircle, ShoppingBag, ArrowRight } from 'lucide-react';

const App: React.FC = () => {
  const [isUpsellSelected, setIsUpsellSelected] = useState(false);
  const [timeLeft, setTimeLeft] = useState(225);
  const [notification, setNotification] = useState<{name: string, location: string} | null>(null);

  const sales = [
    { name: "Carlos S.", location: "São Paulo, SP" },
    { name: "Marcos V.", location: "Rio de Janeiro, RJ" },
    { name: "André L.", location: "Curitiba, PR" },
    { name: "Felipe M.", location: "Belo Horizonte, MG" },
    { name: "Ricardo G.", location: "Porto Alegre, RS" },
    { name: "João P.", location: "Salvador, BA" },
    { name: "Lucas R.", location: "Fortaleza, CE" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    const notificationInterval = setInterval(() => {
      const randomSale = sales[Math.floor(Math.random() * sales.length)];
      setNotification(randomSale);
      setTimeout(() => setNotification(null), 3500);
    }, 10000);

    return () => {
      clearInterval(timer);
      clearInterval(notificationInterval);
    };
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white selection:bg-red-600 selection:text-white relative font-sans">
      
      {/* Sales Notifications - Improved for Mobile Z-index */}
      <div className={`fixed bottom-24 left-2 right-2 md:bottom-8 md:left-8 md:right-auto z-[60] transition-all duration-700 transform ${notification ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}>
        <div className="bg-slate-900/95 border border-slate-700 p-3 md:p-4 rounded-2xl shadow-2xl flex items-center gap-4 backdrop-blur-2xl ring-1 ring-white/10">
          <div className="bg-green-500/20 p-2 rounded-xl">
            <ShoppingBag size={20} className="text-green-500" />
          </div>
          <div className="flex-1">
            <p className="text-[10px] text-green-500 font-black uppercase tracking-widest">Acesso Liberado</p>
            <p className="text-sm font-black text-white">{notification?.name} acabou de comprar</p>
            <p className="text-[10px] text-gray-500">{notification?.location} • Pago via PIX</p>
          </div>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="bg-red-600 text-white py-2 text-center text-[10px] md:text-sm font-black sticky top-0 z-[100] flex items-center justify-center gap-2 px-4 shadow-[0_4px_15px_rgba(220,38,38,0.6)] border-b border-red-500">
        <CheckCircle size={14} className="flex-shrink-0" />
        <span className="uppercase tracking-tight">OFERTA EXCLUSIVA: PAGAMENTO 100% SEGURO & DISCRETO</span>
        <div className="bg-white/20 px-1.5 py-0.5 rounded text-[9px] hidden sm:block">SSL SECURE</div>
      </div>

      <div className="relative z-10">
        <Header />
        <main className="flex-grow">
          <Hero />
          <div className="bg-gradient-to-b from-slate-950 to-black">
            <Benefits />
            <Testimonials />
            <PricingSection 
              isUpsellSelected={isUpsellSelected} 
              setIsUpsellSelected={setIsUpsellSelected} 
              timeLeftStr={formatTime(timeLeft)}
            />
            <Guarantee />
          </div>
        </main>
      </div>

      <Footer />

      {/* Mobile Sticky CTA - Enhanced Design */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-3 bg-slate-950/95 backdrop-blur-2xl border-t border-slate-800 z-50 shadow-[0_-10px_30px_rgba(0,0,0,0.8)]">
        <button 
          onClick={scrollToPricing}
          className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-black py-4 rounded-2xl shadow-[0_0_25px_rgba(220,38,38,0.5)] transform transition active:scale-[0.98] flex items-center justify-center gap-3 uppercase text-lg italic border-b-4 border-red-900"
        >
          <Flame size={24} fill="white" className="animate-pulse" />
          <span>QUERO O VÍDEO AGORA</span>
          <ArrowRight size={20} className="ml-1" />
        </button>
      </div>
    </div>
  );
};

export default App;
