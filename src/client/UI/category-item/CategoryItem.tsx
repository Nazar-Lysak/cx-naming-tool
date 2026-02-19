import styled from 'styled-components';

import { generalStyles } from '@/styles/variables';

const CardContent = styled.div<{ $isActive?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid
    ${(props) => (props.$isActive ? generalStyles.colors.red : 'transparent')};
  background-color: ${(props) =>
    props.$isActive ? generalStyles.colors.white : 'transparent'};
  box-shadow: ${(props) =>
    props.$isActive
      ? '0px 2px 12px 0px rgba(58, 53, 51, 0.1), 0px 0px 2px 0px rgba(58, 53, 51, 0.2)'
      : '0px 0px 0px 0px rgba(58, 53, 51, 0)'};
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease;
`;

const CategoryPicture = styled.picture`
  display: block;
  width: 48px;
  height: 48px;
  pointer-events: none;
  margin: 0px 18px 8px;

  @media ${generalStyles.mediaQuery.mobile} {
    width: 24px;
    height: 24px;
  }
`;

const CategoryIcon = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const CategoryTitle = styled.span`
  font-family: ${generalStyles.fonts.primary};
  color: ${generalStyles.colors.darkGray};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.125;
  text-align: center;
  user-select: none;
`;

interface CategoryItemProps {
  readonly desktopImg: string;
  readonly mobileImg: string;
  readonly title: string;
  readonly isActive?: boolean;
}

const CategoryItem = ({
  desktopImg,
  mobileImg,
  title,
  isActive,
}: CategoryItemProps) => {
  return (
    <CardContent $isActive={isActive}>
      <CategoryPicture>
        <source media={generalStyles.mediaQuery.mobile} srcSet={mobileImg} />
        <CategoryIcon src={desktopImg} alt="" aria-hidden="true" />
      </CategoryPicture>
      <CategoryTitle>{title}</CategoryTitle>
    </CardContent>
  );
};

export default CategoryItem;
