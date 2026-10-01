import React, { useState } from 'react';
import { HeroDestaque } from '../components/HeroDestaque';
import { WebCard } from '../components/WebCard';
import { PRODUCTIONS_DATA, getFeaturedProductions } from '../data/productions';
import { AUTHORS_DATA, getAuthorWorksCount } from '../data/authors';
import {
  Tv,
  Film,
  BookOpen,
  Users,
  ArrowRight,
  Send,
  CheckCircle2,
  Layers,
  ChevronRight
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [activeTab, setActiveTab] = useState<'novelas' | 'series'>('novelas');

  const featuredProductions = getFeaturedProductions();

  const novelas = PRODUCTIONS_DATA.filter((p) => p.category === 'Web novela');
  const series = PRODUCTIONS_DATA.filter((p) => p.category === 'Web série');
  const currentProductions = activeTab === 'novelas' ? novelas : series;

  // Stats calculation
  const totalNovelCount = novelas.length;
  const totalSeriesCount = series.length;

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Estúdio Webs - Web Emissora de Ficção"
        description="Plataforma oficial do Estúdio Webs: catálogo de web novelas e web séries, capítulos, episódios e autores da teledramaturgia virtual."
        canonicalPath="/"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Estúdio Webs',
          alternateName: 'estúdio.webs',
          url: window.location.origin,
          description:
            'Web Emissora de Ficção especializada na exibição e catalogação de web novelas e web séries virtuais.',
        }}
      />

      {/* Hero Showcase with Featured Productions */}
      <HeroDestaque productions={featuredProductions} onNavigate={onNavigate} />

      {/* Broadcaster Metrics / Highlights Bar */}
      <section className="bg-white border-b border-slate-200 py-8 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 flex items-center gap-3 shadow-xs">
              <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 border border-blue-200">
                <Tv className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-slate-900 font-brand">31</div>
                <div className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">
                  Obras Oficiais
                </div>
              </div>
            </div>

            <div
              onClick={() => {
                setActiveTab('novelas');
                document.getElementById('secao-obras')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-slate-50 hover:bg-rose-50/60 p-4 rounded-xl border border-slate-200/80 hover:border-rose-300 cursor-pointer transition flex items-center gap-3 shadow-xs group"
            >
              <div className="p-2.5 rounded-lg bg-rose-50 text-[#D80050] border border-rose-200 group-hover:scale-105 transition">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-slate-900 font-brand">
                  {totalNovelCount}
                </div>
                <div className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold group-hover:text-[#D80050] transition">
                  Ver Web Novelas →
                </div>
              </div>
            </div>

            <div
              onClick={() => {
                setActiveTab('series');
                document.getElementById('secao-obras')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-slate-50 hover:bg-blue-50/60 p-4 rounded-xl border border-slate-200/80 hover:border-blue-300 cursor-pointer transition flex items-center gap-3 shadow-xs group"
            >
              <div className="p-2.5 rounded-lg bg-indigo-50 text-indigo-600 border border-indigo-200 group-hover:scale-105 transition">
                <Film className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-slate-900 font-brand">
                  {totalSeriesCount}
                </div>
                <div className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold group-hover:text-blue-600 transition">
                  Ver Web Séries →
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 flex items-center gap-3 shadow-xs">
              <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-200">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-slate-900 font-brand">100%</div>
                <div className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">
                  Finalizadas
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Catalog Section with Dedicated Tabs: Web Novelas & Web Séries */}
      <section id="secao-obras" className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-1.5">
              {activeTab === 'novelas' ? (
                <span className="flex items-center gap-1.5 text-[#D80050]">
                  <BookOpen className="w-4 h-4" />
                  <span>Dramaturgia Virtual • Histórias em Capítulos</span>
                </span>
              ) : (
                <span className="flex items-center gap-1.5 text-blue-600">
                  <Film className="w-4 h-4" />
                  <span>Séries Digitais • Temporadas e Episódios</span>
                </span>
              )}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-brand tracking-tight">
              {activeTab === 'novelas' ? 'WEB NOVELAS' : 'WEB SÉRIES'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              {activeTab === 'novelas'
                ? `Aba de Web Novelas: ${totalNovelCount} obras completas da nossa teledramaturgia virtual para ler agora.`
                : `Aba de Web Séries: ${totalSeriesCount} séries completas e dinâmicas com episódios para ler agora.`}
            </p>
          </div>

          {/* Dedicated Tab Switcher */}
          <div className="flex items-center p-1.5 bg-slate-200/90 rounded-2xl border border-slate-300 shadow-inner sm:w-auto w-full">
            <button
              onClick={() => setActiveTab('novelas')}
              className={`flex-1 sm:flex-initial px-6 py-3 rounded-xl font-black text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2.5 ${
                activeTab === 'novelas'
                  ? 'bg-[#D80050] text-white shadow-md shadow-[#D80050]/25 scale-[1.02]'
                  : 'text-slate-700 hover:text-slate-950 hover:bg-white/50'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Web Novelas</span>
              <span
                className={`text-xs px-2 py-0.5 rounded-full font-bold transition ${
                  activeTab === 'novelas'
                    ? 'bg-white/20 text-white'
                    : 'bg-slate-300 text-slate-700'
                }`}
              >
                {totalNovelCount}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('series')}
              className={`flex-1 sm:flex-initial px-6 py-3 rounded-xl font-black text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2.5 ${
                activeTab === 'series'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25 scale-[1.02]'
                  : 'text-slate-700 hover:text-slate-950 hover:bg-white/50'
              }`}
            >
              <Film className="w-4 h-4" />
              <span>Web Séries</span>
              <span
                className={`text-xs px-2 py-0.5 rounded-full font-bold transition ${
                  activeTab === 'series'
                    ? 'bg-white/20 text-white'
                    : 'bg-slate-300 text-slate-700'
                }`}
              >
                {totalSeriesCount}
              </span>
            </button>
          </div>
        </div>

        {/* Productions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentProductions.map((production) => (
            <WebCard
              key={production.id}
              production={production}
              onNavigate={onNavigate}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => onNavigate('/webs')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 hover:text-[#D80050] font-extrabold text-xs tracking-wider uppercase border border-slate-300 hover:border-[#D80050] transition shadow-xs"
          >
            <span>Explorar Catálogo Avançado e Filtros</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Editorial Row: Autores em Destaque */}
      <section className="bg-white py-14 border-t border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-200">
            <div>
              <div className="text-xs font-bold text-[#D80050] uppercase tracking-widest mb-1 flex items-center gap-1.5">
                <Users className="w-4 h-4" />
                <span>Nossos Criadores</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 uppercase tracking-tight">
                AUTORES DO ESTÚDIO WEBS
              </h2>
            </div>

            <button
              onClick={() => onNavigate('/autores')}
              className="text-xs text-[#D80050] hover:text-[#be0044] font-bold uppercase tracking-wider flex items-center gap-1 transition"
            >
              <span>Ver Todos</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {AUTHORS_DATA.map((author) => {
              const counts = getAuthorWorksCount(author.name);
              return (
                <div
                  key={author.id}
                  onClick={() => onNavigate(`/autores/${author.slug}`)}
                  className="p-5 rounded-xl bg-slate-50 hover:bg-white border border-slate-200/90 hover:border-slate-300 cursor-pointer transition shadow-xs hover:shadow-md group flex items-center justify-between"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center text-[#D80050] font-black text-lg group-hover:scale-105 transition shadow-xs">
                      {author.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-base group-hover:text-[#D80050] transition">
                        {author.name}
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        <strong className="text-slate-800">{counts.total} obras</strong>{' '}
                        <span className="text-slate-500">
                          ({counts.novelas} novelas, {counts.series} séries)
                        </span>
                      </p>
                    </div>
                  </div>

                  <span className="p-2 rounded-lg bg-white border border-slate-200 text-slate-500 group-hover:text-white group-hover:bg-[#D80050] group-hover:border-[#D80050] transition shadow-xs">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Banner "Envie seu Projeto" */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-gradient-to-r from-slate-900 via-[#101726] to-slate-950 border border-slate-800 p-8 sm:p-12 overflow-hidden shadow-xl text-white">
          <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-rose-600/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-950/80 border border-rose-600/40 text-rose-300 text-xs font-extrabold uppercase tracking-wider mb-4">
              <Send className="w-3.5 h-3.5" />
              Espaço Aberto para Roteiristas
            </span>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-brand tracking-tight mb-3">
              Tem uma Web Série ou Web Novela?
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed mb-6 font-reading">
              O Estúdio Webs apoia e divulga a produção independente de teledramaturgia digital.
              Se você é autor ou roteirista, envie a sinopse e o projeto da sua obra para análise da nossa equipe editorial.
            </p>

            <button
              onClick={() => onNavigate('/envie-seu-projeto')}
              className="px-6 py-3.5 rounded-xl bg-[#D80050] hover:bg-[#be0044] text-white font-extrabold text-xs uppercase tracking-wider transition shadow-lg shadow-[#D80050]/30 inline-flex items-center gap-2"
            >
              <span>Submeter Projeto de Ficção</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
