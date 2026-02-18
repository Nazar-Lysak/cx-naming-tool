import { useFilters } from '@/client/context/filtersContext';
import { textData } from '@/data/text';
import { generalStyles } from '@/styles/variables';
import styled from 'styled-components';

const Container = styled.div`
  grid-area: gender;
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: auto;
`;

const GenderLabel = styled.p`
  margin: 0 0 12px 0;
  font-family: ${generalStyles.fonts.primary};
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
  color: ${generalStyles.colors.darkGray};
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
  line-height: 24px;
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

type GenderValue = 'male' | 'female' | 'any';

interface GenderOption {
  readonly value: GenderValue;
  readonly label: string;
}

const genderOptions: readonly GenderOption[] = [
  { value: 'male', label: textData.genderFilters.male },
  { value: 'female', label: textData.genderFilters.female },
  { value: 'any', label: textData.genderFilters.any },
] as const;

const GenderSelection = () => {
  const { selectedGender, setSelectedGender } = useFilters();

  return (
    <Container>
      <GenderLabel>{textData.genderFilters.label}</GenderLabel>
      <RadioGroup role="radiogroup" aria-label={textData.genderFilters.label}>
        {genderOptions.map((option) => (
          <Label key={option.value}>
            <HiddenRadio
              name="gender"
              value={option.value}
              checked={selectedGender === option.value}
              onChange={() => setSelectedGender(option.value)}
              aria-label={option.label}
            />
            <CustomRadio aria-hidden="true" />
            {option.label}
          </Label>
        ))}
      </RadioGroup>
    </Container>
  );
};

export default GenderSelection;
