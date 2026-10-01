import React, { useState } from 'react';
import {
  Shield,
  Lock,
  X,
  Check,
  LogOut,
  Image as ImageIcon,
  Link,
  Search,
  CheckCircle2,
  Trash2,
  ExternalLink,
  Settings
} from 'lucide-react';
import { useManager } from '../utils/managerAuth';
import { PRODUCTIONS_DATA } from '../data/productions';
import {
  saveCoverForSlug,
  removeCoverForSlug,
  useProductionCover,
  getSavedCovers
} from '../utils/imageManager';

interface ManagerModalProps {
  onNavigate?: (path: string) => void;
}

export function ManagerModal({ onNavigate }: ManagerModalProps) {
  const { isManager, login, logout, isManagerModalOpen, closeManagerModal } = useManager();
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedSlug, setSelectedSlug] = useState<string>(PRODUCTIONS_DATA[0]?.slug || '');
  const [coverUrlInput, setCoverUrlInput] = useState('');
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Read current cover of selected production
  const selectedProduction = PRODUCTIONS_DATA.find((p) => p.slug === selectedSlug);
  const currentCover = useProductionCover(selectedSlug, selectedProduction?.coverImage);

  if (!isManagerModalOpen) return null;

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ok = login(password);
    if (!ok) {
      setError(true);
    } else {
      setError(false);
      setPassword('');
    }
  };

  const handleSaveCover = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSlug || !coverUrlInput.trim()) return;
    saveCoverForSlug(selectedSlug, coverUrlInput.trim());
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
      setCoverUrlInput('');
    }, 1200);
  };

  const handleRemoveCover = () => {
    if (!selectedSlug) return;
    removeCoverForSlug(selectedSlug);
    setCoverUrlInput('');
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 800);
  };

  const filteredProductions = PRODUCTIONS_DATA.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.author.toLowerCase().includes(search.toLowerCase())
  );

  const savedCovers = getSavedCovers();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-2xl text-left max-h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-xs">
              <Shield className="w-5 h-5 text-[#D80050]" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-slate-900 font-brand">
                {isManager ? 'Painel do Gerenciador' : 'Acesso Restrito ao Gerenciador'}
              </h3>
              <p className="text-xs text-slate-500">
                {isManager
                  ? 'Gerenciamento de capas oficiais por URL'
                  : 'Digite a senha para habilitar o modo de edição de capas'}
              </p>
            </div>
          </div>

          <button
            onClick={closeManagerModal}
            className="text-slate-400 hover:text-slate-700 p-1.5 rounded-lg transition"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {!isManager ? (
          /* Login Form */
          <form onSubmit={handleLoginSubmit} className="py-6 space-y-4">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-600 leading-relaxed">
              <strong className="text-slate-900 block mb-1">Apenas o Gerenciador tem permissão:</strong>
              Os visitantes comuns do site não veem os botões de adicionar ou alterar capa. Digite a senha para autenticar como gerenciador.
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Senha do Gerenciador
              </label>
              <div className="relative">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError(false);
                  }}
                  placeholder="Digite sua senha (ex: admin ou estudiowebs)"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#D80050] focus:bg-white transition"
                  autoFocus
                />
                <Lock className="w-4 h-4 text-slate-400 absolute right-3.5 top-3.5" />
              </div>
              {error && (
                <p className="text-xs text-red-600 font-semibold mt-1.5">
                  Senha incorreta. Tente "admin" ou "estudiowebs".
                </p>
              )}
            </div>

            <div className="pt-2 flex items-center justify-between gap-3">
              <span className="text-[11px] text-slate-400">
                Dica padrão: <code>admin</code> ou <code>estudiowebs</code>
              </span>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-[#D80050] hover:bg-[#be0044] text-white text-xs font-bold uppercase tracking-wider transition shadow-md shadow-[#D80050]/20"
              >
                Entrar como Gerenciador
              </button>
            </div>
          </form>
        ) : (
          /* Manager Logged-In Panel */
          <div className="py-4 space-y-5 overflow-y-auto pr-1">
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3.5 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <div className="text-xs text-emerald-900 font-semibold">
                  <span>Modo Gerenciador Ativado com Sucesso.</span>
                  <span className="block text-[11px] text-emerald-700 font-normal">
                    Os botões de adicionar capa por URL agora estão liberados para você nas obras.
                  </span>
                </div>
              </div>
              <button
                onClick={logout}
                className="px-3 py-1.5 rounded-lg bg-white border border-emerald-300 text-emerald-800 text-xs font-bold hover:bg-emerald-100 transition flex items-center gap-1 shrink-0"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Sair</span>
              </button>
            </div>

            {/* Quick URL Cover Setter Tool */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-800 mb-3 flex items-center gap-2">
                <Link className="w-4 h-4 text-[#D80050]" />
                <span>Adicionar / Atualizar Capa por URL</span>
              </h4>

              <form onSubmit={handleSaveCover} className="space-y-3.5">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    1. Selecione a Obra
                  </label>
                  <select
                    value={selectedSlug}
                    onChange={(e) => {
                      setSelectedSlug(e.target.value);
                      setCoverUrlInput('');
                    }}
                    className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#D80050]"
                  >
                    {PRODUCTIONS_DATA.map((p) => {
                      const hasCustom = Boolean(savedCovers[p.slug] || p.coverImage);
                      return (
                        <option key={p.slug} value={p.slug}>
                          {p.title} ({p.category}) — {p.author} {hasCustom ? '✓ Capa ativa' : '• Sem capa'}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    2. Cole a URL Direta da Imagem Oficial
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="url"
                      value={coverUrlInput}
                      onChange={(e) => setCoverUrlInput(e.target.value)}
                      placeholder="https://exemplo.com/capa-da-obra.jpg"
                      className="flex-1 bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#D80050]"
                    />
                    <button
                      type="submit"
                      disabled={!coverUrlInput.trim()}
                      className="px-5 py-2.5 rounded-xl bg-[#D80050] hover:bg-[#be0044] disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs font-bold uppercase tracking-wider transition shadow-sm flex items-center gap-1.5"
                    >
                      {saveSuccess ? (
                        <>
                          <Check className="w-3.5 h-3.5" /> Salvo!
                        </>
                      ) : (
                        'Salvar Capa'
                      )}
                    </button>
                  </div>
                </div>

                {/* Preview */}
                {(coverUrlInput || currentCover) && (
                  <div className="mt-3 p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-12 h-16 bg-slate-100 rounded overflow-hidden border border-slate-200 flex items-center justify-center shrink-0">
                        <img
                          src={coverUrlInput || currentCover}
                          alt="Prévia"
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src =
                              'https://placehold.co/100x150?text=Erro+URL';
                          }}
                        />
                      </div>
                      <div className="text-xs text-slate-700 min-w-0">
                        <span className="font-bold text-slate-900 block truncate">
                          {coverUrlInput ? 'Pré-visualização da URL Digitada' : 'Capa Atual Cadastrada'}
                        </span>
                        <span className="text-[11px] text-slate-500 truncate block">
                          {coverUrlInput || currentCover}
                        </span>
                      </div>
                    </div>

                    {currentCover && (
                      <button
                        type="button"
                        onClick={handleRemoveCover}
                        className="px-3 py-1.5 rounded-lg border border-rose-200 text-rose-700 hover:bg-rose-50 text-xs font-bold transition flex items-center gap-1 shrink-0"
                        title="Remover capa"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Remover</span>
                      </button>
                    )}
                  </div>
                )}
              </form>
            </div>

            {/* List of all productions and their cover status */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Todas as Obras ({PRODUCTIONS_DATA.length})
                </span>
                <div className="relative w-48">
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Filtrar obra..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#D80050]"
                  />
                </div>
              </div>

              <div className="border border-slate-200 rounded-xl divide-y divide-slate-100 max-h-48 overflow-y-auto bg-white">
                {filteredProductions.map((p) => {
                  const hasCustom = Boolean(savedCovers[p.slug] || p.coverImage);
                  const isSelected = p.slug === selectedSlug;
                  return (
                    <div
                      key={p.slug}
                      onClick={() => {
                        setSelectedSlug(p.slug);
                        setCoverUrlInput(savedCovers[p.slug] || '');
                      }}
                      className={`p-2.5 flex items-center justify-between text-xs cursor-pointer transition ${
                        isSelected ? 'bg-rose-50/80 font-bold' : 'hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate">
                        <span className="text-[#D80050] font-black">•</span>
                        <span className="truncate text-slate-900">{p.title}</span>
                        <span className="text-[10px] text-slate-500 font-normal truncate">
                          ({p.category})
                        </span>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        {hasCustom ? (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                            Capa Ativa
                          </span>
                        ) : (
                          <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-500">
                            Sem Capa
                          </span>
                        )}
                        <span className="text-slate-400">→</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100">
              {onNavigate && (
                <button
                  type="button"
                  onClick={() => {
                    closeManagerModal();
                    onNavigate('/configuracoes');
                  }}
                  className="w-full sm:w-auto px-4 py-2 rounded-xl bg-rose-50 text-[#D80050] hover:bg-rose-100 text-xs font-bold transition flex items-center justify-center gap-1.5 border border-rose-200"
                >
                  <Settings className="w-3.5 h-3.5" />
                  <span>Abrir Tela Completa de Configurações</span>
                </button>
              )}
              <button
                type="button"
                onClick={closeManagerModal}
                className="w-full sm:w-auto px-5 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition"
              >
                Concluir & Navegar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Discreet floating indicator that only appears when manager is active
export function ManagerFloatingBar({ onNavigate }: { onNavigate?: (path: string) => void }) {
  const { isManager, openManagerModal, logout } = useManager();

  if (!isManager) return null;

  return (
    <div className="fixed bottom-4 right-4 z-40 bg-slate-900/95 text-white border border-slate-700 shadow-2xl rounded-2xl px-4 py-2.5 flex items-center gap-3 backdrop-blur-md animate-fade-in flex-wrap sm:flex-nowrap">
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-xs font-bold font-brand tracking-wide">
          Modo Gerenciador <span className="text-[#D80050] font-black">ATIVO</span>
        </span>
      </div>

      <div className="h-4 w-px bg-slate-700 hidden sm:block" />

      {onNavigate && (
        <button
          onClick={() => onNavigate('/configuracoes')}
          className="text-xs font-bold text-slate-300 hover:text-white transition flex items-center gap-1.5 bg-slate-800 px-2.5 py-1 rounded-lg border border-slate-700"
          title="Ir para o painel de configurações de capas"
        >
          <Settings className="w-3.5 h-3.5 text-[#D80050]" />
          <span>Configuração</span>
        </button>
      )}

      <button
        onClick={openManagerModal}
        className="text-xs font-bold text-slate-300 hover:text-white transition flex items-center gap-1.5"
      >
        <ImageIcon className="w-3.5 h-3.5 text-[#D80050]" />
        <span>Capas por URL</span>
      </button>

      <button
        onClick={logout}
        className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-rose-400 transition"
        title="Sair do Modo Gerenciador"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
