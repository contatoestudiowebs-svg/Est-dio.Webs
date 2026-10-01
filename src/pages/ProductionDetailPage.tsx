import React, { useState } from 'react';
import {
  Film,
  BookOpen,
  User,
  ArrowLeft,
  Calendar,
  Layers,
  ChevronRight,
  Share2,
  Check,
  ImagePlus,
  Sparkles,
  FileText
} from 'lucide-react';
import { getProductionBySlug, PRODUCTIONS_DATA } from '../data/productions';
import { useProductionCover } from '../utils/imageManager';
import { useManager } from '../utils/managerAuth';
import { ImageUploadModal } from '../components/ImageUploadModal';
import { WebCard } from '../components/WebCard';
import { SEOHead } from '../components/SEOHead';

interface ProductionDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export function ProductionDetailPage({ slug, onNavigate }: ProductionDetailPageProps) {
  const { isManager } = useManager();
  const production = getProductionBySlug(slug);
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!production) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Produção Não Encontrada</h2>
        <p className="text-sm text-slate-600 mb-6">
          A obra solicitada não existe em nosso catálogo de produções oficiais.
        </p>
        <button
          onClick={() => onNavigate('/webs')}
          className="px-6 py-2.5 rounded-xl bg-[#D80050] hover:bg-[#be0044] text-white text-xs font-bold uppercase tracking-wider transition shadow-md shadow-[#D80050]/20"
        >
          Voltar ao Catálogo
        </button>
      </div>
    );
  }

  const coverImage = useProductionCover(production.slug, production.coverImage);
  const isSerie = production.category === 'Web série';
  const unitLabelSingular = isSerie ? 'Episódio' : 'Capítulo';
  const unitLabelPlural = production.unitType; // 'episódios' or 'capítulos'
  const firstEpisodeSlug = production.episodes[0]?.slug || (isSerie ? 'episodio-01' : 'capitulo-01');

  // Related works: same author or same category
  const relatedWorks = PRODUCTIONS_DATA.filter(
    (p) => p.id !== production.id && (p.author === production.author || p.category === production.category)
  ).slice(0, 4);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const seoTitle = `${production.title} | Estúdio Webs`;
  const seoDescription = `Conheça ${production.title}, ${production.category.toLowerCase()} de ${production.author}, com ${production.totalUnits} ${production.unitType}. Finalizada no Estúdio Webs.`;

  return (
    <div className="min-h-screen py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        canonicalPath={`/webs/${production.slug}`}
        schema={{
          '@context': 'https://schema.org',
          '@type': isSerie ? 'TVSeries' : 'CreativeWork',
          name: production.title,
          author: {
            '@type': 'Person',
            name: production.author
          },
          description: production.synopsis,
          numberOfEpisodes: production.totalUnits,
          genre: production.category,
          publisher: {
            '@type': 'Organization',
            name: 'Estúdio Webs'
          }
        }}
      />

      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 flex-wrap">
        <button onClick={() => onNavigate('/')} className="hover:text-slate-900 transition">
          Início
        </button>
        <span className="text-slate-400">/</span>
        <button onClick={() => onNavigate('/webs')} className="hover:text-slate-900 transition">
          Nossas Webs
        </button>
        <span className="text-slate-400">/</span>
        <button
          onClick={() =>
            onNavigate(`/webs?categoria=${encodeURIComponent(production.category)}`)
          }
          className="hover:text-slate-900 transition"
        >
          {production.category === 'Web série' ? 'Web Séries' : 'Web Novelas'}
        </button>
        <span className="text-slate-400">/</span>
        <span className="text-[#D80050] font-semibold truncate">{production.title}</span>
      </nav>

      {/* Main Production Presentation Card */}
      <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-sm mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Official Cover Container */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <div className="relative w-full max-w-[320px] aspect-[2/3] rounded-2xl overflow-hidden bg-slate-100 border-2 border-slate-200 shadow-md flex items-center justify-center group">
              {coverImage ? (
                <div className="w-full h-full flex items-center justify-center p-3 bg-slate-50">
                  <img
                    src={coverImage}
                    alt={`Capa oficial de ${production.title}`}
                    className="w-full h-full object-contain drop-shadow-sm"
                  />
                </div>
              ) : (
                <div className="w-full h-full p-6 flex flex-col justify-between items-center text-center bg-gradient-to-b from-slate-50 via-slate-100 to-slate-200/60 select-none">
                  <div className="w-full flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-700 bg-white px-2 py-0.5 rounded border border-slate-200 shadow-xs">
                      Estúdio Webs
                    </span>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      {production.status}
                    </span>
                  </div>

                  <div className="my-auto">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center text-[#D80050] shadow-xs">
                      {isSerie ? <Film className="w-8 h-8" /> : <BookOpen className="w-8 h-8" />}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 font-editorial tracking-wide uppercase line-clamp-2">
                      {production.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1">por {production.author}</p>

                    <div className="mt-4 px-3 py-1.5 rounded bg-white border border-slate-300 text-[11px] font-semibold text-slate-700 tracking-wider shadow-xs">
                      [ ESPAÇO RESERVADO • CAPA OFICIAL ]
                    </div>
                  </div>

                  <div className="w-full text-xs text-slate-500 font-medium">
                    {production.totalUnits} {production.unitType}
                  </div>
                </div>
              )}

              {/* Upload or update cover button - ONLY FOR MANAGER */}
              {isManager && (
                <button
                  onClick={() => setIsUploadOpen(true)}
                  className="absolute bottom-3 right-3 px-2.5 py-1.5 rounded-lg bg-slate-900/90 hover:bg-[#D80050] text-white backdrop-blur border border-slate-700 shadow-md transition z-10 flex items-center gap-1.5 text-xs font-bold"
                  title="Gerenciador: Vincular ou alterar capa por URL"
                >
                  <ImagePlus className="w-3.5 h-3.5 text-[#D80050]" />
                  <span>Alterar Capa por URL</span>
                </button>
              )}
            </div>

            {isManager && (
              <button
                onClick={() => setIsUploadOpen(true)}
                className="mt-3 text-xs text-slate-600 hover:text-[#D80050] flex items-center gap-1.5 transition font-bold"
              >
                <ImagePlus className="w-3.5 h-3.5 text-[#D80050]" />
                <span>{coverImage ? 'Alterar capa oficial (URL)' : 'Vincular capa oficial (URL)'}</span>
              </button>
            )}
          </div>

          {/* Production Info Column */}
          <div className="lg:col-span-8 flex flex-col justify-start">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span
                className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md shadow-xs ${
                  isSerie
                    ? 'bg-blue-600 text-white'
                    : 'bg-[#D80050] text-white'
                }`}
              >
                {production.category}
              </span>

              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 shadow-xs flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Status: {production.status}
              </span>

              <span className="text-xs font-semibold px-3 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                {production.totalUnits} {production.unitType}
              </span>

              {production.episodes.some((e) => e.pdfPages && e.pdfPages.length > 0) && (
                <span className="text-xs font-bold px-3 py-1 rounded-md bg-rose-50 text-[#D80050] border border-rose-200 flex items-center gap-1.5 shadow-xs">
                  <FileText className="w-3.5 h-3.5" />
                  <span>Roteiros em PDF Disponíveis</span>
                </span>
              )}

              <button
                onClick={handleShare}
                className="ml-auto text-xs px-3 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 border border-slate-200 flex items-center gap-1.5 transition shadow-xs"
                title="Copiar link da obra"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5 text-slate-500" />}
                <span>{copied ? 'Link Copiado!' : 'Compartilhar'}</span>
              </button>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-brand mb-3">
              {production.title}
            </h1>

            {/* Author */}
            <div className="flex items-center gap-2 text-sm text-slate-600 mb-6 pb-4 border-b border-slate-200">
              <User className="w-4 h-4 text-slate-400" />
              <span className="text-slate-500 font-medium">Autor:</span>
              <button
                onClick={() =>
                  onNavigate(`/autores/${production.author.toLowerCase().replace(/\s+/g, '-')}`)
                }
                className="font-bold text-slate-900 hover:text-[#D80050] transition underline underline-offset-4 decoration-slate-300"
              >
                {production.author}
              </button>
            </div>

            {/* Synopsis */}
            <div className="mb-8">
              <h3 className="text-xs font-extrabold uppercase tracking-widest text-slate-500 mb-2.5">
                SINOPSE OFICIAL
              </h3>
              <div className="text-sm sm:text-base text-slate-700 leading-relaxed font-reading whitespace-pre-line bg-slate-50 p-5 rounded-xl border border-slate-200">
                {production.synopsis}
              </div>
            </div>

            {/* Direct CTA */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate(`/webs/${production.slug}/${firstEpisodeSlug}`)}
                className="px-8 py-3.5 rounded-xl bg-[#D80050] hover:bg-[#be0044] text-white font-black text-xs uppercase tracking-wider transition shadow-md shadow-[#D80050]/20 flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                <span>LEIA AGORA</span>
              </button>

              {production.episodes.some((e) => e.pdfPages && e.pdfPages.length > 0) && (
                <button
                  onClick={() => onNavigate(`/webs/${production.slug}/${firstEpisodeSlug}`)}
                  className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition flex items-center gap-2 shadow-xs"
                >
                  <FileText className="w-4 h-4 text-[#D80050]" />
                  <span>Ver Roteiro em PDF</span>
                </button>
              )}

              <button
                onClick={() => onNavigate('/webs')}
                className="px-5 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 text-xs font-bold uppercase tracking-wider transition flex items-center gap-2 shadow-xs"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Voltar ao Catálogo</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Chapters / Episodes List Section */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-200">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#D80050] font-extrabold">
              Conteúdo Oficial
            </span>
            <h2 className="text-2xl font-black text-slate-900 uppercase font-brand tracking-tight">
              {isSerie ? 'EPISÓDIOS' : 'CAPÍTULOS'} ({production.totalUnits})
            </h2>
          </div>

          <span className="text-xs text-slate-600 font-semibold bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-xs">
            Status: Todos Disponíveis
          </span>
        </div>

        {/* Chapters / Episodes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {production.episodes.map((ep) => (
            <div
              key={ep.slug}
              onClick={() => onNavigate(`/webs/${production.slug}/${ep.slug}`)}
              className="group p-4 rounded-xl bg-white hover:bg-slate-50/90 border border-slate-200 hover:border-slate-300 cursor-pointer transition-all duration-200 shadow-xs hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-black text-[#D80050] uppercase tracking-wider group-hover:text-[#be0044] transition">
                    {ep.label}
                  </span>
                  <div className="flex items-center gap-1.5">
                    {ep.pdfPages && ep.pdfPages.length > 0 && (
                      <span className="text-[10px] font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200 flex items-center gap-1">
                        <FileText className="w-3 h-3 text-[#D80050]" />
                        <span>PDF ({ep.pdfPages.length}p)</span>
                      </span>
                    )}
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                </div>

                <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#D80050] transition line-clamp-1 mb-1.5">
                  {ep.title}
                </h4>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-3 font-reading">
                  {ep.summary}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700 group-hover:text-slate-950">
                <span className="flex items-center gap-1.5 text-[#D80050]">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>LEIA AGORA</span>
                </span>
                <span className="text-slate-400 group-hover:text-[#D80050] transition">→</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Related Works */}
      {relatedWorks.length > 0 && (
        <section className="pt-8 border-t border-slate-200">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#D80050] font-extrabold">
                Recomendações da Emissora
              </span>
              <h3 className="text-xl font-black text-slate-900 uppercase font-brand tracking-tight">
                OBRAS RELACIONADAS
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedWorks.map((rw) => (
              <WebCard key={rw.id} production={rw} onNavigate={onNavigate} compact />
            ))}
          </div>
        </section>
      )}

      {isManager && (
        <ImageUploadModal
          productionTitle={production.title}
          productionSlug={production.slug}
          currentImage={coverImage}
          isOpen={isUploadOpen}
          onClose={() => setIsUploadOpen(false)}
        />
      )}
    </div>
  );
}
