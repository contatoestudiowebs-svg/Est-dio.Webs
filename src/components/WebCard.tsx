import React, { useState } from 'react';
import { Film, BookOpen, User, Sparkles, ImagePlus } from 'lucide-react';
import { WebProduction } from '../types';
import { useProductionCover } from '../utils/imageManager';
import { useManager } from '../utils/managerAuth';
import { ImageUploadModal } from './ImageUploadModal';

interface WebCardProps {
  production: WebProduction;
  onNavigate: (path: string) => void;
  compact?: boolean;
}

export function WebCard({ production, onNavigate, compact = false }: WebCardProps) {
  const { isManager } = useManager();
  const coverImage = useProductionCover(production.slug, production.coverImage);
  const [isUploadOpen, setIsUploadOpen] = useState(false);

  const isSerie = production.category === 'Web série';

  return (
    <>
      <div className="group relative flex flex-col bg-white hover:bg-slate-50/80 border border-slate-200/90 hover:border-slate-300 rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1">
        {/* Poster / Artwork container */}
        <div
          onClick={() => onNavigate(`/webs/${production.slug}`)}
          className="relative w-full aspect-[2/3] bg-slate-100 flex items-center justify-center overflow-hidden cursor-pointer border-b border-slate-200"
        >
          {coverImage ? (
            <div className="relative w-full h-full flex items-center justify-center p-2 bg-slate-50">
              <img
                src={coverImage}
                alt={`Capa oficial de ${production.title}`}
                className="w-full h-full object-contain drop-shadow-sm transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ) : (
            // Clearly identified reserved space per prompt instruction 3
            <div className="w-full h-full p-4 flex flex-col items-center justify-between text-center bg-gradient-to-b from-slate-50 via-slate-100 to-slate-200/60 relative select-none">
              <div className="w-full flex items-center justify-between z-10">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-700 bg-white px-2 py-0.5 rounded border border-slate-200 shadow-xs">
                  Estúdio Webs
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  {production.status}
                </span>
              </div>

              <div className="my-auto z-10 px-2">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center text-[#D80050] shadow-xs">
                  {isSerie ? <Film className="w-6 h-6" /> : <BookOpen className="w-6 h-6" />}
                </div>
                <h4 className="text-sm font-bold text-slate-900 font-editorial tracking-wide line-clamp-2 uppercase">
                  {production.title}
                </h4>
                <p className="text-[11px] text-slate-600 mt-1 line-clamp-1">
                  por {production.author}
                </p>

                <div className="mt-4 px-2 py-1.5 rounded bg-white border border-slate-300 text-[10px] font-semibold text-slate-700 tracking-wider shadow-xs">
                  [ ESPAÇO RESERVADO • CAPA OFICIAL ]
                </div>
              </div>

              <div className="w-full text-center z-10">
                <span className="text-[10px] text-slate-500 font-medium">
                  {production.totalUnits} {production.unitType}
                </span>
              </div>
            </div>
          )}

          {/* Cover trigger button - VISIBLE ONLY TO MANAGER */}
          {isManager && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsUploadOpen(true);
              }}
              title="Gerenciador: Vincular ou alterar capa por URL"
              className="absolute bottom-2 right-2 px-2 py-1 rounded-lg bg-slate-900/90 hover:bg-[#D80050] text-white backdrop-blur border border-slate-700 shadow-md transition z-20 flex items-center gap-1 text-[10px] font-bold"
            >
              <ImagePlus className="w-3.5 h-3.5 text-[#D80050]" />
              <span>URL</span>
            </button>
          )}

          {/* Overlay badges on card */}
          <div className="absolute top-2 left-2 z-10 flex flex-col gap-1 pointer-events-none">
            <span
              className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-xs ${
                isSerie
                  ? 'bg-blue-600 text-white'
                  : 'bg-[#D80050] text-white'
              }`}
            >
              {production.category}
            </span>
          </div>

          <div className="absolute top-2 right-2 z-10 pointer-events-none">
            <span
              className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-xs ${
                production.status === 'Finalizada'
                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                  : 'bg-amber-400 text-slate-950 border border-amber-300 font-black'
              }`}
            >
              {production.status}
            </span>
          </div>
        </div>

        {/* Card info */}
        <div className="p-4 flex flex-col flex-1 justify-between bg-white">
          <div>
            <div className="flex items-center justify-between text-xs text-slate-500 mb-1.5">
              <span className="flex items-center gap-1 text-[11px] text-slate-600 font-medium truncate">
                <User className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span
                  onClick={() => onNavigate(`/autores/${production.author.toLowerCase().replace(/\s+/g, '-')}`)}
                  className="hover:text-[#D80050] cursor-pointer transition truncate"
                >
                  {production.author}
                </span>
              </span>
              <span className="text-[11px] font-semibold text-blue-700 shrink-0">
                {production.totalUnits} {production.unitType}
              </span>
            </div>

            <h3
              onClick={() => onNavigate(`/webs/${production.slug}`)}
              className="font-bold text-slate-900 text-base hover:text-[#D80050] cursor-pointer transition line-clamp-1 tracking-tight"
            >
              {production.title}
            </h3>

            {!compact && (
              <p className="text-xs text-slate-600 line-clamp-2 mt-2 leading-relaxed font-reading">
                {production.synopsis}
              </p>
            )}
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
            <button
              onClick={() => onNavigate(`/webs/${production.slug}`)}
              className="w-full py-2 px-3 rounded-lg bg-slate-100 hover:bg-[#D80050] text-slate-800 hover:text-white text-xs font-bold transition flex items-center justify-center gap-1.5 border border-slate-200 hover:border-[#D80050]"
            >
              <span>VER OBRA</span>
              <span className="text-[#D80050] group-hover:text-white transition">→</span>
            </button>
          </div>
        </div>
      </div>

      {isManager && (
        <ImageUploadModal
          productionTitle={production.title}
          productionSlug={production.slug}
          currentImage={coverImage}
          isOpen={isUploadOpen}
          onClose={() => setIsUploadOpen(false)}
        />
      )}
    </>
  );
}
