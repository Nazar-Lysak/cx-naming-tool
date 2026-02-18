import { createContext, useState, useContext, type ReactNode } from 'react';

interface FiltersContextType {
  selectedLetter: string;
  selectedGender: string;
  selectedCategory: string;
  setSelectedLetter: (value: string) => void;
  setSelectedGender: (value: string) => void;
  setSelectedCategory: (value: string) => void;
}

const FiltersContext = createContext<FiltersContextType | undefined>(undefined);

interface FiltersProviderProps {
  children: ReactNode;
}

export const FiltersProvider = ({ children }: FiltersProviderProps) => {
  const [selectedLetter, setSelectedLetter] = useState<string>('');
  const [selectedGender, setSelectedGender] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const value: FiltersContextType = {
    selectedLetter,
    selectedGender,
    selectedCategory,
    setSelectedLetter,
    setSelectedGender,
    setSelectedCategory,
  };

  return (
    <FiltersContext.Provider value={value}>{children}</FiltersContext.Provider>
  );
};

// Custom hook for filters context
export const useFilters = () => {
  const context = useContext(FiltersContext);
  if (context === undefined) {
    throw new Error('useFilters must be used within FiltersProvider');
  }
  return context;
};
