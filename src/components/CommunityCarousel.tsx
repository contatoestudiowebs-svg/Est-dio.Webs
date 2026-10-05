import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Sparkles,
  Film,
  Layers,
  Clock,
  ArrowRight
} from 'lucide-react';
import { CommunityStory } from '../data/communityData';

interface CommunityCarouselProps {
  stories: CommunityStory[];
  onSelectStory: (slug: string) => void;
  onWatchStory?: (story: CommunityStory) => void;
}

export function CommunityCarousel({
  stories,
  onSelectStory,
  onWatchStory,
}: CommunityCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = stories.length;
  const touchStartX = useRef<number | null>(null);

  const prev = () => {
    setActiveIndex((current) => (current === 0 ? total - 1 : current - 1));
  };

  const next = () => {
    setActiveIndex((current) => (current === total - 1 ? 0 : current + 1));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [total]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) next();
    else if (diff < -50) prev();
    touchStartX.current = null;
  };

  const activeStory = stories[activeIndex] || stories[0];

  return (
    <div className="relative w-full py-6 md:py-10 select-none overflow-hidden">
      {/* Deep Wine-Brown Glow concentrated behind the cards as requested */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-4xl h-[420px] rounded-full blur-[140px] pointer-events-none opacity-60 z-0"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(81, 47, 46, 0.85) 0%, rgba(81, 47, 46, 0.3) 55%, transparent 75%)',
        }}
      />

      {/* Subtle Amber Secondary Light Arc */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[220px] rounded-full blur-[100px] pointer-events-none opacity-25 z-0"
        style={{
          background: 'radial-gradient(circle, #efae54 0%, transparent 70%)',
        }}
      />

      {/* Stage Container */}
      <div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Navigation Arrows */}
        <button
          onClick={prev}
          aria-label="História anterior"
          className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#0e0a0a]/80 hover:bg-[#512f2e] text-white border border-[#512f2e]/80 hover:border-[#efae54] backdrop-blur-md shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-slate-300 group-hover:text-[#efae54] transition" />
        </button>

        <button
          onClick={next}
          aria-label="Próxima história"
          className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#0e0a0a]/80 hover:bg-[#512f2e] text-white border border-[#512f2e]/80 hover:border-[#efae54] backdrop-blur-md shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group cursor-pointer"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-slate-300 group-hover:text-[#efae54] transition" />
        </button>

        {/* Horizontal 3D Carousel Cards Row */}
        <div className="relative h-[480px] sm:h-[540px] md:h-[590px] flex items-center justify-center">
          {stories.map((story, idx) => {
            // Compute relative offset from active item (-2, -1, 0, 1, 2, etc.)
            let offset = idx - activeIndex;
            if (offset < -Math.floor(total / 2)) offset += total;
            if (offset > Math.floor(total / 2)) offset -= total;

            const isCenter = offset === 0;
            const isNear = Math.abs(offset) === 1;
            const isFar = Math.abs(offset) === 2;
            const isVisible = Math.abs(offset) <= 2;

            if (!isVisible) return null;

            // Compute transform styles for smooth 3D depth and peeking
            let translateX = offset * 240; // Desktop offset
            let scale = 1;
            let zIndex = 20 - Math.abs(offset) * 5;
            let opacity = 1;

            if (isCenter) {
              translateX = 0;
              scale = 1.08;
            } else if (isNear) {
              translateX = offset * 210;
              scale = 0.88;
              opacity = 0.75;
            } else if (isFar) {
              translateX = offset * 340;
              scale = 0.74;
              opacity = 0.4;
            }

            return (
              <div
                key={story.id}
                onClick={() => {
                  if (isCenter) {
                    onSelectStory(story.slug);
                  } else {
                    setActiveIndex(idx);
                  }
                }}
                style={{
                  transform: `translateX(${translateX}px) scale(${scale})`,
                  zIndex,
                  opacity,
                }}
                className={`absolute top-1/2 -translate-y-1/2 w-[240px] sm:w-[280px] md:w-[320px] aspect-[2/3] rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-out select-none shadow-2xl group ${
                  isCenter
                    ? 'ring-2 ring-[#efae54]/90 shadow-[0_20px_50px_rgba(81,47,46,0.8)]'
                    : 'hover:opacity-90 ring-1 ring-[#512f2e]/60'
                }`}
              >
                {/* Poster Artwork */}
                <img
                  src={story.coverVertical}
                  alt={story.title}
                  className="w-full h-full object-cover filter brightness-90 contrast-110 transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Dark Vignette & Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0a0a] via-[#0e0a0a]/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />

                {/* Top Badges */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  {/* Community origin badge */}
                  <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#512f2e]/90 text-[#efae54] border border-[#efae54]/30 backdrop-blur-md flex items-center gap-1 shadow-sm">
                    <Sparkles className="w-2.5 h-2.5 text-[#efae54]" />
                    Comunidade
                  </span>
                </div>

                {/* Bottom Content Area */}
                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 flex flex-col justify-end z-10 bg-gradient-to-t from-[#0e0a0a] via-[#0e0a0a]/90 to-transparent pt-12">
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#efae54] mb-1">
                    {story.category}
                  </span>

                  <h3 className="text-base sm:text-lg md:text-xl font-black text-white tracking-tight leading-snug line-clamp-1 mb-1 font-brand">
                    {story.title}
                  </h3>

                  <div className="flex items-center gap-2 text-[11px] text-slate-300 font-medium mb-3">
                    <span>{story.totalEpisodes} episódios</span>
                    <span className="text-slate-500">•</span>
                    <span>{story.badge}</span>
                  </div>

                  {/* Hover action reveal: Ver história */}
                  <div
                    className={`transition-all duration-300 ${
                      isCenter
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0'
                    }`}
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectStory(story.slug);
                      }}
                      className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#512f2e] via-[#512f2e] to-[#efae54] hover:brightness-110 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition shadow-lg shadow-[#512f2e]/40 border border-[#efae54]/50 cursor-pointer"
                    >
                      <Play className="w-3.5 h-3.5 fill-current text-[#efae54]" />
                      <span>Ver história</span>
                    </button>
                  </div>
                </div>

                {/* Subtle Amber Glow on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border-2 border-[#efae54]/70 rounded-2xl" />
              </div>
            );
          })}
        </div>

        {/* Carousel Indicator Dots & Active story summary */}
        <div className="mt-4 flex flex-col items-center gap-3">
          <div className="flex items-center gap-2">
            {stories.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setActiveIndex(i)}
                aria-label={`Ir para ${s.title}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? 'w-8 bg-[#efae54] shadow-[0_0_10px_#efae54]'
                    : 'w-2 bg-slate-700 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>

          <p className="text-xs text-slate-400 font-reading text-center max-w-xl italic">
            "{activeStory.tagline}"
          </p>
        </div>
      </div>
    </div>
  );
}
