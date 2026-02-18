import { useFilters } from '@/client/context/filtersContext';
import { alphabetLetters } from '@/data/alphabet';
import { generalStyles } from '@/styles/variables';
import styled from 'styled-components';

const Container = styled.div`
  grid-area: alphabet;
  display: flex;
  gap: 8px;
  width: 100%;
  background: ${generalStyles.colors.white};
  box-shadow:
    rgba(58, 53, 51, 0.2) 0px 0px 2px,
    rgba(58, 53, 51, 0.1) 0px 2px 12px;
  border-radius: 100px;
  margin: 0px auto;
  padding: 16px;
  overflow: auto;
`;

const LetterButton = styled.button<{ $isActive: boolean }>`
  width: 37px;
  height: 37px;
  border: none;
  flex-shrink: 0;
  border-radius: 100%;
  background-color: ${(props) =>
    props.$isActive ? generalStyles.colors.red : 'transparent'};
  color: ${(props) =>
    props.$isActive
      ? generalStyles.colors.white
      : generalStyles.colors.darkGray};
  font-family: interregular;
  font-size: 25px;
  font-weight: 400;
  line-height: 37px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: ${(props) =>
      props.$isActive ? generalStyles.colors.white : generalStyles.colors.red};
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
        <LetterButton
          key={letter}
          type="button"
          $isActive={selectedLetter === letter}
          onClick={() => handleLetterClick(letter)}
          aria-label={`Filter by letter ${letter}`}
          aria-pressed={selectedLetter === letter}
        >
          {letter}
        </LetterButton>
      ))}
    </Container>
  );
};

export default AlphabetSelector;
