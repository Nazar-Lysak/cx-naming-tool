import styled from 'styled-components';

import { generalStyles } from '@/styles/variables';

const LetterButton = styled.button<{ $isActive: boolean; $disabled: boolean }>`
  width: 37px;
  height: 37px;
  border: none;
  flex-shrink: 0;
  border-radius: 100%;
  background-color: ${(props) =>
    props.$isActive ? generalStyles.colors.red : 'transparent'};
  color: ${(props) => {
    if (props.$disabled) return generalStyles.colors.beige;
    return props.$isActive
      ? generalStyles.colors.white
      : generalStyles.colors.darkGray;
  }};
  font-family: ${generalStyles.fonts.primary};
  font-size: 25px;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.$disabled ? 0.5 : 1)};
  transition:
    background-color 0.3s ease,
    color 0.3s ease,
    opacity 0.3s ease;

  &:hover {
    color: ${(props) => {
      if (props.$disabled) return generalStyles.colors.beige;
      return props.$isActive
        ? generalStyles.colors.white
        : generalStyles.colors.red;
    }};
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
  readonly disabled?: boolean;
}

const ButtonLetter = ({
  letter,
  selectedLetter,
  handleLetterClick,
  disabled = false,
}: ButtonLetterProps) => {
  return (
    <LetterButton
      type="button"
      $isActive={selectedLetter === letter}
      $disabled={disabled}
      onClick={() => handleLetterClick(letter)}
      disabled={disabled}
      aria-label={`Filter by letter ${letter}`}
      aria-pressed={selectedLetter === letter}
      aria-disabled={disabled}
    >
      {letter}
    </LetterButton>
  );
};

export default ButtonLetter;
