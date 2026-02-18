import AlphabetSelector from '@/client/components/alphabet-selector/AlphabetSelector';
import GenderSelection from '@/client/components/gender-selection/GenderSelection';
import SwiperFilters from '@/client/components/swiper-filter/SwiperFilters';
import { generalStyles } from '@/styles/variables';
import styled from 'styled-components';

const Title = styled.h3`
  color: ${generalStyles.colors.darkGray};
  font-family: ${generalStyles.fonts.primary};
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  margin-bottom: 8px;

  @media ${generalStyles.mediaQuery.mobile} {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 16px;
  }
`;

const Container = styled.div`
  padding-bottom: 56px;
  display: grid;
  grid-template:
    'swiper gender'
    'alphabet alphabet' / 67.5% 32.5%;

  @media ${generalStyles.mediaQuery.mobile} {
    grid-template:
      'swiper'
      'alphabet'
      'gender' / 100%;
    padding-bottom: 8px;
  }
`;

const FilterComponent = () => {
  return (
    <div>
      <Title>Find the perfect name</Title>
      <Container>
        <SwiperFilters />
        <GenderSelection />
        <AlphabetSelector />
      </Container>
    </div>
  );
};

export default FilterComponent;
