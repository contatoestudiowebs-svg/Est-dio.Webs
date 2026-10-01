import { useState, useEffect } from 'react';
import { X, Upload, Image as ImageIcon, Check, Trash2 } from 'lucide-react';
import { saveCoverForSlug, removeCoverForSlug } from '../utils/imageManager';

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
  currentImage
}: ImageUploadModalProps) {
  const [imageUrl, setImageUrl] = useState(currentImage || '');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setImageUrl(currentImage || '');
    }
  }, [isOpen, currentImage]);

  if (!isOpen) return null;

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

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64 = event.target?.result as string;
        if (base64) {
          saveCoverForSlug(productionSlug, base64);
          setImageUrl(base64);
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
            onClose();
          }, 700);
        }
      };
      reader.readAsDataURL(file);
    }
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

        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 rounded-xl bg-rose-50 border border-rose-200 text-[#D80050]">
            <ImageIcon className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 font-brand">Vincular Capa Oficial</h3>
            <p className="text-xs text-slate-500">
              Obra: <span className="text-slate-800 font-bold">{productionTitle}</span>
            </p>
          </div>
        </div>

        <p className="text-xs text-slate-600 leading-relaxed mb-4 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
          <span className="font-bold text-[#D80050]">Diretriz Oficial:</span> A imagem será exibida com{' '}
          <code className="bg-white border border-slate-200 px-1 py-0.5 rounded text-slate-800 font-mono text-[11px]">object-fit: contain</code> para preservar 100% da arte
          original sem cortes ou distorções.
        </p>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              URL da Imagem Oficial
            </label>
            <input
              type="url"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="https://exemplo.com/capa-oficial.jpg ou /capas/obra.jpg"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#D80050] focus:bg-white transition"
            />
          </div>

          <div className="relative flex items-center justify-center my-3">
            <div className="border-t border-slate-200 w-full"></div>
            <span className="bg-white px-3 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
              Ou selecione um arquivo
            </span>
          </div>

          <div>
            <label className="flex flex-col items-center justify-center border-2 border-dashed border-slate-300 hover:border-[#D80050] rounded-xl p-5 cursor-pointer bg-slate-50/60 hover:bg-rose-50/30 transition">
              <Upload className="w-7 h-7 text-slate-400 mb-2" />
              <span className="text-xs font-bold text-slate-800">Clique para selecionar a imagem oficial</span>
              <span className="text-[11px] text-slate-500 mt-1">PNG, JPG, WEBP</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>
          </div>

          {imageUrl && (
            <div className="mt-3 p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-3">
              <div className="w-12 h-16 bg-white rounded flex items-center justify-center overflow-hidden border border-slate-200 shadow-xs">
                <img
                  src={imageUrl}
                  alt="Pré-visualização"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
              <div className="text-xs text-slate-700 truncate">
                <div className="font-bold text-slate-900">Arte Selecionada</div>
                <div className="truncate text-slate-500 text-[11px]">{imageUrl}</div>
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
