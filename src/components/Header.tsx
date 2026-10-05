import React, { useState } from 'react';
import {
  Menu,
  X,
  Search,
  Tv,
  Film,
  BookOpen,
  Users,
  Info,
  Mail,
  Send,
  Radio
} from 'lucide-react';
import { EstudioWebsLogo } from './EstudioWebsLogo';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenSearch: () => void;
}

export function Header({ currentPath, onNavigate, onOpenSearch }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'INÍCIO', path: '/' },
    { label: 'WEBS', path: '/webs' },
    { label: 'COMUNIDADE', path: '/comunidade' },
    { label: 'CATEGORIAS', path: '/categorias' },
    { label: 'AUTORES', path: '/autores' },
    { label: 'SOBRE', path: '/sobre' },
    { label: 'CONTATO', path: '/contato' },
  ];

  const handleNav = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
  };

  const isActive = (path: string) => {
    if (path === '/' && currentPath === '/') return true;
    if (path !== '/' && currentPath.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      {/* Top Broadcaster Announcement Bar */}
      <div className="bg-[#0f172a] border-b border-slate-800 py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[11px] font-semibold text-slate-300">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-slate-200 uppercase tracking-widest font-bold">
              ESTÚDIO WEBS • EMISSORA DE FICÇÃO & TELEDRAMATURGIA VIRTUAL
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-slate-400">
            <span>Catálogo Oficial de Web Séries e Web Novelas</span>
            <span className="text-emerald-400 font-bold">• 100% Finalizadas</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo - Only Official Logo */}
          <div
            onClick={() => handleNav('/')}
            className="flex items-center cursor-pointer group select-none py-1"
            title="Estúdio Webs"
          >
            <div className="h-11 sm:h-12 w-14 sm:w-16 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shrink-0">
              <EstudioWebsLogo className="w-full h-full object-contain drop-shadow-xs" />
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              const isComunidade = link.path === '/comunidade';

              if (isComunidade) {
                return (
                  <button
                    key={link.path}
                    onClick={() => handleNav(link.path)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-black tracking-wider uppercase transition-all duration-200 relative flex items-center gap-1.5 shadow-xs cursor-pointer ${
                      active
                        ? 'bg-[#512f2e] text-[#efae54] border-2 border-[#efae54] shadow-[0_0_12px_rgba(239,174,84,0.35)]'
                        : 'bg-[#512f2e] text-[#efae54] border border-[#efae54]/60 hover:bg-[#633a39] hover:border-[#efae54] hover:shadow-[0_0_8px_rgba(239,174,84,0.25)]'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#efae54] animate-pulse" />
                    <span>{link.label}</span>
                    {active && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#efae54] rounded-full shadow-[0_0_6px_#efae54]" />
                    )}
                  </button>
                );
              }

              return (
                <button
                  key={link.path}
                  onClick={() => handleNav(link.path)}
                  className={`px-3 py-2 rounded-lg text-xs font-bold tracking-wider uppercase transition-all duration-200 relative ${
                    active
                      ? 'text-[#D80050] bg-rose-50 border border-rose-200'
                      : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#D80050] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200/80 border border-slate-200 text-slate-700 hover:text-slate-900 text-xs font-semibold transition"
              title="Buscar obras, autores e categorias"
            >
              <Search className="w-4 h-4 text-slate-500" />
              <span className="hidden sm:inline">Buscar...</span>
              <kbd className="hidden md:inline text-[10px] bg-white text-slate-500 px-1.5 py-0.5 rounded border border-slate-300 font-sans shadow-xs">
                ⌘K
              </kbd>
            </button>

            {/* Envie seu Projeto CTA */}
            <button
              onClick={() => handleNav('/envie-seu-projeto')}
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#D80050] hover:bg-[#be0044] text-white text-xs font-extrabold tracking-wider uppercase transition shadow-sm shadow-[#D80050]/20"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Envie seu projeto</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200 transition"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-lg">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            const isComunidade = link.path === '/comunidade';

            if (isComunidade) {
              return (
                <button
                  key={link.path}
                  onClick={() => handleNav(link.path)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-black tracking-wider uppercase text-left transition ${
                    active
                      ? 'bg-[#512f2e] text-[#efae54] border-2 border-[#efae54] shadow-md'
                      : 'bg-[#512f2e] text-[#efae54] border border-[#efae54]/60 hover:bg-[#633a39]'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#efae54] animate-pulse" />
                    <span>{link.label}</span>
                  </div>
                  {active && <span className="w-2 h-2 rounded-full bg-[#efae54]" />}
                </button>
              );
            }

            return (
              <button
                key={link.path}
                onClick={() => handleNav(link.path)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-bold tracking-wider uppercase text-left transition ${
                  active
                    ? 'bg-rose-50 text-[#D80050] border border-rose-200'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <span>{link.label}</span>
                {active && <span className="w-2 h-2 rounded-full bg-[#D80050]" />}
              </button>
            );
          })}

          <div className="pt-2 border-t border-slate-200 flex flex-col gap-2">
            <button
              onClick={() => handleNav('/envie-seu-projeto')}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[#D80050] hover:bg-[#be0044] text-white font-bold text-xs uppercase tracking-wider transition shadow-sm"
            >
              <Send className="w-4 h-4" />
              <span>Envie seu projeto para o Estúdio Webs</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
