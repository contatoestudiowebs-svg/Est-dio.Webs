import React from 'react';
import { AUTHORS_DATA, getAuthorWorksCount } from '../data/authors';
import { getProductionsByAuthor } from '../data/productions';
import { User, BookOpen, Film, ArrowRight, Sparkles } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

interface AuthorsPageProps {
  onNavigate: (path: string) => void;
}

export function AuthorsPage({ onNavigate }: AuthorsPageProps) {
  return (
    <div className="min-h-screen py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SEOHead
        title="Autores | Estúdio Webs"
        description="Conheça os autores oficiais do catálogo do Estúdio Webs: Fred Reids, Fernando Ricoboni, Edney Matias, Liz Santos, Everton B Dutra e Guilhardo Almeida."
        canonicalPath="/autores"
      />

      {/* Header */}
      <div className="mb-10 pb-6 border-b border-slate-200">
        <span className="text-xs uppercase tracking-widest text-[#D80050] font-extrabold">
          Galeria Oficial
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 font-brand tracking-tight mt-1">
          AUTORES
        </h1>
        <p className="text-sm text-slate-600 mt-1">
          Os criadores por trás das produções e universos do Estúdio Webs.
        </p>
      </div>

      {/* Grid of Authors */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {AUTHORS_DATA.map((author) => {
          const counts = getAuthorWorksCount(author.name);
          const works = getProductionsByAuthor(author.name);

          return (
            <div
              key={author.id}
              onClick={() => onNavigate(`/autores/${author.slug}`)}
              className="rounded-2xl bg-white hover:bg-slate-50/90 border border-slate-200 hover:border-slate-300 p-6 shadow-xs cursor-pointer transition-all duration-300 hover:shadow-md hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div>
                {/* Author Avatar */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-16 h-16 rounded-2xl bg-rose-50 border-2 border-rose-200 flex items-center justify-center text-[#D80050] font-black text-2xl shadow-xs group-hover:scale-105 transition">
                    {author.photoUrl ? (
                      <img
                        src={author.photoUrl}
                        alt={author.name}
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    ) : (
                      author.name.charAt(0)
                    )}
                  </div>

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#D80050] bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                      Autor Oficial
                    </span>
                    <h3 className="text-xl font-extrabold text-slate-900 font-brand group-hover:text-[#D80050] transition mt-1">
                      {author.name}
                    </h3>
                    <div className="text-xs text-slate-500 mt-0.5">
                      {counts.total} produções catalogadas
                    </div>
                  </div>
                </div>

                {/* Counts Breakdown Badges */}
                <div className="grid grid-cols-2 gap-2 mb-5">
                  <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#D80050]" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">{counts.novelas}</div>
                      <div className="text-[10px] text-slate-500">Web novelas</div>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200 flex items-center gap-2">
                    <Film className="w-4 h-4 text-blue-600" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">{counts.series}</div>
                      <div className="text-[10px] text-slate-500">Web séries</div>
                    </div>
                  </div>
                </div>

                {/* Preview list of works */}
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Obras do Autor:
                  </h4>
                  <ul className="text-xs text-slate-600 space-y-1.5">
                    {works.slice(0, 3).map((w) => (
                      <li key={w.id} className="flex items-center justify-between text-[11px]">
                        <span className="truncate text-slate-800 group-hover:text-[#D80050] transition">
                          • {w.title}
                        </span>
                        <span className="text-slate-400 shrink-0 ml-2">
                          {w.totalUnits} {w.unitType}
                        </span>
                      </li>
                    ))}
                    {works.length > 3 && (
                      <li className="text-[10px] text-[#D80050] font-semibold pt-0.5">
                        + mais {works.length - 3} produções...
                      </li>
                    )}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700 group-hover:text-slate-950">
                <span>Ver Perfil e Obras</span>
                <span className="flex items-center gap-1 text-[#D80050] group-hover:translate-x-1 transition-transform">
                  <span>Acessar</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
