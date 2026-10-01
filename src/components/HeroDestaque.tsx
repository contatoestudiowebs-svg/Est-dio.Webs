import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, BookOpen, User, Sparkles, ImagePlus } from 'lucide-react';
import { WebProduction } from '../types';
import { useProductionCover } from '../utils/imageManager';
import { useManager } from '../utils/managerAuth';
import { ImageUploadModal } from './ImageUploadModal';

interface HeroDestaqueProps {
  productions: WebProduction[];
  onNavigate: (path: string) => void;
}

export function HeroDestaque({ productions, onNavigate }: HeroDestaqueProps) {
  const { isManager } = useManager();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isUploadOpen, setIsUploadOpen] = useState(false);

  // Auto rotate hero slides every 7 seconds
  useEffect(() => {
    if (productions.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % productions.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [productions.length]);

  if (!productions || productions.length === 0) return null;

  const current = productions[currentIndex];
  const coverImage = useProductionCover(current.slug, current.coverImage);
  const isSerie = current.category === 'Web série';
  const firstEpisodeSlug = current.episodes[0]?.slug || (isSerie ? 'episodio-01' : 'capitulo-01');

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + productions.length) % productions.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % productions.length);
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#F5F5F5] py-6 md:py-10 border-b border-slate-200">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rose-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Broadcaster editorial badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D80050] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#D80050]"></span>
            </span>
            <span className="text-xs uppercase tracking-widest font-extrabold text-[#D80050]">
              Destaque da Programação
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 font-medium">
              {currentIndex + 1} de {productions.length}
            </span>
            <button
              onClick={handlePrev}
              className="p-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200 shadow-xs transition"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200 shadow-xs transition"
              aria-label="Próximo"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Hero Card Container */}
        <div className="relative rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-8 lg:p-10 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Artwork / Poster Column */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[2/3] rounded-xl overflow-hidden bg-slate-100 border-2 border-slate-200 shadow-md flex items-center justify-center group">
                {coverImage ? (
                  <div className="w-full h-full flex items-center justify-center p-2 bg-slate-50">
                    <img
                      src={coverImage}
                      alt={`Arte oficial de ${current.title}`}
                      className="w-full h-full object-contain drop-shadow-md transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="w-full h-full p-6 flex flex-col justify-between items-center text-center bg-gradient-to-b from-slate-50 via-slate-100 to-slate-200/70 select-none">
                    <div className="w-full flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-700 bg-white px-2 py-0.5 rounded border border-slate-200 shadow-xs">
                        Estúdio Webs
                      </span>
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        {current.status}
                      </span>
                    </div>

                    <div className="my-auto">
                      <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center text-[#D80050] shadow-xs">
                        <BookOpen className="w-7 h-7" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 font-editorial tracking-wide uppercase line-clamp-2">
                        {current.title}
                      </h3>
                      <p className="text-xs text-slate-600 mt-1">por {current.author}</p>
                      <div className="mt-4 px-3 py-1.5 rounded bg-white border border-slate-300 text-[11px] font-semibold text-slate-700 tracking-wider shadow-xs">
                        [ ESPAÇO RESERVADO • CAPA OFICIAL ]
                      </div>
                    </div>

                    <div className="w-full text-[11px] text-slate-500 font-medium">
                      {current.totalUnits} {current.unitType}
                    </div>
                  </div>
                )}

                {/* Upload button to link official artwork - ONLY FOR MANAGER */}
                {isManager && (
                  <button
                    onClick={() => setIsUploadOpen(true)}
                    className="absolute bottom-3 right-3 px-2.5 py-1.5 rounded-lg bg-slate-900/90 hover:bg-[#D80050] text-white backdrop-blur border border-slate-700 shadow-md transition z-10 flex items-center gap-1.5 text-xs font-bold"
                    title="Gerenciador: Vincular capa por URL"
                  >
                    <ImagePlus className="w-3.5 h-3.5 text-[#D80050]" />
                    <span>Alterar Capa por URL</span>
                  </button>
                )}
              </div>
            </div>

            {/* Info / Synopsis Column */}
            <div className="lg:col-span-8 flex flex-col justify-center text-left">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <span
                  className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md shadow-xs ${
                    isSerie
                      ? 'bg-blue-600 text-white'
                      : 'bg-[#D80050] text-white'
                  }`}
                >
                  {current.category}
                </span>

                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 shadow-xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Status: {current.status}
                </span>

                <span className="text-xs font-semibold px-3 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                  {current.totalUnits} {current.unitType}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-brand mb-3">
                {current.title}
              </h2>

              {/* Author */}
              <div className="flex items-center gap-2 text-sm text-slate-600 mb-5">
                <User className="w-4 h-4 text-slate-400" />
                <span className="text-slate-500 font-medium">Autoria:</span>
                <button
                  onClick={() =>
                    onNavigate(`/autores/${current.author.toLowerCase().replace(/\s+/g, '-')}`)
                  }
                  className="font-bold text-slate-900 hover:text-[#D80050] transition underline underline-offset-4 decoration-slate-300"
                >
                  {current.author}
                </button>
              </div>

              {/* Synopsis */}
              <div className="mb-7">
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
                  Sinopse
                </h4>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-reading line-clamp-4">
                  {current.synopsis}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onNavigate(`/webs/${current.slug}`)}
                  className="px-6 py-3 rounded-xl bg-[#D80050] hover:bg-[#be0044] text-white font-extrabold text-sm tracking-wider uppercase transition shadow-md shadow-[#D80050]/20 flex items-center gap-2"
                >
                  <span>VER OBRA</span>
                  <span className="text-rose-200">→</span>
                </button>

                <button
                  onClick={() => onNavigate(`/webs/${current.slug}/${firstEpisodeSlug}`)}
                  className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 font-bold text-sm tracking-wide transition flex items-center gap-2 shadow-xs"
                >
                  <BookOpen className="w-4 h-4 text-[#D80050]" />
                  <span>LEIA AGORA</span>
                </button>
              </div>
            </div>
          </div>

          {/* Carousel dots */}
          <div className="flex justify-center items-center gap-2 mt-8 pt-4 border-t border-slate-200">
            {productions.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all rounded-full ${
                  currentIndex === idx
                    ? 'w-8 h-2.5 bg-[#D80050]'
                    : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Ir para ${p.title}`}
              />
            ))}
          </div>
        </div>
      </div>

      {isManager && (
        <ImageUploadModal
          productionTitle={current.title}
          productionSlug={current.slug}
          currentImage={coverImage}
          isOpen={isUploadOpen}
          onClose={() => setIsUploadOpen(false)}
        />
      )}
    </section>
  );
}
