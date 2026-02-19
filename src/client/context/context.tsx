import { appConfig } from '@/data/appConfig';
import {
  createContext,
  useState,
  useContext,
  useCallback,
  type ReactNode,
} from 'react';

interface AppContextType {
  isStarted: boolean;
  nameId: string;
  visibleNamesCount: number;
  setIsStarted: (value: boolean) => void;
  setNameId: (value: string) => void;
  loadMoreNames: () => void;
  resetNamesCount: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [nameId, setNameId] = useState<string>('');
  const [visibleNamesCount, setVisibleNamesCount] = useState(
    appConfig.namesPerLoad
  );

  const loadMoreNames = useCallback((): void => {
    setVisibleNamesCount((prev) => prev + appConfig.namesPerLoad);
  }, []);

  const resetNamesCount = useCallback((): void => {
    setVisibleNamesCount(appConfig.namesPerLoad);
  }, []);

  const value: AppContextType = {
    isStarted,
    nameId,
    visibleNamesCount,
    setIsStarted,
    setNameId,
    loadMoreNames,
    resetNamesCount,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Custom hook context
export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};
