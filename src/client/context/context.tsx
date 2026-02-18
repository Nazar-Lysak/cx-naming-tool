import { createContext, useState, useContext, type ReactNode } from 'react';

interface AppContextType {
  isStarted: boolean;
  nameId: number;
  setIsStarted: (value: boolean) => void;
  setNameId: (value: number) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [nameId, setNameId] = useState<number>(0);

  const value: AppContextType = {
    isStarted,
    nameId,
    setIsStarted,
    setNameId,
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
