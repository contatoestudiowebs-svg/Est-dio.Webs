import React from 'react';
import { BookOpen, Film, Tv, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PRODUCTIONS_DATA } from '../data/productions';
import { SEOHead } from '../components/SEOHead';

interface CategoriesPageProps {
  onNavigate: (path: string) => void;
}

export function CategoriesPage({ onNavigate }: CategoriesPageProps) {
  const novelas = PRODUCTIONS_DATA.filter((p) => p.category === 'Web novela');
  const series = PRODUCTIONS_DATA.filter((p) => p.category === 'Web série');

  return (
    <div className="min-h-screen py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SEOHead
        title="Categorias | Estúdio Webs"
        description="Conheça as duas principais vertentes de teledramaturgia virtual do Estúdio Webs: Web Novelas e Web Séries."
        canonicalPath="/categorias"
      />

      <div className="mb-10 pb-6 border-b border-slate-200">
        <span className="text-xs uppercase tracking-widest text-[#D80050] font-extrabold">
          Formatos e Vertentes
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 font-brand tracking-tight mt-1">
          CATEGORIAS
        </h1>
        <p className="text-sm text-slate-600 mt-1">
          Explore o acervo do Estúdio Webs classificado por seu formato editorial oficial.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
        {/* Category: Web Novela */}
        <div className="rounded-2xl bg-white border border-rose-200 p-8 shadow-sm relative overflow-hidden flex flex-col justify-between group">
          <div className="absolute top-0 right-0 w-48 h-48 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />

          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="p-3.5 rounded-xl bg-rose-50 text-[#D80050] border border-rose-200">
                <BookOpen className="w-8 h-8" />
              </div>
              <span className="px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-[#D80050] text-xs font-bold uppercase tracking-wider">
                {novelas.length} Obras Oficiais
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-brand mb-3">
              WEB NOVELAS
            </h2>

            <p className="text-sm text-slate-700 leading-relaxed font-reading mb-6">
              Obras de teledramaturgia contínua estruturadas em <strong>Capítulos</strong>. Apresentam
              tramas paralelas elaboradas, núcleos de personagens profundos, romances marcantes,
              conflitos familiares e ganchos dramáticos clássicos do formato folhetinesco.
            </p>

            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 mb-6">
              <div className="text-xs font-bold uppercase tracking-wider text-[#D80050] mb-2">
                Destaques da Categoria:
              </div>
              <ul className="text-xs text-slate-700 space-y-1.5">
                {novelas.slice(0, 4).map((n) => (
                  <li key={n.id} className="flex items-center justify-between">
                    <span className="font-semibold text-slate-900 truncate mr-2">• {n.title}</span>
                    <span className="text-slate-500 text-[11px] shrink-0">{n.totalUnits} capítulos</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <button
            onClick={() => onNavigate('/webs?categoria=Web%20novela')}
            className="w-full py-3.5 rounded-xl bg-[#D80050] hover:bg-[#be0044] text-white font-bold text-xs uppercase tracking-wider transition shadow-md shadow-[#D80050]/20 flex items-center justify-center gap-2"
          >
            <span>Ver Todas as Web Novelas ({novelas.length})</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Category: Web Série */}
        <div className="rounded-2xl bg-white border border-blue-200 p-8 shadow-sm relative overflow-hidden flex flex-col justify-between group">
          <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="p-3.5 rounded-xl bg-blue-50 text-blue-600 border border-blue-200">
                <Film className="w-8 h-8" />
              </div>
              <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider">
                {series.length} Obras Oficiais
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-brand mb-3">
              WEB SÉRIES
            </h2>

            <p className="text-sm text-slate-700 leading-relaxed font-reading mb-6">
              Produções audiovisuais e narrativas serializadas estruturadas em <strong>Episódios</strong>.
              Foco em ritmo ágil, temporadas conceituais, tramas policiais, investigativas, políticas,
              ficção científica, fantasia sombria e comédias de situação.
            </p>

            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 mb-6">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
                Destaques da Categoria:
              </div>
              <ul className="text-xs text-slate-700 space-y-1.5">
                {series.slice(0, 4).map((s) => (
                  <li key={s.id} className="flex items-center justify-between">
                    <span className="font-semibold text-slate-900 truncate mr-2">• {s.title}</span>
                    <span className="text-slate-500 text-[11px] shrink-0">{s.totalUnits} episódios</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <button
            onClick={() => onNavigate('/webs?categoria=Web%20série')}
            className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition shadow-md shadow-blue-600/20 flex items-center justify-center gap-2"
          >
            <span>Ver Todas as Web Séries ({series.length})</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
