import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Film, BookOpen, User, ArrowRight } from 'lucide-react';
import { PRODUCTIONS_DATA } from '../data/productions';
import { AUTHORS_DATA } from '../data/authors';
import { WebProduction, Author } from '../types';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
}

export function GlobalSearchModal({ isOpen, onClose, onNavigate }: GlobalSearchModalProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open handled outside, but let's handle Escape
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const normalizedQuery = query.trim().toLowerCase();

  // Search productions by title, synopsis, author or category
  const matchedProductions: WebProduction[] = normalizedQuery
    ? PRODUCTIONS_DATA.filter((p) => {
        return (
          p.title.toLowerCase().includes(normalizedQuery) ||
          p.author.toLowerCase().includes(normalizedQuery) ||
          p.category.toLowerCase().includes(normalizedQuery) ||
          p.synopsis.toLowerCase().includes(normalizedQuery)
        );
      })
    : [];

  // Search authors
  const matchedAuthors: Author[] = normalizedQuery
    ? AUTHORS_DATA.filter((a) => a.name.toLowerCase().includes(normalizedQuery))
    : [];

  // Check if query matches category directly
  const matchesNovela = normalizedQuery && 'web novela'.includes(normalizedQuery);
  const matchesSerie = normalizedQuery && 'web série'.includes(normalizedQuery) || 'web serie'.includes(normalizedQuery);

  const handleSelect = (path: string) => {
    onNavigate(path);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200 bg-slate-50/80">
          <Search className="w-5 h-5 text-[#D80050] shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Pesquise por títulos, autores ou categorias (ex: Fred, Pandorum, Web novela)..."
            className="w-full bg-transparent text-sm sm:text-base text-slate-900 placeholder-slate-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-700 mr-2"
              aria-label="Limpar"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs font-semibold px-2 py-1 rounded bg-white text-slate-600 hover:text-slate-900 border border-slate-200 shadow-xs"
          >
            ESC
          </button>
        </div>

        {/* Results Container */}
        <div className="overflow-y-auto p-4 space-y-6 bg-white">
          {!normalizedQuery && (
            <div className="py-8 text-center text-slate-500 text-xs">
              <p className="font-semibold text-slate-700 mb-2">Exemplos de pesquisa no Estúdio Webs:</p>
              <div className="flex flex-wrap justify-center gap-2 mt-2">
                {['Caminho ao Poder', 'Fred', 'Fernando Ricoboni', 'Web novela', 'Web série', 'Pandorum', 'Terra de Bravos'].map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => setQuery(suggestion)}
                    className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-rose-50 text-slate-700 hover:text-[#D80050] border border-slate-200 text-[11px] transition"
                  >
                    "{suggestion}"
                  </button>
                ))}
              </div>
            </div>
          )}

          {normalizedQuery && (
            <>
              {/* Category Quick Filters if matched */}
              {(matchesNovela || matchesSerie) && (
                <div>
                  <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-slate-500 mb-2">
                    Categorias
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {matchesNovela && (
                      <button
                        onClick={() => handleSelect('/webs?categoria=Web%20novela')}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-rose-50 hover:bg-rose-100 border border-rose-200 text-[#D80050] text-xs font-bold transition shadow-xs"
                      >
                        <BookOpen className="w-4 h-4" />
                        <span>Ver todas as Web Novelas (11 obras)</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                    {matchesSerie && (
                      <button
                        onClick={() => handleSelect('/webs?categoria=Web%20série')}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-700 text-xs font-bold transition shadow-xs"
                      >
                        <Film className="w-4 h-4" />
                        <span>Ver todas as Web Séries (20 obras)</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              )}

              {/* Matched Authors */}
              {matchedAuthors.length > 0 && (
                <div>
                  <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-slate-500 mb-2">
                    Autores Encontrados ({matchedAuthors.length})
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {matchedAuthors.map((author) => (
                      <div
                        key={author.id}
                        onClick={() => handleSelect(`/autores/${author.slug}`)}
                        className="p-3 rounded-xl bg-slate-50 hover:bg-rose-50/50 border border-slate-200 hover:border-rose-200 cursor-pointer flex items-center justify-between transition group shadow-xs"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center text-[#D80050]">
                            <User className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-900 group-hover:text-[#D80050] transition">
                              {author.name}
                            </div>
                            <div className="text-[10px] text-slate-500">Ver obras publicadas</div>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#D80050] transition" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Matched Productions */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-slate-500">
                    Obras Encontradas ({matchedProductions.length})
                  </h4>
                  {matchedProductions.length > 0 && (
                    <span className="text-[10px] text-slate-500 font-medium">
                      Clique para abrir a página da produção
                    </span>
                  )}
                </div>

                {matchedProductions.length === 0 ? (
                  <div className="py-6 text-center text-slate-600 text-xs">
                    Nenhuma obra encontrada para "{query}". Tente buscar por autor, categoria ou parte do título.
                  </div>
                ) : (
                  <div className="space-y-2">
                    {matchedProductions.map((p) => {
                      const isSerie = p.category === 'Web série';
                      return (
                        <div
                          key={p.id}
                          onClick={() => handleSelect(`/webs/${p.slug}`)}
                          className="p-3 rounded-xl bg-slate-50 hover:bg-rose-50/40 border border-slate-200 hover:border-rose-200 cursor-pointer flex items-center justify-between transition group shadow-xs"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-12 rounded bg-slate-200 border border-slate-300 flex items-center justify-center text-slate-600 shrink-0">
                              {isSerie ? <Film className="w-4 h-4 text-blue-600" /> : <BookOpen className="w-4 h-4 text-[#D80050]" />}
                            </div>

                            <div className="text-left">
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-bold text-slate-900 group-hover:text-[#D80050] transition">
                                  {p.title}
                                </span>
                                <span
                                  className={`text-[9px] font-bold uppercase px-1.5 py-0.5 rounded ${
                                    isSerie
                                      ? 'bg-blue-50 text-blue-700 border border-blue-200'
                                      : 'bg-rose-50 text-[#D80050] border border-rose-200'
                                  }`}
                                >
                                  {p.category}
                                </span>
                              </div>
                              <div className="text-xs text-slate-600 mt-0.5">
                                por <span className="text-slate-800 font-semibold">{p.author}</span> •{' '}
                                <span className="text-slate-600 font-medium">{p.totalUnits} {p.unitType}</span>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 shrink-0">
                            <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-semibold hidden sm:inline">
                              {p.status}
                            </span>
                            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#D80050] transition" />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
