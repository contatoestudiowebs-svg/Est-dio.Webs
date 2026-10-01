import React, { useState } from 'react';
import {
  Settings,
  Shield,
  Lock,
  Search,
  Check,
  Trash2,
  ExternalLink,
  Image as ImageIcon,
  Link as LinkIcon,
  LogOut,
  Sparkles,
  Layers,
  Film,
  CheckCircle2,
  AlertCircle,
  Eye,
  Filter
} from 'lucide-react';
import { PRODUCTIONS_DATA } from '../data/productions';
import {
  saveCoverForSlug,
  removeCoverForSlug,
  getSavedCovers,
  useProductionCover
} from '../utils/imageManager';
import { useManager } from '../utils/managerAuth';
import { SEOHead } from '../components/SEOHead';
import { WebProduction } from '../types';

interface ConfiguracoesPageProps {
  onNavigate: (path: string) => void;
}

export function ConfiguracoesPage({ onNavigate }: ConfiguracoesPageProps) {
  const { isManager, login, logout } = useManager();
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [search, setSearch] = useState('');
  const [filterCategory, setFilterCategory] = useState<'all' | 'Web série' | 'Web novela' | 'with-cover' | 'without-cover'>('all');
  
  // Tracks which production is currently having its cover edited inline
  const [editingSlug, setEditingSlug] = useState<string | null>(null);
  const [urlInput, setUrlInput] = useState('');
  const [savedSuccessSlug, setSavedSuccessSlug] = useState<string | null>(null);

  const savedCovers = getSavedCovers();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const ok = login(password);
    if (!ok) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
      setPassword('');
    }
  };

  const handleOpenEdit = (production: WebProduction) => {
    const current = savedCovers[production.slug] || production.coverImage || '';
    setEditingSlug(production.slug);
    setUrlInput(current);
  };

  const handleSaveCover = (slug: string) => {
    if (!urlInput.trim()) return;
    saveCoverForSlug(slug, urlInput.trim());
    setSavedSuccessSlug(slug);
    setTimeout(() => {
      setSavedSuccessSlug(null);
      setEditingSlug(null);
    }, 1000);
  };

  const handleRemoveCover = (slug: string) => {
    removeCoverForSlug(slug);
    setUrlInput('');
    setSavedSuccessSlug(slug);
    setTimeout(() => {
      setSavedSuccessSlug(null);
      setEditingSlug(null);
    }, 800);
  };

  // Filter productions
  const filtered = PRODUCTIONS_DATA.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.author.toLowerCase().includes(search.toLowerCase());

    if (!matchesSearch) return false;

    const hasCover = Boolean(savedCovers[p.slug] || p.coverImage);
    if (filterCategory === 'with-cover') return hasCover;
    if (filterCategory === 'without-cover') return !hasCover;
    if (filterCategory === 'Web série') return p.category === 'Web série';
    if (filterCategory === 'Web novela') return p.category === 'Web novela';
    return true;
  });

  const totalWithCovers = PRODUCTIONS_DATA.filter((p) => Boolean(savedCovers[p.slug] || p.coverImage)).length;

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SEOHead
        title="Configurações de Produções & Capas | Estúdio Webs"
        description="Painel oficial de configurações para gerenciamento de imagens e capas das produções do Estúdio Webs."
        canonicalPath="/configuracoes"
      />

      {/* Page Header */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 mb-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-xs">
              <Settings className="w-6 h-6 text-[#D80050]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#D80050] bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                  Painel de Configuração
                </span>
                {isManager && (
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Gerenciador Ativo
                  </span>
                )}
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 font-brand mt-1">
                Configuração de Imagens & Capas
              </h1>
              <p className="text-xs text-slate-500 mt-0.5">
                Altere a imagem/capa oficial de cada uma das {PRODUCTIONS_DATA.length} produções por URL direta.
              </p>
            </div>
          </div>

          {isManager && (
            <div className="flex items-center gap-2">
              <button
                onClick={() => onNavigate('/webs')}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition flex items-center gap-1.5"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Ver Catálogo Público</span>
              </button>
              <button
                onClick={logout}
                className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition flex items-center gap-1.5"
              >
                <LogOut className="w-3.5 h-3.5 text-rose-400" />
                <span>Sair do Gerenciador</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Screen 1: Login if not authenticated */}
      {!isManager ? (
        <div className="max-w-md mx-auto my-12 bg-white border border-slate-200 rounded-2xl p-8 shadow-lg text-center">
          <div className="w-14 h-14 rounded-2xl bg-rose-50 border border-rose-200 text-[#D80050] flex items-center justify-center mx-auto mb-4">
            <Lock className="w-7 h-7" />
          </div>

          <h2 className="text-xl font-black text-slate-900 font-brand mb-2">
            Acesso Restrito ao Gerenciador
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed mb-6">
            Para que você consiga alterar a imagem/capa de cada produção por URL sem expor botões de edição aos visitantes do site, confirme a senha de gerenciador.
          </p>

          <form onSubmit={handleLogin} className="space-y-4 text-left">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Senha do Gerenciador
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setPasswordError(false);
                }}
                placeholder="Digite a senha (ex: admin ou estudiowebs)"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#D80050] focus:bg-white transition"
                autoFocus
              />
              {passwordError && (
                <p className="text-xs text-red-600 font-semibold mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>Senha incorreta. Tente "admin" ou "estudiowebs".</span>
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-[#D80050] hover:bg-[#be0044] text-white text-xs font-bold uppercase tracking-wider transition shadow-md shadow-[#D80050]/20"
            >
              Liberar Configuração de Capas
            </button>

            <p className="text-[11px] text-slate-400 text-center pt-2">
              Dica: A senha padrão é <code>admin</code> ou <code>estudiowebs</code>
            </p>
          </form>
        </div>
      ) : (
        /* Screen 2: Authenticated Manager Dashboard */
        <div className="space-y-6">
          {/* Stats Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                Total de Produções
              </span>
              <span className="text-2xl font-black text-slate-900 font-brand">
                {PRODUCTIONS_DATA.length}
              </span>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                Capas Oficiais Vinculadas
              </span>
              <span className="text-2xl font-black text-emerald-600 font-brand">
                {totalWithCovers}
              </span>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                Espaços Reservados Padrão
              </span>
              <span className="text-2xl font-black text-slate-700 font-brand">
                {PRODUCTIONS_DATA.length - totalWithCovers}
              </span>
            </div>
          </div>

          {/* Search & Filter Toolbar */}
          <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar por título ou autor da produção..."
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#D80050] focus:bg-white transition"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-slate-600 font-bold"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 flex-wrap text-xs">
              <button
                onClick={() => setFilterCategory('all')}
                className={`px-3 py-1.5 rounded-lg font-bold transition ${
                  filterCategory === 'all'
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Todas ({PRODUCTIONS_DATA.length})
              </button>
              <button
                onClick={() => setFilterCategory('Web série')}
                className={`px-3 py-1.5 rounded-lg font-bold transition ${
                  filterCategory === 'Web série'
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Web Séries
              </button>
              <button
                onClick={() => setFilterCategory('Web novela')}
                className={`px-3 py-1.5 rounded-lg font-bold transition ${
                  filterCategory === 'Web novela'
                    ? 'bg-[#D80050] text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Web Novelas
              </button>
              <button
                onClick={() => setFilterCategory('without-cover')}
                className={`px-3 py-1.5 rounded-lg font-bold transition ${
                  filterCategory === 'without-cover'
                    ? 'bg-amber-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Sem Capa ({PRODUCTIONS_DATA.length - totalWithCovers})
              </button>
              <button
                onClick={() => setFilterCategory('with-cover')}
                className={`px-3 py-1.5 rounded-lg font-bold transition ${
                  filterCategory === 'with-cover'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Com Capa ({totalWithCovers})
              </button>
            </div>
          </div>

          {/* Productions List with Direct Cover Alter Button */}
          <div className="space-y-4">
            {filtered.length === 0 ? (
              <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center text-slate-500">
                Nenhuma produção encontrada com os critérios pesquisados.
              </div>
            ) : (
              filtered.map((production) => {
                const customCover = savedCovers[production.slug] || production.coverImage;
                const isEditing = editingSlug === production.slug;
                const isSaved = savedSuccessSlug === production.slug;
                const isSerie = production.category === 'Web série';

                return (
                  <div
                    key={production.id}
                    className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs hover:border-slate-300 transition"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
                      {/* Left: Thumbnail & Info */}
                      <div className="flex items-start gap-4 sm:gap-5 flex-1 min-w-0">
                        {/* Cover Preview Thumbnail */}
                        <div className="w-20 sm:w-24 aspect-[2/3] bg-slate-900 rounded-xl overflow-hidden border border-slate-200 shrink-0 shadow-xs flex items-center justify-center relative">
                          {customCover ? (
                            <img
                              src={customCover}
                              alt={production.title}
                              className="w-full h-full object-contain"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src =
                                  'https://placehold.co/100x150?text=Erro+URL';
                              }}
                            />
                          ) : (
                            <div className="p-2 text-center flex flex-col items-center justify-center text-white">
                              <ImageIcon className="w-6 h-6 text-slate-500 mb-1" />
                              <span className="text-[9px] text-slate-400 font-bold uppercase leading-tight">
                                Sem Capa
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Text Metadata */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap mb-1.5">
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
                            <span className="text-[11px] text-slate-500 font-medium">
                              • {production.totalUnits} {production.unitType}
                            </span>
                          </div>

                          <h3 className="text-base sm:text-lg font-black text-slate-900 font-brand truncate">
                            {production.title}
                          </h3>

                          <p className="text-xs text-slate-600 mb-2">
                            Autor: <strong className="text-slate-800">{production.author}</strong>
                          </p>

                          {/* Cover Status badge */}
                          <div className="flex items-center gap-2">
                            {customCover ? (
                              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                                <span>Capa Ativa por URL</span>
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-500 bg-slate-100 border border-slate-200 px-2.5 py-0.5 rounded-full">
                                <span>Espaço Reservado Padrão</span>
                              </span>
                            )}

                            {customCover && (
                              <span className="text-[11px] text-slate-400 truncate max-w-xs hidden sm:inline">
                                ({customCover})
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Right: Actions */}
                      <div className="flex items-center gap-2.5 shrink-0 self-start lg:self-center">
                        <button
                          onClick={() => handleOpenEdit(production)}
                          className={`px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition flex items-center gap-2 shadow-xs ${
                            isEditing
                              ? 'bg-slate-900 text-white'
                              : 'bg-[#D80050] hover:bg-[#be0044] text-white shadow-md shadow-[#D80050]/20'
                          }`}
                        >
                          <ImageIcon className="w-4 h-4" />
                          <span>{customCover ? 'Alterar Imagem/Capa' : 'Adicionar Imagem/Capa'}</span>
                        </button>

                        <button
                          onClick={() => onNavigate(`/webs/${production.slug}`)}
                          className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition"
                          title="Visualizar obra no site"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Inline Cover URL Editor */}
                    {isEditing && (
                      <div className="mt-5 pt-5 border-t border-slate-200 bg-slate-50/80 p-4 rounded-xl animate-fade-in">
                        <div className="flex items-center justify-between mb-2">
                          <label className="text-xs font-extrabold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                            <LinkIcon className="w-3.5 h-3.5 text-[#D80050]" />
                            <span>Cole a URL da Imagem da Capa</span>
                          </label>
                          <button
                            onClick={() => setEditingSlug(null)}
                            className="text-xs text-slate-400 hover:text-slate-600 font-bold"
                          >
                            Fechar Editor
                          </button>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-2">
                          <input
                            type="url"
                            value={urlInput}
                            onChange={(e) => setUrlInput(e.target.value)}
                            placeholder="https://exemplo.com/capa-oficial.jpg (JPG, PNG, WEBP)"
                            className="flex-1 bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#D80050]"
                            autoFocus
                          />

                          <div className="flex gap-2">
                            <button
                              onClick={() => handleSaveCover(production.slug)}
                              disabled={!urlInput.trim()}
                              className="px-5 py-2.5 rounded-xl bg-[#D80050] hover:bg-[#be0044] disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs font-bold uppercase tracking-wider transition shadow-sm flex items-center gap-1.5 shrink-0"
                            >
                              {isSaved ? (
                                <>
                                  <Check className="w-4 h-4" /> Salvo!
                                </>
                              ) : (
                                'Salvar Imagem'
                              )}
                            </button>

                            {customCover && (
                              <button
                                onClick={() => handleRemoveCover(production.slug)}
                                className="px-3.5 py-2.5 rounded-xl border border-rose-200 text-rose-700 hover:bg-rose-50 text-xs font-bold transition flex items-center gap-1 shrink-0"
                                title="Remover capa e restaurar espaço reservado padrão"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                                <span className="hidden sm:inline">Remover</span>
                              </button>
                            )}

                            <button
                              onClick={() => setEditingSlug(null)}
                              className="px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 text-xs font-bold transition shrink-0"
                            >
                              Cancelar
                            </button>
                          </div>
                        </div>

                        {/* Live preview */}
                        {urlInput && (
                          <div className="mt-3 p-3 bg-white rounded-xl border border-slate-200 flex items-center gap-3">
                            <div className="w-12 h-16 bg-slate-100 rounded overflow-hidden border border-slate-200 flex items-center justify-center shrink-0">
                              <img
                                src={urlInput}
                                alt="Pré-visualização"
                                className="w-full h-full object-contain"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src =
                                    'https://placehold.co/100x150?text=URL+Invalida';
                                }}
                              />
                            </div>
                            <div className="text-xs text-slate-700 min-w-0">
                              <div className="font-bold text-slate-900">Prévia da Nova Capa</div>
                              <div className="truncate text-slate-500 text-[11px]">{urlInput}</div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
}
