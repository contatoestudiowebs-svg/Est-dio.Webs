import React, { createContext, useContext, useState, useEffect } from 'react';

interface ManagerContextType {
  isManager: boolean;
  login: (password: string) => boolean;
  logout: () => void;
  isManagerModalOpen: boolean;
  openManagerModal: () => void;
  closeManagerModal: () => void;
}

const STORAGE_MANAGER_KEY = 'estudiowebs_is_manager_active';
const DEFAULT_PASSWORDS = ['admin', 'estudiowebs', 'gerenciador', 'webs', '123456'];

const ManagerContext = createContext<ManagerContextType>({
  isManager: false,
  login: () => false,
  logout: () => {},
  isManagerModalOpen: false,
  openManagerModal: () => {},
  closeManagerModal: () => {},
});

export function ManagerProvider({ children }: { children: React.ReactNode }) {
  const [isManager, setIsManager] = useState<boolean>(() => {
    try {
      return localStorage.getItem(STORAGE_MANAGER_KEY) === 'true';
    } catch {
      return false;
    }
  });

  const [isManagerModalOpen, setIsManagerModalOpen] = useState(false);

  useEffect(() => {
    // Check URL parameters for direct manager trigger (e.g., ?gerenciador=true or ?admin=true)
    const params = new URLSearchParams(window.location.search);
    if (params.get('gerenciador') === 'true' || params.get('admin') === 'true') {
      setIsManagerModalOpen(true);
    }

    // Keyboard shortcut: Alt + G to open manager access
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && (e.key === 'g' || e.key === 'G')) {
        e.preventDefault();
        setIsManagerModalOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const login = (password: string): boolean => {
    const clean = password.trim().toLowerCase();
    // Accept valid passwords or any non-empty input if default is used
    if (DEFAULT_PASSWORDS.includes(clean) || clean === 'admin123') {
      setIsManager(true);
      try {
        localStorage.setItem(STORAGE_MANAGER_KEY, 'true');
      } catch {
        // ignore
      }
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsManager(false);
    try {
      localStorage.removeItem(STORAGE_MANAGER_KEY);
    } catch {
      // ignore
    }
  };

  const openManagerModal = () => setIsManagerModalOpen(true);
  const closeManagerModal = () => setIsManagerModalOpen(false);

  return (
    <ManagerContext.Provider
      value={{
        isManager,
        login,
        logout,
        isManagerModalOpen,
        openManagerModal,
        closeManagerModal,
      }}
    >
      {children}
    </ManagerContext.Provider>
  );
}

export function useManager() {
  return useContext(ManagerContext);
}
