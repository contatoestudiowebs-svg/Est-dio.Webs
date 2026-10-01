import React from 'react';
import { Tv, Sparkles, Target, Users, BookOpen, Film, Award, Send } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="min-h-screen py-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <SEOHead
        title="Sobre o Estúdio Webs | Web Emissora de Ficção"
        description="Conheça a história, a proposta editorial e o propósito do Estúdio Webs: a emissora digital de teledramaturgia virtual e web produções."
        canonicalPath="/sobre"
      />

      {/* Header */}
      <div className="mb-10 pb-6 border-b border-slate-200">
        <span className="text-xs uppercase tracking-widest text-[#D80050] font-extrabold">
          Institucional
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 font-brand tracking-tight mt-1">
          SOBRE O ESTÚDIO WEBS
        </h1>
        <p className="text-sm text-slate-600 mt-1">
          A história, os valores e a missão da nossa web emissora de ficção.
        </p>
      </div>

      {/* Main Content Box */}
      <div className="space-y-8 text-slate-700 font-reading leading-relaxed">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
            <div className="p-3 rounded-xl bg-rose-50 text-[#D80050] border border-rose-200">
              <Tv className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 font-brand">
                Uma Emissora Dedicada à Teledramaturgia Digital
              </h2>
              <span className="text-xs text-slate-500">
                Pioneirismo em webséries e webnovelas virtuais
              </span>
            </div>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
            <p>
              O <strong className="text-slate-900">Estúdio Webs</strong> nasceu com o propósito de ser um espaço acolhedor,
              profissional e estruturado para a difusão e preservação da teledramaturgia virtual.
              Reunindo talentos independentes, roteiristas, autores e criadores de conteúdo ficcional,
              a emissora atua como uma vitrine digital para produções audiovisuais e literárias serializadas.
            </p>

            <p>
              Nosso catálogo é composto por obras originais divididas em duas grandes vertentes: as{' '}
              <strong className="text-[#D80050]">Web Novelas</strong>, com suas tramas contínuas, múltiplos
              núcleos e capítulos envolventes; e as <strong className="text-blue-700">Web Séries</strong>,
              com ritmos cinematográficos, temporadas temáticas e episódios dinâmicos.
            </p>

            <p>
              Com um acervo comemorado de <strong className="text-slate-900">31 produções oficiais inteiramente finalizadas</strong> e
              centenas de capítulos e episódios publicados, o Estúdio Webs consolida-se como uma das
              principais referências na comunidade de autores virtuais do Brasil.
            </p>
          </div>
        </div>

        {/* Pillars / Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-rose-50 text-[#D80050] border border-rose-200 flex items-center justify-center mb-4">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 font-brand mb-2">Nossa Missão</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-reading">
              Valorizar a criatividade autoral, oferecendo uma plataforma moderna, estável e elegante
              para que histórias fascinantes encontrem seus leitores e espectadores.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center mb-4">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 font-brand mb-2">Qualidade Editorial</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-reading">
              Cuidado minucioso com a catalogação de artes oficiais, respeito à integridade dos roteiros,
              organização de capítulos e episódios sem cortes ou distorções.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 border border-blue-200 flex items-center justify-center mb-4">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 font-brand mb-2">Comunidade Criativa</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-reading">
              Foco no protagonismo dos autores parceiros: Fred Reids, Fernando Ricoboni, Edney Matias,
              Liz Santos, Everton B Dutra, Guilhardo Almeida e novos talentos.
            </p>
          </div>
        </div>

        {/* CTA Card */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-[#101726] to-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl text-white">
          <div>
            <h4 className="text-lg font-bold text-white font-brand mb-1">
              Quer fazer parte do Estúdio Webs?
            </h4>
            <p className="text-xs text-slate-300">
              Envie seu projeto para avaliação ou entre em contato com nossa equipe.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('/contato')}
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold uppercase tracking-wider border border-slate-700 transition"
            >
              Fale Conosco
            </button>
            <button
              onClick={() => onNavigate('/envie-seu-projeto')}
              className="px-5 py-2.5 rounded-xl bg-[#D80050] hover:bg-[#be0044] text-white text-xs font-bold uppercase tracking-wider transition shadow-lg shadow-[#D80050]/30 flex items-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Envie seu Projeto</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
