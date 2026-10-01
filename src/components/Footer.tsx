import React from 'react';
import { Tv, Heart, ShieldCheck, Film, BookOpen, Send, Mail, Lock } from 'lucide-react';
import { AUTHORS_DATA } from '../data/authors';
import { EstudioWebsLogo } from './EstudioWebsLogo';
import { useManager } from '../utils/managerAuth';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const { isManager, openManagerModal } = useManager();
  return (
    <footer className="w-full bg-[#0f172a] border-t border-slate-800 text-slate-300 mt-20">
      {/* Broadcaster brand accent banner */}
      <div className="h-1 w-full bg-gradient-to-r from-[#D80050] via-rose-500 to-indigo-600" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div
              onClick={() => onNavigate('/')}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-10 h-10 flex items-center justify-center shrink-0">
                <EstudioWebsLogo className="w-9 h-9 drop-shadow-md" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold tracking-tight text-white text-xl font-brand">
                  ESTÚDIO<span className="text-[#D80050] font-black">.WEBS</span>
                </span>
                <span className="text-[10px] tracking-widest text-slate-400 font-bold uppercase">
                  WEB EMISSORA DE FICÇÃO
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed font-reading max-w-md">
              O Estúdio Webs é uma emissora digital pioneira dedicada à exibição, catalogação e difusão de
              web novelas e web séries ficcionais. Um espaço oficial que valoriza a criatividade,
              o roteiro independente e os autores da dramaturgia virtual.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/60 text-[11px] font-semibold text-emerald-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Catálogo 100% Finalizado
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-rose-950/80 border border-rose-800/60 text-[11px] font-semibold text-rose-300">
                31 Produções Oficiais
              </span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-extrabold tracking-widest text-white uppercase mb-4 border-b border-slate-800 pb-2">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('/')}
                  className="hover:text-[#D80050] transition"
                >
                  Página Inicial
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/webs')}
                  className="hover:text-[#D80050] transition"
                >
                  Nossas Webs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/webs?categoria=Web%20novela')}
                  className="hover:text-[#D80050] transition"
                >
                  Web Novelas
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/webs?categoria=Web%20série')}
                  className="hover:text-[#D80050] transition"
                >
                  Web Séries
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/categorias')}
                  className="hover:text-[#D80050] transition"
                >
                  Categorias
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/autores')}
                  className="hover:text-[#D80050] transition"
                >
                  Galeria de Autores
                </button>
              </li>
            </ul>
          </div>

          {/* Institutional */}
          <div>
            <h4 className="text-xs font-extrabold tracking-widest text-white uppercase mb-4 border-b border-slate-800 pb-2">
              Institucional
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('/sobre')}
                  className="hover:text-[#D80050] transition"
                >
                  Sobre o Estúdio Webs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/contato')}
                  className="hover:text-[#D80050] transition"
                >
                  Fale Conosco
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/envie-seu-projeto')}
                  className="hover:text-[#D80050] transition flex items-center gap-1.5 text-rose-400 font-semibold"
                >
                  <Send className="w-3 h-3" />
                  <span>Envie seu Projeto</span>
                </button>
              </li>
              <li>
                <span className="text-slate-400 text-[11px] block mt-4">
                  Referência editorial:
                  <br />
                  <a
                    href="https://estudiowebs.wixsite.com/estudiowebs"
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-300 hover:text-[#D80050] underline decoration-slate-600"
                  >
                    estudiowebs.wixsite.com
                  </a>
                </span>
              </li>
            </ul>
          </div>

          {/* Autores */}
          <div>
            <h4 className="text-xs font-extrabold tracking-widest text-white uppercase mb-4 border-b border-slate-800 pb-2">
              Autores Oficiais
            </h4>
            <ul className="space-y-1.5 text-xs">
              {AUTHORS_DATA.map((author) => (
                <li key={author.id}>
                  <button
                    onClick={() => onNavigate(`/autores/${author.slug}`)}
                    className="hover:text-[#D80050] transition text-left block"
                  >
                    {author.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © {new Date().getFullYear()} <strong className="text-white">ESTÚDIO WEBS</strong>. Todos os direitos reservados.
            Obras ficcionais de teledramaturgia virtual.
          </div>

          <div className="flex items-center gap-4 text-[11px] flex-wrap">
            <span>Produzido para a comunidade de teledramaturgia virtual</span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <button
              onClick={openManagerModal}
              className={`flex items-center gap-1.5 transition py-1 px-2.5 rounded-lg border text-[11px] ${
                isManager
                  ? 'bg-rose-950/60 border-rose-800 text-rose-300 font-bold hover:bg-rose-900/60'
                  : 'text-slate-400 hover:text-slate-200 border-slate-800 hover:border-slate-700'
              }`}
              title="Acesso exclusivo para o gerenciador de capas e configurações"
            >
              <Lock className="w-3 h-3 text-[#D80050]" />
              <span>{isManager ? 'Painel do Gerenciador (Ativo)' : 'Acesso Gerenciador'}</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
