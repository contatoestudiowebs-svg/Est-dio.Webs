import React from 'react';
import { Play, Sparkles, Clock, Film } from 'lucide-react';
import { CommunityStory } from '../data/communityData';

interface CommunityStoryCardProps {
  story: CommunityStory;
  onSelectStory: (slug: string) => void;
}

export function CommunityStoryCard({ story, onSelectStory }: CommunityStoryCardProps) {
  return (
    <div
      onClick={() => onSelectStory(story.slug)}
      className="group relative flex flex-col bg-[#110c0c] hover:bg-[#181111] border border-[#512f2e]/40 hover:border-[#efae54]/60 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#512f2e]/40 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer"
    >
      {/* Artwork container */}
      <div className="relative aspect-[2/3] w-full bg-[#0a0707] overflow-hidden">
        <img
          src={story.coverVertical}
          alt={story.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90 contrast-105"
          loading="lazy"
        />

        {/* Gradient shadows */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#110c0c] via-transparent to-black/60" />

        {/* Top Badges */}
        <div className="absolute top-2.5 left-2.5 z-10">
          <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#512f2e]/90 text-[#efae54] border border-[#efae54]/30 backdrop-blur-md flex items-center gap-1 shadow-xs">
            <Sparkles className="w-2 h-2 text-[#efae54]" />
            Comunidade
          </span>
        </div>

        <div className="absolute top-2.5 right-2.5 z-10">
          <span
            className={`text-[8px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full backdrop-blur-md border shadow-xs ${
              story.status === 'Disponível'
                ? 'bg-emerald-950/90 text-emerald-400 border-emerald-500/40'
                : 'bg-[#512f2e]/95 text-[#efae54] border-[#efae54]/50'
            }`}
          >
            {story.status}
          </span>
        </div>

        {/* Hover play reveal */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-[#512f2e] text-[#efae54] border border-[#efae54] shadow-xl flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
            <Play className="w-5 h-5 fill-current ml-0.5" />
          </div>
        </div>
      </div>

      {/* Info content */}
      <div className="p-3.5 flex flex-col justify-between flex-1">
        <div>
          <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
            <span className="text-[#efae54] font-bold uppercase tracking-wider text-[10px] truncate max-w-[130px]">
              {story.category}
            </span>
            <span className="font-semibold text-slate-400 text-[10px] shrink-0">
              {story.totalEpisodes} eps
            </span>
          </div>

          <h4 className="text-sm font-bold text-white group-hover:text-[#efae54] transition line-clamp-1 font-brand">
            {story.title}
          </h4>

          <p className="text-[11px] text-slate-400 line-clamp-2 mt-1 leading-relaxed font-reading">
            {story.tagline}
          </p>
        </div>

        <div className="mt-3 pt-2.5 border-t border-[#512f2e]/30 flex items-center justify-between text-[11px] text-slate-400">
          <span className="truncate max-w-[140px] text-slate-400">
            por <strong className="text-slate-300 font-semibold">{story.creator.name}</strong>
          </span>
          <span className="text-[#efae54] font-bold text-[10px] uppercase group-hover:underline">
            Ver &rarr;
          </span>
        </div>
      </div>

      {/* Subtle border glow on hover */}
      <div className="absolute inset-0 pointer-events-none rounded-xl border border-transparent group-hover:border-[#efae54]/50 transition-colors duration-300" />
    </div>
  );
}
