import styled from 'styled-components';

import { useFilters } from '@/client/context/filtersContext';
import { textData } from '@/data/text';
import { generalStyles } from '@/styles/variables';

const Container = styled.div`
  grid-area: gender;
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: auto;

  @media ${generalStyles.mediaQuery.mobile} {
    width: 100%;
    align-items: center;
    margin: 18px auto 24px;
  }
`;

const GenderLabel = styled.p`
  margin: 0 0 12px;
  font-family: ${generalStyles.fonts.primary};
  font-size: 16px;
  font-weight: 300;
  line-height: 1.5;
  color: ${generalStyles.colors.darkGray};

  @media ${generalStyles.mediaQuery.mobile} {
    display: none;
  }
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
`;

const CustomRadio = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  border: 2px solid ${generalStyles.colors.beige};
  border-radius: 50%;
  margin-right: 8px;
  transition: border-color 0.2s ease;

  &::after {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${generalStyles.colors.red};
    transform: scale(0);
    transition: transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

const HiddenRadio = styled.input.attrs({ type: 'radio' })`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-family: ${generalStyles.fonts.primary};
  font-size: 16px;
  line-height: 1.5;
  color: ${generalStyles.colors.darkGray};
  user-select: none;

  ${HiddenRadio}:checked + ${CustomRadio} {
    border-color: ${generalStyles.colors.red};

    &::after {
      transform: scale(1);
    }
  }

  ${HiddenRadio}:focus-visible + ${CustomRadio} {
    outline: 2px solid ${generalStyles.colors.darkGray};
    outline-offset: 1.5px;
  }
`;

const genderOptions = [
  textData.genderFilters.male,
  textData.genderFilters.female,
  textData.genderFilters.both,
] as const;

const GenderSelection = () => {
  const { selectedGender, handleSelectGender } = useFilters();

  return (
    <Container>
      <GenderLabel>{textData.genderFilters.label}</GenderLabel>
      <RadioGroup role="radiogroup" aria-label={textData.genderFilters.label}>
        {genderOptions.map((option) => (
          <Label key={option}>
            <HiddenRadio
              name="gender"
              value={option}
              checked={selectedGender === option}
              onChange={() => handleSelectGender(option)}
              aria-label={option}
            />
            <CustomRadio aria-hidden="true" />
            {option}
          </Label>
        ))}
      </RadioGroup>
    </Container>
  );
};

export default GenderSelection;
