import { useState, useEffect } from 'react';
import { X, Image as ImageIcon, Check, Trash2, Shield, Link, ExternalLink } from 'lucide-react';
import { saveCoverForSlug, removeCoverForSlug } from '../utils/imageManager';
import { useManager } from '../utils/managerAuth';

interface ImageUploadModalProps {
  productionTitle: string;
  productionSlug: string;
  isOpen: boolean;
  onClose: () => void;
  currentImage?: string;
}

export function ImageUploadModal({
  productionTitle,
  productionSlug,
  isOpen,
  onClose,
  currentImage,
}: ImageUploadModalProps) {
  const { isManager } = useManager();
  const [imageUrl, setImageUrl] = useState(currentImage || '');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setImageUrl(currentImage || '');
    }
  }, [isOpen, currentImage]);

  // If not open or user is not a manager, do not display
  if (!isOpen || !isManager) return null;

  const handleSave = () => {
    if (imageUrl.trim()) {
      saveCoverForSlug(productionSlug, imageUrl.trim());
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 700);
    }
  };

  const handleRemove = () => {
    removeCoverForSlug(productionSlug);
    setImageUrl('');
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="relative w-full max-w-lg bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-2xl text-left">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1.5 rounded-lg transition"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Manager Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 rounded-xl bg-slate-900 text-white shadow-xs">
            <Shield className="w-6 h-6 text-[#D80050]" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#D80050] bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                Acesso Exclusivo do Gerenciador
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-brand mt-0.5">
              Vincular Capa por URL
            </h3>
            <p className="text-xs text-slate-500">
              Obra: <span className="text-slate-800 font-bold">{productionTitle}</span>
            </p>
          </div>
        </div>

        <p className="text-xs text-slate-600 leading-relaxed mb-4 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
          <span className="font-bold text-slate-900">Configuração de Capa:</span> Insira abaixo a URL direta da imagem oficial. A arte será renderizada com proporção original para máxima nitidez visual.
        </p>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1.5">
              <Link className="w-3.5 h-3.5 text-[#D80050]" />
              <span>URL da Imagem da Capa</span>
            </label>
            <input
              type="url"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="https://exemplo.com/imagem-da-capa.jpg"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#D80050] focus:bg-white transition"
              autoFocus
            />
            <span className="text-[11px] text-slate-400 mt-1 block">
              Dica: Aceita links diretos de imagens hospedadas (JPG, PNG, WEBP).
            </span>
          </div>

          {imageUrl && (
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-3">
              <div className="w-14 h-20 bg-white rounded flex items-center justify-center overflow-hidden border border-slate-200 shadow-xs shrink-0">
                <img
                  src={imageUrl}
                  alt="Pré-visualização da capa"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://placehold.co/100x150?text=URL+Invalida';
                  }}
                />
              </div>
              <div className="text-xs text-slate-700 min-w-0">
                <div className="font-bold text-slate-900 flex items-center gap-1">
                  <span>Pré-visualização</span>
                  <span className="text-[10px] text-emerald-600 bg-emerald-50 px-1.5 rounded border border-emerald-200">
                    URL Carregada
                  </span>
                </div>
                <div className="truncate text-slate-500 text-[11px] mt-0.5">{imageUrl}</div>
              </div>
            </div>
          )}

          <div className="flex gap-2 pt-2">
            {currentImage && (
              <button
                type="button"
                onClick={handleRemove}
                className="py-2.5 px-3.5 rounded-xl border border-rose-200 text-rose-700 hover:bg-rose-50 text-xs font-bold transition flex items-center justify-center gap-1.5"
                title="Remover capa e restaurar espaço reservado oficial"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Remover</span>
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold transition"
            >
              Cancelar
            </button>
            <button
              type="button"
              onClick={handleSave}
              disabled={!imageUrl.trim()}
              className="flex-1 py-2.5 rounded-xl bg-[#D80050] hover:bg-[#be0044] disabled:opacity-50 disabled:cursor-not-allowed text-white text-xs font-bold uppercase tracking-wider transition flex items-center justify-center gap-2 shadow-md shadow-[#D80050]/20"
            >
              {success ? (
                <>
                  <Check className="w-4 h-4" /> Salvo!
                </>
              ) : (
                'Salvar Capa Oficial'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
