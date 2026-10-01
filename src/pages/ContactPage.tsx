import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, MessageSquare, User, AtSign, FileText } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

export function ContactPage() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.nome && formData.email && formData.mensagem) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen py-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <SEOHead
        title="Contato | Estúdio Webs"
        description="Entre em contato com a equipe editorial do Estúdio Webs: dúvidas, sugestões, imprensa e suporte para autores."
        canonicalPath="/contato"
      />

      {/* Header */}
      <div className="mb-10 pb-6 border-b border-slate-200">
        <span className="text-xs uppercase tracking-widest text-[#D80050] font-extrabold">
          Atendimento Oficial
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 font-brand tracking-tight mt-1">
          CONTATO
        </h1>
        <p className="text-sm text-slate-600 mt-1">
          Envie sua mensagem, dúvida ou sugestão para a equipe do Estúdio Webs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Info Column */}
        <div className="md:col-span-4 space-y-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <div className="p-3 w-12 h-12 rounded-xl bg-rose-50 text-[#D80050] border border-rose-200 flex items-center justify-center">
              <Mail className="w-6 h-6" />
            </div>

            <h3 className="text-lg font-bold text-slate-900 font-brand">
              Fale com o Estúdio Webs
            </h3>

            <p className="text-xs text-slate-600 leading-relaxed font-reading">
              Estamos sempre abertos a comentários sobre nossas produções, ideias de parceria e
              contato de leitores e espectadores da teledramaturgia virtual.
            </p>

            <div className="pt-3 border-t border-slate-100 space-y-2 text-xs">
              <div className="text-slate-700">
                <span className="text-slate-500 font-medium">Plataforma:</span> Estúdio Webs Oficial
              </div>
              <div className="text-slate-700">
                <span className="text-slate-500 font-medium">Atendimento:</span> Mensagem direta via formulário
              </div>
              <div className="text-slate-700">
                <span className="text-slate-500 font-medium">Tempo de resposta:</span> Até 48h úteis
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Column */}
        <div className="md:col-span-8">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 border-2 border-emerald-500/50 flex items-center justify-center text-emerald-600 shadow-xs">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-brand">Mensagem Enviada com Sucesso!</h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                  Obrigado por entrar em contato com o <strong className="text-slate-900">Estúdio Webs</strong>. Sua mensagem foi
                  encaminhada para a nossa equipe editorial.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ nome: '', email: '', assunto: '', mensagem: '' });
                  }}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase transition"
                >
                  Enviar Nova Mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Nome */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Nome Completo <span className="text-[#D80050]">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      required
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      placeholder="Seu nome ou pseudônimo de autor"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#D80050] focus:bg-white transition"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Seu E-mail <span className="text-[#D80050]">*</span>
                  </label>
                  <div className="relative">
                    <AtSign className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="exemplo@dominio.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#D80050] focus:bg-white transition"
                    />
                  </div>
                </div>

                {/* Assunto */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Assunto
                  </label>
                  <div className="relative">
                    <FileText className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      value={formData.assunto}
                      onChange={(e) => setFormData({ ...formData, assunto: e.target.value })}
                      placeholder="Dúvida, sugestão, parceria ou elogio"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#D80050] focus:bg-white transition"
                    />
                  </div>
                </div>

                {/* Mensagem */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Mensagem <span className="text-[#D80050]">*</span>
                  </label>
                  <div className="relative">
                    <textarea
                      required
                      rows={5}
                      value={formData.mensagem}
                      onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                      placeholder="Escreva sua mensagem aqui..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#D80050] focus:bg-white resize-none font-reading leading-relaxed transition"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#D80050] hover:bg-[#be0044] text-white font-extrabold text-xs uppercase tracking-wider transition shadow-lg shadow-[#D80050]/20 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Mensagem</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
