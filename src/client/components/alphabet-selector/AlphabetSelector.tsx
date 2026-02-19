import styled from 'styled-components';

import { useFilters } from '@/client/context/filtersContext';
import ButtonLetter from '@/client/UI/button-letter/ButtonLetter';
import { alphabetLetters } from '@/data/alphabet';
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
  const { selectedLetter, setSelectedLetter } = useFilters();

  const handleLetterClick = (letter: string) => {
    setSelectedLetter(selectedLetter === letter ? '' : letter);
  };

  return (
    <Container>
      {alphabetLetters.map((letter) => (
        <ButtonLetter
          key={letter}
          letter={letter}
          selectedLetter={selectedLetter}
          handleLetterClick={handleLetterClick}
        />
      ))}
    </Container>
  );
};

export default AlphabetSelector;
