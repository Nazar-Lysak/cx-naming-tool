import { nameList } from '@/data/nameList';
import { generalStyles } from '@/styles/variables';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(4, minmax(0px, 1fr));
  position: relative;

  @media ${generalStyles.mediaQuery.tablet} {
    grid-template-columns: repeat(3, minmax(0px, 1fr));
  }

  @media ${generalStyles.mediaQuery.mobile} {
    grid-template-columns: repeat(2, minmax(0px, 1fr));
  }

  @media ${generalStyles.mediaQuery.mobileS} {
    grid-template-columns: repeat(1, minmax(0px, 1fr));
  }
`;

const NameCard = styled.button`
  background-color: ${generalStyles.colors.lightGray};
  font-family: ${generalStyles.fonts.primary};
  color: ${generalStyles.colors.darkGray};
  box-shadow:
    rgba(58, 53, 51, 0.1) 0px 2px 12px 0px,
    rgba(58, 53, 51, 0.2) 0px 0px 2px 0px;
  border-radius: 8px;
  border: none;
  padding: 16px;
  text-align: center;
  cursor: pointer;
  transition:
    background-color 250ms ease-out,
    color 250ms ease-out;

  &:hover {
    background-color: ${generalStyles.colors.darkGray};
    color: ${generalStyles.colors.white};
  }
`;

const ViewComponent = () => {
  return (
    <Container>
      {nameList.map((name) => (
        <NameCard key={name.id}>{name.title}</NameCard>
      ))}
    </Container>
  );
};

export default ViewComponent;
