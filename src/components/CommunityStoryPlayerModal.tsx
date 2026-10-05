import React, { useState, useEffect } from 'react';
import {
  X,
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Film,
  Clock,
  User,
  Share2,
  Check
} from 'lucide-react';
import { CommunityStory, CommunityEpisode } from '../data/communityData';

interface CommunityStoryPlayerModalProps {
  story: CommunityStory;
  initialEpisodeNumber?: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigateEpisode?: (epNumber: number) => void;
}

export function CommunityStoryPlayerModal({
  story,
  initialEpisodeNumber = 1,
  isOpen,
  onClose,
}: CommunityStoryPlayerModalProps) {
  const [currentEpNum, setCurrentEpNum] = useState(initialEpisodeNumber);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(24);
  const [isMuted, setIsMuted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setCurrentEpNum(initialEpisodeNumber);
    setProgress(15);
    setIsPlaying(true);
  }, [initialEpisodeNumber, isOpen]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === ' ') {
        e.preventDefault();
        setIsPlaying((prev) => !prev);
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  // Simulate progress playback
  useEffect(() => {
    if (!isPlaying || !isOpen) return;
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 0.5));
    }, 500);
    return () => clearInterval(interval);
  }, [isPlaying, isOpen]);

  if (!isOpen) return null;

  const currentEp: CommunityEpisode =
    story.episodes.find((e) => e.number === currentEpNum) || story.episodes[0];
  const nextEp = story.episodes.find((e) => e.number === currentEpNum + 1);
  const prevEp = story.episodes.find((e) => e.number === currentEpNum - 1);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-[#0e0a0a] border border-[#512f2e]/60 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[96vh]">
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-[#0b0808]/90 border-b border-[#512f2e]/40 z-20">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded bg-[#512f2e]/80 text-[#efae54] border border-[#efae54]/30 flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5 text-[#efae54]" />
              Comunidade
            </span>
            <div className="flex items-center gap-2 text-xs">
              <span className="font-bold text-white truncate max-w-[200px] sm:max-w-[320px]">
                {story.title}
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-[#efae54] font-semibold">
                EP. {String(currentEp.number).padStart(2, '0')} — {currentEp.title}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 rounded-lg bg-[#1a1414] hover:bg-[#2a1d1d] text-slate-300 hover:text-[#efae54] border border-[#512f2e]/40 transition text-xs flex items-center gap-1.5"
              title="Compartilhar episódio"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
              <span className="hidden sm:inline text-[11px]">{copied ? 'Copiado!' : 'Compartilhar'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-[#1a1414] hover:bg-[#512f2e] text-slate-300 hover:text-white border border-[#512f2e]/40 transition"
              title="Fechar reprodutor (Esc)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Video / Cinema Viewer stage */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden group select-none">
          {/* Backdrop cinematic frame */}
          <img
            src={currentEp.thumbnail || story.backdropUrl}
            alt={currentEp.title}
            className={`w-full h-full object-cover transition-transform duration-1000 ${
              isPlaying ? 'scale-105' : 'scale-100'
            } filter brightness-75 contrast-110`}
          />

          {/* Deep cinematic vignette & warm wine glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-radial from-transparent via-black/30 to-black/90 pointer-events-none" />

          {/* Center Play/Pause Overlay indicator */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#512f2e]/80 hover:bg-[#512f2e] text-[#efae54] border border-[#efae54]/60 backdrop-blur-md shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group-hover:opacity-100 opacity-90"
            title={isPlaying ? 'Pausar reprodução' : 'Iniciar reprodução'}
          >
            {isPlaying ? (
              <Pause className="w-8 h-8 fill-[#efae54]" />
            ) : (
              <Play className="w-8 h-8 fill-[#efae54] ml-1" />
            )}
          </button>

          {/* Bottom Video Controls overlay */}
          <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col gap-2 z-10">
            {/* Scrubber timeline */}
            <div
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                const newPct = Math.max(0, Math.min(100, (clickX / rect.width) * 100));
                setProgress(newPct);
              }}
              className="relative w-full h-1.5 hover:h-2.5 bg-white/20 hover:bg-white/30 rounded-full cursor-pointer transition-all overflow-hidden"
            >
              <div
                className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-[#512f2e] via-[#efae54] to-[#efae54] rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-xs text-slate-300">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="text-[#efae54] hover:text-white transition"
                >
                  {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
                </button>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="text-slate-300 hover:text-[#efae54] transition"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <span className="text-[11px] font-mono text-slate-400">
                  {Math.floor((progress / 100) * 12)}:
                  {String(Math.floor(((progress / 100) * 12 * 60) % 60)).padStart(2, '0')} / {currentEp.duration}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[11px] text-slate-400 hidden sm:inline">
                  Qualidade: <strong className="text-slate-200">Cinematic 4K</strong>
                </span>
                {nextEp && (
                  <button
                    onClick={() => {
                      setCurrentEpNum(nextEp.number);
                      setProgress(0);
                    }}
                    className="px-2.5 py-1 rounded bg-[#512f2e]/80 hover:bg-[#512f2e] text-[#efae54] border border-[#efae54]/30 text-[11px] font-bold flex items-center gap-1 transition"
                  >
                    <span>Próximo EP</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Lower Info & Episode selector */}
        <div className="p-4 sm:p-6 bg-[#0e0a0a] overflow-y-auto flex-1 border-t border-[#512f2e]/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Story details */}
            <div className="lg:col-span-7 space-y-3">
              <div className="flex items-center gap-2 text-xs text-slate-400 flex-wrap">
                <span className="text-[#efae54] font-bold uppercase tracking-wider">
                  {story.category}
                </span>
                <span>•</span>
                <span>{story.totalEpisodes} episódios</span>
                <span>•</span>
                <span>{story.durationTotal}</span>
              </div>

              <h3 className="text-lg sm:text-xl font-black text-white font-brand">
                EP. {String(currentEp.number).padStart(2, '0')} — {currentEp.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-reading">
                {currentEp.summary}
              </p>

              <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
                <User className="w-3.5 h-3.5 text-[#efae54]" />
                <span>Criado por:</span>
                <strong className="text-white">{story.creator.name}</strong>
                <span className="text-[#efae54]">{story.creator.handle}</span>
              </div>
            </div>

            {/* Quick episode grid selector */}
            <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-[#512f2e]/40 lg:pl-6 space-y-2">
              <span className="text-[11px] font-black uppercase tracking-wider text-[#efae54] block mb-2">
                Todos os Episódios ({story.totalEpisodes})
              </span>
              <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
                {story.episodes.map((ep) => {
                  const isCurrent = ep.number === currentEpNum;
                  return (
                    <button
                      key={ep.slug}
                      onClick={() => {
                        setCurrentEpNum(ep.number);
                        setProgress(0);
                        setIsPlaying(true);
                      }}
                      className={`w-full p-2.5 rounded-xl text-left transition flex items-center justify-between border ${
                        isCurrent
                          ? 'bg-[#512f2e]/60 border-[#efae54] text-white shadow-sm'
                          : 'bg-[#150f0f] border-[#512f2e]/30 text-slate-400 hover:text-white hover:bg-[#1f1616]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 truncate">
                        <div
                          className={`w-6 h-6 rounded flex items-center justify-center text-[10px] font-black shrink-0 ${
                            isCurrent
                              ? 'bg-[#efae54] text-black'
                              : 'bg-black/50 text-slate-400'
                          }`}
                        >
                          {ep.number}
                        </div>
                        <span className="text-xs font-bold truncate">{ep.title}</span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 shrink-0 ml-2">
                        {ep.duration}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
