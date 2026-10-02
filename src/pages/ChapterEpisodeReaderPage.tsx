import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  User,
  Film,
  Tv,
  List,
  Type,
  Share2,
  Check,
  Download,
  Printer,
  FileText,
  AlignLeft,
  FileDown,
  Sparkles,
  Layers,
  Eye,
  MessageSquare
} from 'lucide-react';
import { getProductionBySlug } from '../data/productions';
import { SEOHead } from '../components/SEOHead';
import { ChapterCommentsSection } from '../components/ChapterCommentsSection';

interface ChapterEpisodeReaderPageProps {
  productionSlug: string;
  chapterSlug: string;
  onNavigate: (path: string) => void;
}

export function ChapterEpisodeReaderPage({
  productionSlug,
  chapterSlug,
  onNavigate,
}: ChapterEpisodeReaderPageProps) {
  const production = getProductionBySlug(productionSlug);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [copied, setCopied] = useState(false);

  // Fallback 404
  if (!production) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Obra Não Encontrada</h2>
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

  const isSerie = production.category === 'Web série';
  const unitLabelSingular = isSerie ? 'Episódio' : 'Capítulo';

  // Find current index
  const currentIndex = production.episodes.findIndex((e) => e.slug === chapterSlug);
  const currentUnit = currentIndex !== -1 ? production.episodes[currentIndex] : production.episodes[0];
  const unitNumber = currentUnit?.number || 1;

  const prevUnit = currentIndex > 0 ? production.episodes[currentIndex - 1] : null;
  const nextUnit =
    currentIndex < production.episodes.length - 1
      ? production.episodes[currentIndex + 1]
      : null;

  const hasPdf = Boolean(currentUnit?.pdfPages && currentUnit.pdfPages.length > 0);
  const [activeTab, setActiveTab] = useState<'pdf' | 'text' | 'summary'>(hasPdf ? 'pdf' : 'text');
  const [currentPdfPage, setCurrentPdfPage] = useState<number>(0);
  const [pdfViewMode, setPdfViewMode] = useState<'all' | 'single'>('all');

  useEffect(() => {
    setCurrentPdfPage(0);
    if (hasPdf) {
      setActiveTab('pdf');
    }
  }, [chapterSlug, hasPdf]);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadOrPrintPdf = () => {
    if (!currentUnit?.pdfPages || currentUnit.pdfPages.length === 0) return;
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      window.print();
      return;
    }

    const pagesHtml = currentUnit.pdfPages
      .map(
        (pageText, idx) => `
        <div class="pdf-page">
          <div class="page-number">${idx > 0 ? idx + 1 + '.' : ''}</div>
          <pre class="page-content">${pageText.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>
        </div>
      `
      )
      .join('');

    printWindow.document.write(`
      <!DOCTYPE html>
      <html lang="pt-BR">
      <head>
        <meta charset="utf-8">
        <title>${production.title} - ${currentUnit.label} (Roteiro em PDF)</title>
        <style>
          @page {
            size: A4;
            margin: 15mm 15mm 20mm 20mm;
          }
          * { box-sizing: border-box; }
          body {
            margin: 0;
            padding: 0;
            font-family: 'Courier New', Courier, monospace;
            background: #e2e8f0;
            color: #000;
          }
          .pdf-page {
            width: 210mm;
            min-height: 297mm;
            margin: 20px auto;
            background: #ffffff;
            padding: 25mm 20mm 25mm 25mm;
            box-shadow: 0 4px 14px rgba(0,0,0,0.12);
            position: relative;
            page-break-after: always;
          }
          @media print {
            body { background: #fff; }
            .pdf-page {
              margin: 0;
              box-shadow: none;
              width: 100%;
              min-height: 100%;
              padding: 0;
              page-break-after: always;
            }
            .no-print { display: none !important; }
          }
          .page-number {
            position: absolute;
            top: 15mm;
            right: 20mm;
            font-size: 11pt;
            font-weight: bold;
          }
          .page-content {
            font-family: 'Courier New', Courier, monospace;
            font-size: 11pt;
            line-height: 1.5;
            white-space: pre-wrap;
            word-wrap: break-word;
            margin: 0;
          }
          .toolbar {
            position: sticky;
            top: 0;
            background: #0f172a;
            color: #fff;
            padding: 14px 24px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            z-index: 100;
            font-family: system-ui, -apple-system, sans-serif;
            font-size: 14px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
          }
          .btn-print {
            background: #D80050;
            color: white;
            border: none;
            padding: 10px 22px;
            border-radius: 8px;
            font-weight: bold;
            cursor: pointer;
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          .btn-print:hover { background: #be0044; }
        </style>
      </head>
      <body>
        <div class="toolbar no-print">
          <div>
            <span style="color:#D80050; font-weight:800; margin-right:8px;">ESTÚDIO WEBS</span>
            <strong>${production.title}</strong> — ${currentUnit.label} (${currentUnit.pdfPages.length} páginas)
          </div>
          <button class="btn-print" onclick="window.print()">Salvar como PDF / Imprimir</button>
        </div>
        ${pagesHtml}
      </body>
      </html>
    `);
    printWindow.document.close();
  };

  const seoTitle = `${currentUnit?.label} | ${production.title} | Estúdio Webs`;
  const seoDescription = `Leia agora o ${currentUnit?.label} de ${production.title}, de ${production.author}, na plataforma oficial do Estúdio Webs.`;

  return (
    <div className="min-h-screen py-8 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        canonicalPath={`/webs/${production.slug}/${currentUnit?.slug}`}
      />

      {/* Top Breadcrumb & Quick Back */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200">
        <nav className="flex items-center gap-2 text-xs text-slate-500 flex-wrap">
          <button onClick={() => onNavigate('/')} className="hover:text-slate-900 transition">
            Início
          </button>
          <span className="text-slate-400">/</span>
          <button onClick={() => onNavigate('/webs')} className="hover:text-slate-900 transition">
            Nossas Webs
          </button>
          <span className="text-slate-400">/</span>
          <button
            onClick={() => onNavigate(`/webs/${production.slug}`)}
            className="hover:text-slate-900 transition font-medium text-slate-700"
          >
            {production.title}
          </button>
          <span className="text-slate-400">/</span>
          <span className="text-[#D80050] font-bold">{currentUnit?.label}</span>
        </nav>

        <button
          onClick={() => onNavigate(`/webs/${production.slug}`)}
          className="inline-flex items-center gap-1.5 text-xs text-slate-700 hover:text-slate-900 font-bold uppercase tracking-wider bg-white hover:bg-slate-50 px-3.5 py-1.5 rounded-lg border border-slate-200 shadow-xs transition self-start sm:self-auto"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Voltar para a Obra</span>
        </button>
      </div>

      {/* Unit Header Banner */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 mb-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span
                className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                  isSerie
                    ? 'bg-blue-50 text-blue-700 border border-blue-200'
                    : 'bg-rose-50 text-[#D80050] border border-rose-200'
                }`}
              >
                {production.category}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                {production.status}
              </span>
              {hasPdf && (
                <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-rose-50 text-[#D80050] border border-rose-200 flex items-center gap-1">
                  <FileText className="w-3 h-3" />
                  PDF Oficial ({currentUnit?.pdfPages?.length} Páginas)
                </span>
              )}
              <span className="text-[11px] text-slate-500">
                • {unitNumber} de {production.totalUnits} {production.unitType}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 font-brand">
              {production.title} — <span className="text-[#D80050]">{currentUnit?.label}</span>
            </h1>

            <p className="text-xs text-slate-600 mt-1">
              Obra original de{' '}
              <button
                onClick={() =>
                  onNavigate(`/autores/${production.author.toLowerCase().replace(/\s+/g, '-')}`)
                }
                className="text-slate-900 font-bold hover:text-[#D80050] underline decoration-slate-300"
              >
                {production.author}
              </button>
            </p>
          </div>

          {/* Quick Selector Dropdown & Actions */}
          <div className="flex items-center gap-2 flex-wrap">
            {hasPdf && (
              <button
                onClick={handleDownloadOrPrintPdf}
                className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center gap-1.5 transition shadow-xs"
                title="Salvar como PDF ou Imprimir Roteiro Oficial"
              >
                <Download className="w-3.5 h-3.5 text-[#D80050]" />
                <span className="hidden sm:inline">Baixar / Imprimir PDF</span>
                <span className="sm:hidden">PDF</span>
              </button>
            )}

            <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 shadow-xs">
              <List className="w-4 h-4 text-slate-500" />
              <select
                value={currentUnit?.slug}
                onChange={(e) => onNavigate(`/webs/${production.slug}/${e.target.value}`)}
                className="bg-transparent text-xs text-slate-900 font-bold focus:outline-none cursor-pointer"
              >
                {production.episodes.map((ep) => (
                  <option key={ep.slug} value={ep.slug} className="bg-white text-slate-900">
                    {ep.label}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={handleShare}
              className="p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 transition shadow-xs"
              title="Compartilhar capítulo"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Quick Navigation Buttons Top */}
        <div className="flex items-center justify-between gap-3 mt-6 pt-5 border-t border-slate-100">
          <button
            onClick={() => prevUnit && onNavigate(`/webs/${production.slug}/${prevUnit.slug}`)}
            disabled={!prevUnit}
            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-40 disabled:cursor-not-allowed text-xs font-bold uppercase tracking-wider text-slate-700 border border-slate-200 transition flex items-center gap-1.5"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">
              {prevUnit ? `${unitLabelSingular} Anterior` : 'Início da Obra'}
            </span>
            <span className="sm:hidden">Anterior</span>
          </button>

          <span className="text-xs text-slate-600 font-semibold text-center">
            {currentUnit?.label}
          </span>

          <button
            onClick={() => nextUnit && onNavigate(`/webs/${production.slug}/${nextUnit.slug}`)}
            disabled={!nextUnit}
            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-40 disabled:cursor-not-allowed text-xs font-bold uppercase tracking-wider text-slate-700 border border-slate-200 transition flex items-center gap-1.5"
          >
            <span className="hidden sm:inline">
              {nextUnit ? `Próximo ${unitLabelSingular}` : 'Último'}
            </span>
            <span className="sm:hidden">Próximo</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Official Summary Callout */}
      {currentUnit?.summary && (
        <div className="bg-white border-l-4 border-[#D80050] border-y border-r border-slate-200 rounded-xl p-5 mb-8 shadow-xs">
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#D80050] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Resumo Oficial do {currentUnit.label}
            </span>
            {hasPdf && (
              <span className="text-[10px] text-slate-500 font-semibold">
                Roteiro original de {production.author}
              </span>
            )}
          </div>
          <p className="text-sm text-slate-800 leading-relaxed font-sans font-medium">
            {currentUnit.summary}
          </p>
        </div>
      )}

      {/* Reader Tabs Toggles (PDF Visualizer, Text, Summary) */}
      <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
        <div className="flex items-center p-1 bg-slate-200 rounded-xl border border-slate-300">
          {hasPdf && (
            <button
              onClick={() => setActiveTab('pdf')}
              className={`px-4 py-2 rounded-lg text-xs font-extrabold uppercase tracking-wider flex items-center gap-2 transition ${
                activeTab === 'pdf'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-[#D80050]" />
              <span>Roteiro em PDF</span>
              <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-rose-100 text-[#D80050]">
                {currentUnit?.pdfPages?.length} Páginas
              </span>
            </button>
          )}

          <button
            onClick={() => setActiveTab('text')}
            className={`px-4 py-2 rounded-lg text-xs font-extrabold uppercase tracking-wider flex items-center gap-2 transition ${
              activeTab === 'text'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <AlignLeft className="w-3.5 h-3.5 text-blue-600" />
            <span>Leitura Contínua</span>
          </button>

          <button
            onClick={() => setActiveTab('summary')}
            className={`px-4 py-2 rounded-lg text-xs font-extrabold uppercase tracking-wider flex items-center gap-2 transition ${
              activeTab === 'summary'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
            <span>Ficha & Resumo</span>
          </button>
        </div>

        {/* Font size toggles (for continuous text view) */}
        {activeTab === 'text' && (
          <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-slate-200 shadow-xs">
            <Type className="w-3.5 h-3.5 text-slate-500 mx-1.5" />
            <button
              onClick={() => setFontSize('normal')}
              className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                fontSize === 'normal' ? 'bg-[#D80050] text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              A
            </button>
            <button
              onClick={() => setFontSize('large')}
              className={`px-2 py-0.5 rounded text-xs font-bold ${
                fontSize === 'large' ? 'bg-[#D80050] text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              A+
            </button>
            <button
              onClick={() => setFontSize('xlarge')}
              className={`px-2 py-0.5 rounded text-sm font-bold ${
                fontSize === 'xlarge' ? 'bg-[#D80050] text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              A++
            </button>
          </div>
        )}

        {/* PDF Page Controls (when activeTab is pdf) */}
        {activeTab === 'pdf' && currentUnit?.pdfPages && (
          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex items-center bg-white border border-slate-200 rounded-lg p-0.5 shadow-xs text-xs font-bold text-slate-700">
              <button
                onClick={() => setPdfViewMode('all')}
                className={`px-2.5 py-1 rounded ${
                  pdfViewMode === 'all'
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Todas as Páginas
              </button>
              <button
                onClick={() => setPdfViewMode('single')}
                className={`px-2.5 py-1 rounded ${
                  pdfViewMode === 'single'
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Página por Página
              </button>
            </div>

            {pdfViewMode === 'single' && (
              <div className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-lg px-2 py-1 shadow-xs">
                <button
                  disabled={currentPdfPage <= 0}
                  onClick={() => setCurrentPdfPage((p) => Math.max(0, p - 1))}
                  className="p-1 rounded hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <span className="text-xs font-bold text-slate-800">
                  {currentPdfPage + 1} / {currentUnit.pdfPages.length}
                </span>
                <button
                  disabled={currentPdfPage >= currentUnit.pdfPages.length - 1}
                  onClick={() =>
                    setCurrentPdfPage((p) => Math.min(currentUnit.pdfPages!.length - 1, p + 1))
                  }
                  className="p-1 rounded hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* VIEW MODE 1: PDF Screenplay Visualizer */}
      {activeTab === 'pdf' && currentUnit?.pdfPages && (
        <div className="space-y-8 mb-8">
          {pdfViewMode === 'all' ? (
            currentUnit.pdfPages.map((pageText, pageIndex) => (
              <div
                key={pageIndex}
                className="bg-white border border-slate-300 rounded-sm shadow-md sm:shadow-lg p-6 sm:p-14 font-mono text-[13px] sm:text-[14px] leading-relaxed text-slate-950 relative select-text"
              >
                <div className="flex items-center justify-between pb-3 mb-6 border-b border-slate-200 text-xs text-slate-400 font-sans">
                  <span>
                    {production.title} • {currentUnit.label}
                  </span>
                  <span className="font-mono font-bold text-slate-700">
                    Página {pageIndex + 1} de {currentUnit.pdfPages!.length}
                  </span>
                </div>

                <pre className="whitespace-pre-wrap font-mono text-slate-900 leading-relaxed tracking-normal font-medium">
                  {pageText}
                </pre>

                <div className="mt-8 pt-4 border-t border-slate-100 text-right text-[11px] text-slate-400 font-sans">
                  {pageIndex + 1}.
                </div>
              </div>
            ))
          ) : (
            <div className="bg-white border border-slate-300 rounded-sm shadow-md sm:shadow-lg p-6 sm:p-14 font-mono text-[13px] sm:text-[14px] leading-relaxed text-slate-950 relative select-text min-h-[600px] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-6 border-b border-slate-200 text-xs text-slate-400 font-sans">
                  <span>
                    {production.title} • {currentUnit.label}
                  </span>
                  <span className="font-mono font-bold text-slate-700">
                    Página {currentPdfPage + 1} de {currentUnit.pdfPages.length}
                  </span>
                </div>

                <pre className="whitespace-pre-wrap font-mono text-slate-900 leading-relaxed tracking-normal font-medium">
                  {currentUnit.pdfPages[currentPdfPage]}
                </pre>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-sans">
                <button
                  disabled={currentPdfPage <= 0}
                  onClick={() => setCurrentPdfPage((p) => Math.max(0, p - 1))}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 disabled:opacity-30 disabled:cursor-not-allowed font-bold"
                >
                  ← Página Anterior
                </button>
                <span className="font-mono font-bold">{currentPdfPage + 1}.</span>
                <button
                  disabled={currentPdfPage >= currentUnit.pdfPages.length - 1}
                  onClick={() =>
                    setCurrentPdfPage((p) => Math.min(currentUnit.pdfPages!.length - 1, p + 1))
                  }
                  className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 disabled:opacity-30 disabled:cursor-not-allowed font-bold"
                >
                  Próxima Página →
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* VIEW MODE 2: Continuous Text / Script Reader */}
      {activeTab === 'text' && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 mb-8 shadow-sm">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#D80050]" />
              <h3 className="text-base font-extrabold uppercase tracking-wider text-slate-900">
                LEITURA INTEGRAL DO ROTEIRO
              </h3>
            </div>
          </div>

          <div
            className={`space-y-6 text-slate-800 leading-relaxed ${
              fontSize === 'normal'
                ? 'text-base'
                : fontSize === 'large'
                ? 'text-lg'
                : 'text-xl leading-loose'
            }`}
          >
            {currentUnit?.content ? (
              <div className="font-mono text-sm leading-relaxed whitespace-pre-wrap bg-slate-50 p-6 rounded-xl border border-slate-200 text-slate-900">
                {currentUnit.content}
              </div>
            ) : (
              <>
                <div className="p-4 bg-rose-50/70 rounded-xl border border-rose-200/80 text-xs text-slate-700 font-sans mb-6">
                  <strong className="text-slate-900">Nota de Publicação:</strong> {currentUnit?.summary}{' '}
                  Este espaço está estruturado para receber o texto integral, diálogos e indicações deste{' '}
                  {unitLabelSingular.toLowerCase()}.
                </div>

                <div className="border-l-2 border-[#D80050] pl-4 py-1 italic text-slate-700 text-sm">
                  "{production.title}" — {currentUnit?.label} • Autoria: {production.author}
                </div>
              </>
            )}

            <div className="py-6 text-center border-t border-b border-slate-200 my-8">
              <p className="text-slate-500 text-sm font-sans mb-1">[ Fim do {currentUnit?.label} ]</p>
              <p className="text-xs text-slate-400 font-sans">
                Estúdio Webs • Teledramaturgia Virtual Oficial
              </p>
            </div>
          </div>
        </div>
      )}

      {/* VIEW MODE 3: Summary / Overview Tab */}
      {activeTab === 'summary' && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 mb-8 shadow-sm">
          <div className="flex items-center gap-2 pb-4 mb-6 border-b border-slate-200">
            <BookOpen className="w-5 h-5 text-[#D80050]" />
            <h3 className="text-base font-extrabold uppercase tracking-wider text-slate-900">
              FICHA E RESUMO DO {currentUnit?.label.toUpperCase()}
            </h3>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h4 className="text-xs font-extrabold text-[#D80050] uppercase tracking-wider mb-2">
                Sinopse do Episódio
              </h4>
              <p className="text-base text-slate-800 leading-relaxed font-sans">
                {currentUnit?.summary}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  Obra Oficial
                </span>
                <span className="font-bold text-slate-900">{production.title}</span>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  Autoria
                </span>
                <span className="font-bold text-slate-900">{production.author}</span>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  Formato de Exibição
                </span>
                <span className="font-bold text-slate-900">
                  {production.category} ({production.totalUnits} {production.unitType})
                </span>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  Roteiro Completo
                </span>
                <span className="font-bold text-emerald-700">
                  {hasPdf ? `Disponível (${currentUnit?.pdfPages?.length} páginas em PDF)` : 'Disponível no Portal'}
                </span>
              </div>
            </div>

            {hasPdf && (
              <div className="pt-4 flex items-center gap-3">
                <button
                  onClick={() => setActiveTab('pdf')}
                  className="px-6 py-3 rounded-xl bg-[#D80050] hover:bg-[#be0044] text-white font-bold text-xs uppercase tracking-wider transition shadow-md shadow-[#D80050]/20 flex items-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  <span>Ler Roteiro em PDF Agora</span>
                </button>
                <button
                  onClick={handleDownloadOrPrintPdf}
                  className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 font-bold text-xs uppercase tracking-wider transition flex items-center gap-2"
                >
                  <Download className="w-4 h-4 text-slate-600" />
                  <span>Baixar / Imprimir PDF</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Reader Comments Section */}
      <ChapterCommentsSection
        productionTitle={production.title}
        productionSlug={production.slug}
        chapterSlug={currentUnit?.slug || chapterSlug}
        unitLabel={currentUnit?.label || unitLabelSingular}
        authorName={production.author}
      />

      {/* Bottom Navigation Buttons */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
        <button
          onClick={() => prevUnit && onNavigate(`/webs/${production.slug}/${prevUnit.slug}`)}
          disabled={!prevUnit}
          className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-40 disabled:cursor-not-allowed text-xs font-bold uppercase tracking-wider text-slate-800 border border-slate-200 transition flex items-center justify-center gap-2"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>{prevUnit ? `${unitLabelSingular} Anterior` : 'Primeiro'}</span>
        </button>

        <button
          onClick={() => onNavigate(`/webs/${production.slug}`)}
          className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 text-xs font-black uppercase tracking-wider transition flex items-center justify-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar para a Obra</span>
        </button>

        <button
          onClick={() => nextUnit && onNavigate(`/webs/${production.slug}/${nextUnit.slug}`)}
          disabled={!nextUnit}
          className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#D80050] hover:bg-[#be0044] disabled:opacity-40 disabled:cursor-not-allowed text-xs font-bold uppercase tracking-wider text-white transition flex items-center justify-center gap-2 shadow-md shadow-[#D80050]/20"
        >
          <span>{nextUnit ? `Próximo ${unitLabelSingular}` : 'Obra Concluída'}</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
