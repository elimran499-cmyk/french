import React from 'react';
import { Tv, ShieldCheck, Heart, Lock, ExternalLink } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { WHATSAPP_NUMBER } from '../data/mockData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-12 sm:pt-16 pb-10 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 sm:gap-10 pb-10 sm:pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Brand */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 via-cyan-500 to-pink-500 p-0.5 shadow-lg flex items-center justify-center">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Tv className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <span className="font-display text-2xl text-slate-100 tracking-tight">
                SWIV<span className="text-gradient">TV</span>
              </span>
            </a>

            <p className="text-xs text-slate-400 leading-relaxed">
              80 000+ chaînes en direct et 200 000+ films et séries en 4K. Un service pensé pour la France.
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-400 font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>99,9 % de disponibilité garantie</span>
            </div>
          </div>

          {/* Col 2: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-slate-100 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#hero" className="hover:text-slate-100 transition-colors">Accueil</a></li>
              <li><a href="#vod" className="hover:text-slate-100 transition-colors">Séries TV</a></li>
              <li><a href="#vod" className="hover:text-slate-100 transition-colors">Films & Cinéma</a></li>
              <li><a href="#channels" className="hover:text-slate-100 transition-colors">Chaînes en direct</a></li>
              <li><a href="#pricing" className="hover:text-purple-600 font-bold transition-colors">Tarifs</a></li>
              <li><a href="#features" className="hover:text-slate-100 transition-colors">Comment ça marche</a></li>
              <li><a href="#faq" className="hover:text-slate-100 transition-colors">FAQ & Support</a></li>
            </ul>
          </div>

          {/* Col 3: Supported Devices */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-slate-100 uppercase tracking-wider">
              Appareils compatibles
            </h4>
            <ul className="space-y-2 text-xs">
              <li>Smart TV (Samsung, LG, Sony)</li>
              <li>Amazon Firestick & Fire TV</li>
              <li>Android TV & Xiaomi Box</li>
              <li>Apple TV 4K & iOS App</li>
              <li>MAG Portal & Formuler</li>
              <li>PC, MacOS & Web Player</li>
            </ul>
          </div>

          {/* Col 4: Payment Methods & Activation */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <h4 className="font-heading font-bold text-sm text-slate-100 uppercase tracking-wider">
              Support WhatsApp
            </h4>
            <p className="text-xs text-slate-400">
              Une équipe francophone disponible 24h/24 et 7j/7.
            </p>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Bonjour ! J’ai besoin d’aide avec SwivTV.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500/20 text-emerald-500 border border-emerald-500/30 text-xs font-bold hover:bg-emerald-950 transition-all"
            >
              <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
              <span>Contacter un conseiller</span>
            </a>

            <div className="pt-2">
              <span className="text-[11px] text-slate-500 block mb-2 font-semibold">Paiements acceptés :</span>
              <div className="flex flex-wrap items-center gap-2 text-[10px] text-slate-400 font-bold">
                <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800">PayPal</span>
                <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800">Carte bancaire</span>
                <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800">Crypto / USDT</span>
                <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800">Apple Pay</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center md:text-left">
          <p>
            © {currentYear} SwivTV 4K IPTV. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            <a href="#faq" className="hover:text-slate-400">Confidentialité</a>
            <span>•</span>
            <a href="#faq" className="hover:text-slate-400">Conditions</a>
            <span>•</span>
            <a href="#faq" className="hover:text-slate-400">Remboursement</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
