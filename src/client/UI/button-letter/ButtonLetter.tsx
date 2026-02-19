import styled from 'styled-components';

import { generalStyles } from '@/styles/variables';

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
  font-family: ${generalStyles.fonts.primary};
  font-size: 25px;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  &:hover {
    color: ${(props) =>
      props.$isActive ? generalStyles.colors.white : generalStyles.colors.red};
  }

  @media ${generalStyles.mediaQuery.mobile} {
    font-size: 20px;
    line-height: 1.2;
    width: 26px;
    height: 26px;
  }
`;

interface ButtonLetterProps {
  readonly letter: string;
  readonly selectedLetter: string;
  readonly handleLetterClick: (letter: string) => void;
}

const ButtonLetter = ({
  letter,
  selectedLetter,
  handleLetterClick,
}: ButtonLetterProps) => {
  return (
    <LetterButton
      type="button"
      $isActive={selectedLetter === letter}
      onClick={() => handleLetterClick(letter)}
      aria-label={`Filter by letter ${letter}`}
      aria-pressed={selectedLetter === letter}
    >
      {letter}
    </LetterButton>
  );
};

export default ButtonLetter;
