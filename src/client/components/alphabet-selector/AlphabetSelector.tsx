import { useCallback, useMemo } from 'react';
import styled from 'styled-components';

import { useFilters } from '@/client/context/filtersContext';
import ButtonLetter from '@/client/UI/button-letter/ButtonLetter';
import { alphabetLetters } from '@/data/alphabet';
import { nameList } from '@/data/nameList';
import { generalStyles } from '@/styles/variables';

const Container = styled.div`
  grid-area: alphabet;
  display: flex;
  gap: 8px;
  width: 100%;
  background: ${generalStyles.colors.white};
  box-shadow:
    0px 0px 2px 0px rgba(58, 53, 51, 0.2),
    0px 2px 12px 0px rgba(58, 53, 51, 0.1);
  border-radius: 100px;
  margin: 28px auto 0;
  padding: 16px;
  overflow: auto;

  @media ${generalStyles.mediaQuery.mobile} {
    padding: 8px 16px;
  }
`;

const AlphabetSelector = () => {
  const {
    selectedLetter,
    setSelectedLetter,
    selectedGender,
    selectedCategory,
  } = useFilters();

  const availableLetters = useMemo(() => {
    return nameList.reduce<Set<string>>((acc, name) => {
      const matchesCategory = selectedCategory
        ? name.categories.some((cat) => cat.target_id === selectedCategory)
        : true;
      const matchesGender = selectedGender
        ? name.gender === selectedGender
        : true;

      if (matchesCategory && matchesGender) {
        acc.add(name.title[0]);
      }

      return acc;
    }, new Set());
  }, [selectedGender, selectedCategory]);

  const handleLetterClick = useCallback(
    (letter: string) => {
      if (!availableLetters.has(letter)) return;
      setSelectedLetter(selectedLetter === letter ? '' : letter);
    },
    [availableLetters, selectedLetter, setSelectedLetter]
  );

  return (
    <Container role="navigation" aria-label="Alphabet filter">
      {alphabetLetters.map((letter) => (
        <ButtonLetter
          key={letter}
          letter={letter}
          selectedLetter={selectedLetter}
          handleLetterClick={handleLetterClick}
          disabled={!availableLetters.has(letter)}
        />
      ))}
    </Container>
  );
};

export default AlphabetSelector;
