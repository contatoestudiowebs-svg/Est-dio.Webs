import React, { useState } from 'react';
import {
  Sparkles,
  Film,
  Compass,
  PlusCircle,
  ArrowRight,
  Search
} from 'lucide-react';
import {
  COMMUNITY_STORIES,
  getFeaturedCommunityStories,
  getNewCommunityStories,
  CommunityStory
} from '../data/communityData';
import { CommunityCarousel } from '../components/CommunityCarousel';
import { CommunityStoryCard } from '../components/CommunityStoryCard';
import { CommunityStoryPlayerModal } from '../components/CommunityStoryPlayerModal';
import { SEOHead } from '../components/SEOHead';

interface CommunityPageProps {
  onNavigate: (path: string) => void;
}

export function CommunityPage({ onNavigate }: CommunityPageProps) {
  const [selectedStoryForModal, setSelectedStoryForModal] = useState<CommunityStory | null>(null);
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const featuredStories = getFeaturedCommunityStories();
  const newStories = getNewCommunityStories();

  const categories = [
    'all',
    'Ficção Científica',
    'Suspense Psicológico',
    'Thriller Noir',
    'Fantasia Urbana',
    'Cyberpunk & Sci-Fi',
    'Mistério Costeiro'
  ];

  const filteredStories = COMMUNITY_STORIES.filter((story) => {
    const matchesSearch =
      story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.synopsis.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.creator.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === 'all' || story.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleSelectStory = (slug: string) => {
    onNavigate(`/comunidade/${slug}`);
  };

  const handleWatchStory = (story: CommunityStory) => {
    setSelectedStoryForModal(story);
    setIsPlayerOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0707] text-slate-100 selection:bg-[#efae54] selection:text-black">
      <SEOHead
        title="Comunidade | Mini Web Séries e Histórias Originais | Estúdio Webs"
        description="Histórias que nasceram da imaginação da nossa comunidade. Explore mini web séries cinematográficas, suspenses, ficção científica e dramas criados por autores independentes."
        canonicalPath="/comunidade"
      />

      {/* Hero / Page Header */}
      <section className="relative pt-12 pb-6 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        {/* Subtle Ambient Background Lighting (#512f2e & #efae54) */}
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full blur-[140px] pointer-events-none opacity-45"
          style={{
            background:
              'radial-gradient(circle, rgba(81, 47, 46, 0.9) 0%, rgba(239, 174, 84, 0.25) 50%, transparent 75%)',
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#512f2e]/60 border border-[#efae54]/40 text-[#efae54] text-xs font-bold uppercase tracking-widest backdrop-blur-md shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#efae54]" />
            <span>Espaço Criativo Oficial</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white font-brand">
            Comunidade
          </h1>

          <p className="text-base sm:text-xl text-[#efae54]/90 font-light font-reading max-w-2xl mx-auto leading-relaxed">
            Histórias que nasceram da imaginação da nossa comunidade.
          </p>

          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
            Descubra mini web séries curtas produzidas por roteiristas e contadores de histórias independentes de todo o país.
          </p>
        </div>
      </section>

      {/* Main Spotlight Carousel */}
      <section className="relative w-full">
        <CommunityCarousel
          stories={featuredStories}
          onSelectStory={handleSelectStory}
          onWatchStory={handleWatchStory}
        />
      </section>

      {/* Category & Search Filter Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="p-4 rounded-2xl bg-[#120d0d] border border-[#512f2e]/50 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl">
          {/* Quick Categories */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer border ${
                  selectedCategory === cat
                    ? 'bg-[#efae54] text-black border-[#efae54] shadow-md shadow-[#efae54]/20'
                    : 'bg-[#181111] text-slate-300 hover:text-white border-[#512f2e]/40 hover:bg-[#221616]'
                }`}
              >
                {cat === 'all' ? 'Todas as Categorias' : cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar histórias da comunidade..."
              className="w-full bg-[#181111] border border-[#512f2e]/50 focus:border-[#efae54] text-xs text-white placeholder-slate-500 rounded-xl pl-10 pr-4 py-2 focus:outline-none transition shadow-inner"
            />
          </div>
        </div>
      </section>

      {/* Search results view (if searching) */}
      {searchQuery && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-[#512f2e]/40">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span>Resultados para:</span>
              <span className="text-[#efae54]">"{searchQuery}"</span>
              <span className="text-xs text-slate-400 font-normal">({filteredStories.length} encontradas)</span>
            </h2>
          </div>

          {filteredStories.length === 0 ? (
            <div className="text-center py-16 bg-[#120d0d] rounded-2xl border border-dashed border-[#512f2e]/40 text-slate-400">
              <p className="text-sm font-semibold text-slate-300 mb-1">Nenhuma história encontrada</p>
              <p className="text-xs text-slate-500">Tente buscar por outro termo ou gênero.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
              {filteredStories.map((story) => (
                <CommunityStoryCard key={story.id} story={story} onSelectStory={handleSelectStory} />
              ))}
            </div>
          )}
        </section>
      )}

      {/* Discovery Sections */}
      {!searchQuery && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 py-8">
          {/* Novas Histórias */}
          <section>
            <div className="flex items-end justify-between mb-6 pb-2.5 border-b border-[#512f2e]/40">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#512f2e] text-[#efae54] flex items-center justify-center">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#efae54]">
                    Catálogo de Mini Web Séries
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-white font-brand tracking-tight">
                    Novas Histórias
                  </h2>
                </div>
              </div>

              <span className="text-xs text-slate-400 font-medium hidden sm:inline">
                Estreias da nossa comunidade criativa
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6">
              {COMMUNITY_STORIES.map((story) => (
                <CommunityStoryCard key={story.id} story={story} onSelectStory={handleSelectStory} />
              ))}
            </div>
          </section>
        </div>
      )}

      {/* Community Creator Callout Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 border border-[#efae54]/40 bg-gradient-to-r from-[#1a0e0e] via-[#241313] to-[#120a0a] shadow-2xl">
          <div
            className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 pointer-events-none"
            style={{
              background:
                'radial-gradient(circle at right center, #efae54 0%, transparent 70%)',
            }}
          />

          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="text-[11px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-[#512f2e] text-[#efae54] border border-[#efae54]/40">
              Você também escreve ficção?
            </span>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white font-brand leading-tight">
              Publique sua mini web série no Estúdio Webs
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed font-reading">
              Nossa comunidade é aberta a novos roteiristas, autores e criadores de conteúdo. Envie sua sinopse, capítulos ou minissérie para ser avaliada pela equipe e exibida com identidade visual cinematográfica.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate('/envie-seu-projeto')}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#512f2e] via-[#512f2e] to-[#efae54] hover:brightness-110 text-white font-bold text-xs uppercase tracking-wider transition shadow-lg shadow-[#512f2e]/50 border border-[#efae54]/50 flex items-center gap-2 cursor-pointer"
              >
                <PlusCircle className="w-4 h-4 text-[#efae54]" />
                <span>Enviar Minha História</span>
              </button>

              <button
                onClick={() => onNavigate('/sobre')}
                className="px-5 py-3 rounded-xl bg-black/40 hover:bg-black/70 text-slate-300 hover:text-white border border-[#512f2e]/50 text-xs font-bold uppercase tracking-wider transition"
              >
                <span>Como Funciona</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Player Modal */}
      {selectedStoryForModal && (
        <CommunityStoryPlayerModal
          story={selectedStoryForModal}
          isOpen={isPlayerOpen}
          onClose={() => setIsPlayerOpen(false)}
        />
      )}
    </div>
  );
}
