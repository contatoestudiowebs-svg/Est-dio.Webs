import React, { useState, useMemo } from 'react';
import { WebCard } from '../components/WebCard';
import { PRODUCTIONS_DATA } from '../data/productions';
import { AUTHORS_DATA } from '../data/authors';
import { ProductionCategory } from '../types';
import {
  Filter,
  Film,
  BookOpen,
  Search,
  X,
  SlidersHorizontal,
  ArrowUpDown,
  CheckCircle,
  RotateCcw
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

interface CatalogPageProps {
  onNavigate: (path: string) => void;
  initialCategory?: ProductionCategory;
}

export function CatalogPage({ onNavigate, initialCategory }: CatalogPageProps) {
  const [categoryFilter, setCategoryFilter] = useState<'TODAS' | ProductionCategory>(
    initialCategory || 'TODAS'
  );
  const [selectedAuthor, setSelectedAuthor] = useState<string>('TODOS');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'title' | 'units-desc' | 'units-asc' | 'author'>('title');
  const [onlyCompleted, setOnlyCompleted] = useState<boolean>(true);
  const [unitCountFilter, setUnitCountFilter] = useState<'ALL' | 'SHORT' | 'MEDIUM' | 'LONG'>('ALL');

  // Filter logic
  const filtered = useMemo(() => {
    return PRODUCTIONS_DATA.filter((p) => {
      // 1. Category
      if (categoryFilter !== 'TODAS' && p.category !== categoryFilter) return false;

      // 2. Author
      if (selectedAuthor !== 'TODOS' && p.author.toLowerCase() !== selectedAuthor.toLowerCase()) {
        return false;
      }

      // 3. Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matches =
          p.title.toLowerCase().includes(q) ||
          p.author.toLowerCase().includes(q) ||
          p.synopsis.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q);
        if (!matches) return false;
      }

      // 4. Unit count filter
      if (unitCountFilter === 'SHORT' && p.totalUnits > 8) return false;
      if (unitCountFilter === 'MEDIUM' && (p.totalUnits < 9 || p.totalUnits > 18)) return false;
      if (unitCountFilter === 'LONG' && p.totalUnits <= 18) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'title') return a.title.localeCompare(b.title, 'pt-BR');
      if (sortBy === 'author') return a.author.localeCompare(b.author, 'pt-BR');
      if (sortBy === 'units-desc') return b.totalUnits - a.totalUnits;
      if (sortBy === 'units-asc') return a.totalUnits - b.totalUnits;
      return 0;
    });
  }, [categoryFilter, selectedAuthor, searchQuery, sortBy, unitCountFilter]);

  const resetFilters = () => {
    setCategoryFilter('TODAS');
    setSelectedAuthor('TODOS');
    setSearchQuery('');
    setSortBy('title');
    setUnitCountFilter('ALL');
  };

  const hasActiveFilters =
    categoryFilter !== 'TODAS' ||
    selectedAuthor !== 'TODOS' ||
    searchQuery.trim() !== '' ||
    unitCountFilter !== 'ALL';

  return (
    <div className="min-h-screen py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SEOHead
        title="Nossas Webs | Catálogo Oficial | Estúdio Webs"
        description="Explore o catálogo completo de 31 produções de ficção do Estúdio Webs: Web novelas e Web séries finalizadas de grandes autores."
        canonicalPath="/webs"
      />

      {/* Header */}
      <div className="mb-8 pb-6 border-b border-slate-200">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#D80050] font-extrabold">
              Programação Estúdio Webs
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 font-brand tracking-tight mt-1">
              NOSSAS WEBS
            </h1>
            <p className="text-sm text-slate-600 mt-1">
              Catálogo oficial de produções ficcionais da dramaturgia virtual.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 font-semibold shadow-xs">
              Mostrando <strong className="text-slate-900">{filtered.length}</strong> de{' '}
              <strong className="text-slate-900">{PRODUCTIONS_DATA.length}</strong> produções
            </span>
          </div>
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 mb-8 shadow-sm space-y-4">
        {/* Row 1: Primary Category Tabs & Search Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          {/* Main Category Tabs */}
          <div className="flex items-center flex-wrap gap-2">
            <button
              onClick={() => setCategoryFilter('TODAS')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition ${
                categoryFilter === 'TODAS'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-50 text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Todas as Webs ({PRODUCTIONS_DATA.length})
            </button>
            <button
              onClick={() => setCategoryFilter('Web novela')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition flex items-center gap-2 ${
                categoryFilter === 'Web novela'
                  ? 'bg-[#D80050] text-white shadow-xs'
                  : 'bg-slate-50 text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Web Novela</span>
            </button>
            <button
              onClick={() => setCategoryFilter('Web série')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition flex items-center gap-2 ${
                categoryFilter === 'Web série'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-50 text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Film className="w-4 h-4" />
              <span>Web Série</span>
            </button>
          </div>

          {/* Search Box */}
          <div className="relative min-w-[260px] sm:min-w-[320px]">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filtrar por título, autor..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-8 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#D80050] focus:bg-white"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Row 2: Secondary Dropdowns */}
        <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex flex-wrap items-center gap-3">
            {/* Author filter */}
            <div className="flex items-center gap-2">
              <span className="text-slate-500 font-medium">Autor:</span>
              <select
                value={selectedAuthor}
                onChange={(e) => setSelectedAuthor(e.target.value)}
                className="bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-800 text-xs focus:outline-none focus:border-[#D80050]"
              >
                <option value="TODOS">Todos os Autores</option>
                {AUTHORS_DATA.map((author) => (
                  <option key={author.id} value={author.name}>
                    {author.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Chapters / Episodes count filter */}
            <div className="flex items-center gap-2">
              <span className="text-slate-500 font-medium">Extensão:</span>
              <select
                value={unitCountFilter}
                onChange={(e) => setUnitCountFilter(e.target.value as any)}
                className="bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-800 text-xs focus:outline-none focus:border-[#D80050]"
              >
                <option value="ALL">Todas as extensões</option>
                <option value="SHORT">Curtas (até 8 cap/ep)</option>
                <option value="MEDIUM">Médias (9 a 18 cap/ep)</option>
                <option value="LONG">Longas (19+ cap/ep)</option>
              </select>
            </div>

            {/* Sort order */}
            <div className="flex items-center gap-2">
              <span className="text-slate-500 font-medium">Ordenar:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-800 text-xs focus:outline-none focus:border-[#D80050]"
              >
                <option value="title">Título (A-Z)</option>
                <option value="author">Autor (A-Z)</option>
                <option value="units-desc">Mais Capítulos / Episódios</option>
                <option value="units-asc">Menos Capítulos / Episódios</option>
              </select>
            </div>
          </div>

          {/* Status badge & Reset button */}
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 font-semibold text-[11px] flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Status: Finalizada</span>
            </span>

            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-semibold flex items-center gap-1 transition border border-slate-200"
                title="Limpar todos os filtros"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Limpar</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Grid of Results */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8 shadow-xs">
          <SlidersHorizontal className="w-12 h-12 text-slate-400 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-slate-900 mb-1">Nenhuma produção encontrada</h3>
          <p className="text-xs text-slate-600 max-w-md mx-auto mb-4">
            Não encontramos produções correspondentes aos critérios de busca ou filtros selecionados.
          </p>
          <button
            onClick={resetFilters}
            className="px-4 py-2 rounded-lg bg-[#D80050] hover:bg-[#be0044] text-white font-bold text-xs uppercase tracking-wider transition shadow-sm"
          >
            Redefinir Filtros
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((production) => (
            <WebCard
              key={production.id}
              production={production}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      )}
    </div>
  );
}
