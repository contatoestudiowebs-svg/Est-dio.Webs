import React, { useState } from 'react';
import {
  ArrowLeft,
  Play,
  Star,
  Clock,
  Calendar,
  User,
  Share2,
  Check,
  Sparkles,
  Layers,
  Heart,
  MessageSquare,
  Film,
  Send,
  Eye,
  Info
} from 'lucide-react';
import {
  getCommunityStoryBySlug,
  getRelatedCommunityStories,
  CommunityEpisode,
  CommunityStory
} from '../data/communityData';
import { CommunityStoryPlayerModal } from '../components/CommunityStoryPlayerModal';
import { CommunityStoryCard } from '../components/CommunityStoryCard';
import { SEOHead } from '../components/SEOHead';

interface CommunityStoryDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export function CommunityStoryDetailPage({
  slug,
  onNavigate,
}: CommunityStoryDetailPageProps) {
  const story = getCommunityStoryBySlug(slug);
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const [selectedEpNumber, setSelectedEpNumber] = useState(1);
  const [copied, setCopied] = useState(false);
  const [userRating, setUserRating] = useState<number | null>(null);
  const [userReview, setUserReview] = useState('');
  const [reviewsList, setReviewsList] = useState<
    Array<{ name: string; text: string; rating: number; date: string }>
  >([
    {
      name: 'Vinicius F.',
      text: 'Uma das melhores produções que já vi na comunidade! A direção de arte e os diálogos são impressionantes.',
      rating: 5,
      date: 'Há 2 dias'
    },
    {
      name: 'Larissa Moura',
      text: 'O gancho final do episódio 3 me deixou arrepiada. Parabéns ao criador!',
      rating: 5,
      date: 'Há 5 dias'
    }
  ]);
  const [reviewSuccess, setReviewSuccess] = useState(false);

  if (!story) {
    return (
      <div className="min-h-[70vh] bg-[#0a0707] flex flex-col items-center justify-center text-center px-4 text-white">
        <h2 className="text-2xl font-black mb-2 text-[#efae54]">História Não Encontrada</h2>
        <p className="text-sm text-slate-400 mb-6 max-w-md">
          A mini web série solicitada não existe ou foi arquivada pela comunidade criativa.
        </p>
        <button
          onClick={() => onNavigate('/comunidade')}
          className="px-6 py-2.5 rounded-xl bg-[#512f2e] hover:bg-[#efae54] hover:text-black text-white text-xs font-bold uppercase tracking-wider transition border border-[#efae54]/40"
        >
          Voltar à Comunidade
        </button>
      </div>
    );
  }

  const relatedStories = getRelatedCommunityStories(story.slug);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWatchEpisode = (epNum: number) => {
    setSelectedEpNumber(epNum);
    setIsPlayerOpen(true);
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userReview.trim()) return;
    setReviewsList([
      {
        name: 'Você (Leitor)',
        text: userReview.trim(),
        rating: userRating || 5,
        date: 'Agora mesmo'
      },
      ...reviewsList
    ]);
    setUserReview('');
    setReviewSuccess(true);
    setTimeout(() => setReviewSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#0a0707] text-slate-100 selection:bg-[#efae54] selection:text-black pb-20">
      <SEOHead
        title={`${story.title} | Mini Web Série da Comunidade | Estúdio Webs`}
        description={story.synopsis}
        canonicalPath={`/comunidade/${story.slug}`}
      />

      {/* 1. CAPA DA HISTÓRIA (Hero Showcase with backdrop, poster, and lighting) */}
      <section className="relative w-full pt-8 pb-12 sm:pb-16 overflow-hidden">
        {/* Backdrop Ambient Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={story.backdropUrl}
            alt={story.title}
            className="w-full h-full object-cover filter brightness-[0.25] blur-xs contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0707] via-[#0a0707]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0707] via-transparent to-[#0a0707]" />

          {/* Deep wine-brown backglow */}
          <div
            className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[140px] pointer-events-none opacity-40"
            style={{
              background: 'radial-gradient(circle, #512f2e 0%, transparent 70%)',
            }}
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb / Back button */}
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => onNavigate('/comunidade')}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-[#efae54] transition bg-[#181111]/80 hover:bg-[#251717] px-3.5 py-1.5 rounded-xl border border-[#512f2e]/40 shadow-sm cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Voltar para Comunidade</span>
            </button>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-[#efae54] bg-[#181111]/80 hover:bg-[#251717] px-3.5 py-1.5 rounded-xl border border-[#512f2e]/40 transition shadow-sm cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5 text-[#efae54]" />}
              <span>{copied ? 'Link Copiado!' : 'Compartilhar'}</span>
            </button>
          </div>

          {/* Story Presentation Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Vertical Cover Poster */}
            <div className="md:col-span-4 lg:col-span-4 flex justify-center">
              <div className="relative w-full max-w-[320px] aspect-[2/3] rounded-2xl overflow-hidden shadow-2xl border-2 border-[#512f2e] ring-1 ring-[#efae54]/40 group">
                <img
                  src={story.coverVertical}
                  alt={story.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle amber rim light on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-3 left-3 right-3 text-center">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#efae54] px-2.5 py-0.5 rounded-full bg-black/80 border border-[#efae54]/30 backdrop-blur-md inline-flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5 text-[#efae54]" />
                    Original da Comunidade
                  </span>
                </div>
              </div>
            </div>

            {/* Title & Metadata */}
            <div className="md:col-span-8 lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-lg bg-[#512f2e] text-[#efae54] border border-[#efae54]/40">
                  {story.category}
                </span>

                <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-black/60 text-[#efae54] border border-[#efae54]/30 flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-[#efae54]" />
                  <span>{story.rating.toFixed(1)}</span>
                  <span className="text-slate-400 font-normal">({story.votesCount} avaliações)</span>
                </span>

                <span className="text-xs text-slate-400 font-medium">
                  {story.totalEpisodes} episódios • {story.durationTotal} • {story.year}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-brand">
                {story.title}
              </h1>

              <p className="text-base sm:text-lg text-[#efae54] font-reading font-medium italic">
                "{story.tagline}"
              </p>

              <div className="flex items-center gap-3 text-xs text-slate-300 pt-1">
                <img
                  src={story.creator.avatar}
                  alt={story.creator.name}
                  className="w-8 h-8 rounded-full object-cover border border-[#efae54]/60"
                />
                <div>
                  <span className="text-slate-400">Criado por</span>{' '}
                  <strong className="text-white">{story.creator.name}</strong>{' '}
                  <span className="text-[#efae54]">{story.creator.handle}</span>
                </div>
              </div>

              {/* Primary Action Button: Começar a Assistir */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => handleWatchEpisode(1)}
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#512f2e] via-[#512f2e] to-[#efae54] hover:brightness-110 text-white font-black text-sm uppercase tracking-wider transition shadow-xl shadow-[#512f2e]/60 border border-[#efae54] flex items-center gap-2.5 cursor-pointer transform hover:scale-102"
                >
                  <Play className="w-5 h-5 fill-[#efae54] text-[#efae54]" />
                  <span>Começar a assistir</span>
                </button>

                <button
                  onClick={() => {
                    const el = document.getElementById('sinopse');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-4 rounded-xl bg-[#181111] hover:bg-[#251717] text-slate-300 hover:text-white border border-[#512f2e]/60 text-xs font-bold uppercase tracking-wider transition"
                >
                  <span>Ver Detalhes</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 mt-8">
        {/* 2. SINOPSE */}
        <section id="sinopse" className="scroll-mt-24">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#120d0d] border border-[#512f2e]/60 shadow-xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#efae54]" />
              <h2 className="text-sm font-extrabold uppercase tracking-widest text-[#efae54]">
                Sinopse
              </h2>
            </div>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-reading whitespace-pre-line">
              {story.synopsis}
            </p>

            <div className="pt-4 flex items-center gap-2 flex-wrap">
              <span className="text-xs text-slate-400 font-semibold mr-1">Tags da Comunidade:</span>
              {story.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-medium text-slate-300 bg-[#1e1515] px-2.5 py-1 rounded-md border border-[#512f2e]/40"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 3. EPISÓDIOS */}
        <section id="episodios">
          <div className="flex items-end justify-between mb-6 pb-2.5 border-b border-[#512f2e]/40">
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-[#efae54]">
                Temporada Completa
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white font-brand">
                Episódios ({story.totalEpisodes})
              </h2>
            </div>
            <span className="text-xs text-slate-400">
              Duração média: ~11 min por episódio
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {story.episodes.map((ep) => (
              <div
                key={ep.slug}
                onClick={() => handleWatchEpisode(ep.number)}
                className="group relative flex flex-col sm:flex-row gap-4 p-4 rounded-2xl bg-[#120d0d] hover:bg-[#1c1313] border border-[#512f2e]/50 hover:border-[#efae54]/60 transition-all duration-300 shadow-lg hover:shadow-2xl cursor-pointer"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video sm:w-48 sm:h-28 rounded-xl overflow-hidden bg-black shrink-0">
                  <img
                    src={ep.thumbnail}
                    alt={ep.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-[#512f2e]/90 text-[#efae54] border border-[#efae54] flex items-center justify-center transform scale-90 group-hover:scale-110 transition-transform">
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    </div>
                  </div>
                  <span className="absolute bottom-1.5 right-1.5 text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/80 text-slate-300">
                    {ep.duration}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-black text-[#efae54]">
                        EP. {String(ep.number).padStart(2, '0')}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white group-hover:text-[#efae54] transition line-clamp-1 font-brand">
                      {ep.title}
                    </h4>

                    <p className="text-xs text-slate-400 line-clamp-2 mt-1 leading-relaxed font-reading">
                      {ep.summary}
                    </p>
                  </div>

                  <div className="mt-3 flex items-center justify-between pt-2 border-t border-[#512f2e]/30">
                    <span className="text-[11px] text-slate-500 font-medium">
                      Disponível em 4K
                    </span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleWatchEpisode(ep.number);
                      }}
                      className="px-3.5 py-1.5 rounded-lg bg-[#512f2e] hover:bg-[#efae54] hover:text-black text-[#efae54] text-xs font-bold uppercase tracking-wider transition border border-[#efae54]/40 flex items-center gap-1.5"
                    >
                      <Play className="w-3 h-3 fill-current" />
                      <span>Assistir</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. SOBRE A HISTÓRIA */}
        <section id="sobre">
          <div className="flex items-center gap-2 mb-6 pb-2.5 border-b border-[#512f2e]/40">
            <Info className="w-5 h-5 text-[#efae54]" />
            <h2 className="text-2xl font-black text-white font-brand">
              Sobre a História
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Metadata spec sheet */}
            <div className="lg:col-span-7 p-6 rounded-2xl bg-[#120d0d] border border-[#512f2e]/60 space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
                <div>
                  <span className="text-slate-500 block text-[10px] font-bold uppercase tracking-wider">
                    Criado Por
                  </span>
                  <strong className="text-white text-sm">{story.creator.name}</strong>
                  <span className="block text-[#efae54] text-[11px]">{story.creator.handle}</span>
                </div>

                <div>
                  <span className="text-slate-500 block text-[10px] font-bold uppercase tracking-wider">
                    Gênero
                  </span>
                  <strong className="text-white text-sm">{story.category}</strong>
                </div>

                <div>
                  <span className="text-slate-500 block text-[10px] font-bold uppercase tracking-wider">
                    Número de Episódios
                  </span>
                  <strong className="text-white text-sm">{story.totalEpisodes} episódios</strong>
                </div>

                <div>
                  <span className="text-slate-500 block text-[10px] font-bold uppercase tracking-wider">
                    Data de Publicação
                  </span>
                  <strong className="text-white text-sm">{story.releaseDate}</strong>
                </div>

                <div>
                  <span className="text-slate-500 block text-[10px] font-bold uppercase tracking-wider">
                    Avaliação da Comunidade
                  </span>
                  <strong className="text-[#efae54] text-sm flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-[#efae54]" />
                    {story.rating} / 10
                  </strong>
                </div>

                <div>
                  <span className="text-slate-500 block text-[10px] font-bold uppercase tracking-wider">
                    Formato
                  </span>
                  <strong className="text-white text-sm">{story.badge}</strong>
                </div>
              </div>

              {/* Creator Bio */}
              <div className="pt-4 border-t border-[#512f2e]/40 flex items-start gap-4">
                <img
                  src={story.creator.avatar}
                  alt={story.creator.name}
                  className="w-12 h-12 rounded-xl object-cover border border-[#efae54]/60 shrink-0"
                />
                <div>
                  <h4 className="text-sm font-bold text-white">{story.creator.name}</h4>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed font-reading">
                    {story.creator.bio}
                  </p>
                </div>
              </div>
            </div>

            {/* Community Review / Feedback submission */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#120d0d] border border-[#512f2e]/60 space-y-4">
              <h3 className="text-sm font-black uppercase tracking-wider text-[#efae54] flex items-center gap-1.5">
                <MessageSquare className="w-4 h-4 text-[#efae54]" />
                <span>Avaliar & Comentar</span>
              </h3>

              <form onSubmit={handleAddReview} className="space-y-3">
                <div>
                  <label className="block text-[11px] text-slate-400 mb-1">Sua Nota</label>
                  <div className="flex items-center gap-1.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setUserRating(star)}
                        className="p-1 text-[#efae54] transition hover:scale-125"
                      >
                        <Star
                          className={`w-5 h-5 ${
                            (userRating || 5) >= star ? 'fill-[#efae54]' : 'text-slate-600'
                          }`}
                        />
                      </button>
                    ))}
                    <span className="text-xs text-slate-400 ml-2">
                      {userRating ? `${userRating * 2}/10` : '10/10'}
                    </span>
                  </div>
                </div>

                <div>
                  <textarea
                    value={userReview}
                    onChange={(e) => setUserReview(e.target.value)}
                    rows={2}
                    placeholder="Deixe sua crítica, elogio ou teoria sobre esta história da comunidade..."
                    className="w-full bg-[#181111] border border-[#512f2e]/50 focus:border-[#efae54] text-xs text-white placeholder-slate-500 rounded-xl p-3 focus:outline-none transition resize-none font-reading"
                  />
                </div>

                {reviewSuccess && (
                  <p className="text-xs text-emerald-400 font-bold">
                    Obrigado! Sua avaliação foi registrada na comunidade.
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full py-2 rounded-xl bg-[#512f2e] hover:bg-[#efae54] hover:text-black text-white text-xs font-bold uppercase tracking-wider transition border border-[#efae54]/40 flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Publicar Avaliação</span>
                </button>
              </form>

              {/* Sample reviews */}
              <div className="pt-3 border-t border-[#512f2e]/40 space-y-2.5">
                {reviewsList.slice(0, 2).map((rev, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-[#181111] border border-[#512f2e]/30 text-xs">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-white">{rev.name}</span>
                      <span className="text-[10px] text-slate-500">{rev.date}</span>
                    </div>
                    <p className="text-slate-300 font-reading text-[11px] leading-relaxed">
                      "{rev.text}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. HISTÓRIAS RELACIONADAS */}
        {relatedStories.length > 0 && (
          <section id="relacionadas" className="pt-8 border-t border-[#512f2e]/40">
            <div className="flex items-end justify-between mb-6 pb-2.5 border-b border-[#512f2e]/40">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#efae54]">
                  Mais da Comunidade
                </span>
                <h2 className="text-2xl font-black text-white font-brand">
                  Histórias Relacionadas
                </h2>
              </div>
              <button
                onClick={() => onNavigate('/comunidade')}
                className="text-xs text-[#efae54] hover:underline font-bold"
              >
                Explorar todas &rarr;
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {relatedStories.map((rel) => (
                <CommunityStoryCard
                  key={rel.id}
                  story={rel}
                  onSelectStory={(s) => onNavigate(`/comunidade/${s}`)}
                />
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Video Player Modal */}
      <CommunityStoryPlayerModal
        story={story}
        initialEpisodeNumber={selectedEpNumber}
        isOpen={isPlayerOpen}
        onClose={() => setIsPlayerOpen(false)}
      />
    </div>
  );
}
