
import React from 'react';
import { Mail, ShieldCheck, Lock, CreditCard } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-20 pb-28 md:pb-12 px-4 border-t border-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          {/* Brand & Security */}
          <div className="space-y-6">
            <h4 className="text-2xl font-black text-white italic uppercase tracking-tighter">SECRET<span className="text-red-600">UNIVERSE</span></h4>
            <p className="text-gray-500 text-sm max-w-sm leading-relaxed">
              Líder em conteúdos exclusivos e produções de alta qualidade para o público exigente. 
              Garantimos anonimato e segurança em todas as transações.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex flex-col items-center gap-1 opacity-50">
                <Lock size={20} className="text-gray-400" />
                <span className="text-[10px] uppercase font-bold">SSL Secure</span>
              </div>
              <div className="flex flex-col items-center gap-1 opacity-50">
                <CreditCard size={20} className="text-gray-400" />
                <span className="text-[10px] uppercase font-bold">Discret Billing</span>
              </div>
            </div>
          </div>

          {/* Contact & Support */}
          <div className="flex flex-col md:items-end space-y-6">
            <h4 className="font-black text-white uppercase italic tracking-widest">Suporte 24/7</h4>
            <ul className="space-y-4 md:text-right">
              <li className="flex items-center md:justify-end gap-3 text-gray-400 text-sm hover:text-red-500 transition-colors">
                contato@secretuniverse.com <Mail size={18} />
              </li>
              <li className="flex items-center md:justify-end gap-3 text-gray-500 text-xs">
                Pagamento seguro através de Mercado Pago, Pix, VISA, MasterCard <ShieldCheck size={16} />
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-[10px] uppercase font-bold tracking-widest order-2 md:order-1">
            © 2024 SECRETUNIVERSE. Todos os direitos reservados.
          </p>
          <div className="flex gap-8 order-1 md:order-2">
            <a href="#" className="text-gray-600 text-[10px] uppercase font-bold hover:text-white transition-colors">Termos</a>
            <a href="#" className="text-gray-600 text-[10px] uppercase font-bold hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="text-gray-600 text-[10px] uppercase font-bold hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
        
        <p className="text-gray-700 text-[9px] mt-10 text-center leading-relaxed max-w-4xl mx-auto uppercase">
          Este site não é afiliado ao Facebook, Google ou Instagram. A fatura do seu cartão aparecerá com um nome genérico para garantir sua total privacidade. Conteúdo destinado estritamente a maiores de 18 anos.
        </p>
      </div>
    </footer>
  );
};
