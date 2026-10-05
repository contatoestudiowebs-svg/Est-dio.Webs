import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { HomePage } from './pages/HomePage';
import { CatalogPage } from './pages/CatalogPage';
import { CategoriesPage } from './pages/CategoriesPage';
import { ProductionDetailPage } from './pages/ProductionDetailPage';
import { ChapterEpisodeReaderPage } from './pages/ChapterEpisodeReaderPage';
import { AuthorsPage } from './pages/AuthorsPage';
import { AuthorDetailPage } from './pages/AuthorDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { SubmitProjectPage } from './pages/SubmitProjectPage';
import { ConfiguracoesPage } from './pages/ConfiguracoesPage';
import { CommunityPage } from './pages/CommunityPage';
import { CommunityStoryDetailPage } from './pages/CommunityStoryDetailPage';
import { ProductionCategory } from './types';
import { ManagerProvider, useManager } from './utils/managerAuth';
import { ManagerModal, ManagerFloatingBar } from './components/ManagerModal';

function AppContent() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });
  const [searchOpen, setSearchOpen] = useState(false);
  const { openManagerModal } = useManager();

  // Sync with browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Check direct /gerenciador route
  useEffect(() => {
    if (currentPath === '/gerenciador' || currentPath === '/admin') {
      openManagerModal();
    }
  }, [currentPath, openManagerModal]);

  // Navigation function
  const navigate = (path: string) => {
    if (path === currentPath) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Route matcher
  const renderCurrentRoute = () => {
    // Extract pathname and query
    const [pathOnly, searchParamsString] = currentPath.split('?');
    const searchParams = new URLSearchParams(searchParamsString || '');

    // 1. Home (or /gerenciador /admin shortcut)
    if (pathOnly === '/' || pathOnly === '' || pathOnly === '/gerenciador' || pathOnly === '/admin') {
      return <HomePage onNavigate={navigate} />;
    }

    // 2. Chapter / Episode Reader: /webs/:productionSlug/:chapterSlug
    // Pattern: /webs/slug-of-work/capitulo-01 or episodio-01
    const chapterMatch = pathOnly.match(/^\/webs\/([^/]+)\/([^/]+)$/);
    if (chapterMatch) {
      const [, productionSlug, chapterSlug] = chapterMatch;
      return (
        <ChapterEpisodeReaderPage
          productionSlug={productionSlug}
          chapterSlug={chapterSlug}
          onNavigate={navigate}
        />
      );
    }

    // Direct shortcut for /rasga-mortalha-2
    if (pathOnly === '/rasga-mortalha-2') {
      return <ProductionDetailPage slug="rasga-mortalha-2" onNavigate={navigate} />;
    }
    const rasgaChapterMatch = pathOnly.match(/^\/rasga-mortalha-2\/([^/]+)$/);
    if (rasgaChapterMatch) {
      const [, chapterSlug] = rasgaChapterMatch;
      return (
        <ChapterEpisodeReaderPage
          productionSlug="rasga-mortalha-2"
          chapterSlug={chapterSlug}
          onNavigate={navigate}
        />
      );
    }

    // Direct shortcut for /cold-case-brasil
    if (pathOnly === '/cold-case-brasil') {
      return <ProductionDetailPage slug="cold-case-brasil" onNavigate={navigate} />;
    }
    const coldCaseChapterMatch = pathOnly.match(/^\/cold-case-brasil\/([^/]+)$/);
    if (coldCaseChapterMatch) {
      const [, chapterSlug] = coldCaseChapterMatch;
      return (
        <ChapterEpisodeReaderPage
          productionSlug="cold-case-brasil"
          chapterSlug={chapterSlug}
          onNavigate={navigate}
        />
      );
    }

    // 3. Production Detail: /webs/:slug
    const productionMatch = pathOnly.match(/^\/webs\/([^/]+)$/);
    if (productionMatch) {
      const [, slug] = productionMatch;
      return <ProductionDetailPage slug={slug} onNavigate={navigate} />;
    }

    // 4. Catalog: /webs
    if (pathOnly === '/webs') {
      const catParam = searchParams.get('categoria') as ProductionCategory | null;
      return <CatalogPage onNavigate={navigate} initialCategory={catParam || undefined} />;
    }

    // Community Story Detail: /comunidade/:slug
    const communityStoryMatch = pathOnly.match(/^\/comunidade\/([^/]+)$/);
    if (communityStoryMatch) {
      const [, slug] = communityStoryMatch;
      return <CommunityStoryDetailPage slug={slug} onNavigate={navigate} />;
    }

    // Community Home: /comunidade
    if (pathOnly === '/comunidade') {
      return <CommunityPage onNavigate={navigate} />;
    }

    // 5. Categories: /categorias
    if (pathOnly === '/categorias') {
      return <CategoriesPage onNavigate={navigate} />;
    }

    // 6. Author Detail: /autores/:authorSlug
    const authorMatch = pathOnly.match(/^\/autores\/([^/]+)$/);
    if (authorMatch) {
      const [, authorSlug] = authorMatch;
      return <AuthorDetailPage slug={authorSlug} onNavigate={navigate} />;
    }

    // 7. Authors List: /autores
    if (pathOnly === '/autores') {
      return <AuthorsPage onNavigate={navigate} />;
    }

    // 8. About: /sobre
    if (pathOnly === '/sobre') {
      return <AboutPage onNavigate={navigate} />;
    }

    // 9. Contact: /contato
    if (pathOnly === '/contato') {
      return <ContactPage />;
    }

    // 10. Submit Project: /envie-seu-projeto
    if (pathOnly === '/envie-seu-projeto') {
      return <SubmitProjectPage />;
    }

    // 11. Configurations & Covers: /configuracoes & /configuracao
    if (pathOnly === '/configuracoes' || pathOnly === '/configuracao') {
      return <ConfiguracoesPage onNavigate={navigate} />;
    }

    // Fallback: 404
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-3xl font-black text-slate-900 font-brand mb-2">Página Não Encontrada</h2>
        <p className="text-sm text-slate-600 mb-6 max-w-md">
          O endereço solicitado não pertence à grade de programação oficial do Estúdio Webs.
        </p>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-2.5 rounded-xl bg-[#D80050] hover:bg-[#be0044] text-white text-xs font-bold uppercase tracking-wider transition shadow-md shadow-[#D80050]/20"
        >
          Voltar para a Página Inicial
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F5] text-slate-800">
      {/* Broadcast Header */}
      <Header
        currentPath={currentPath}
        onNavigate={navigate}
        onOpenSearch={() => setSearchOpen(true)}
      />

      {/* Main View Router */}
      <main className="flex-1">{renderCurrentRoute()}</main>

      {/* Global Broadcast Search Modal */}
      <GlobalSearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onNavigate={navigate}
      />

      {/* Broadcast Footer */}
      <Footer onNavigate={navigate} />

      {/* Manager Panel & Floating Bar */}
      <ManagerModal onNavigate={navigate} />
      <ManagerFloatingBar onNavigate={navigate} />
    </div>
  );
}

export function App() {
  return (
    <ManagerProvider>
      <AppContent />
    </ManagerProvider>
  );
}

export default App;
