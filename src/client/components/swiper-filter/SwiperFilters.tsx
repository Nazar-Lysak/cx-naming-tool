import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

import type { PetNameCategory } from '@/client/types/types';
import { useFilters } from '@/client/context/filtersContext';
import CategoryItem from '@/client/UI/category-item/CategoryItem';
import { categoryList } from '@/data/categoryList';
import { textData } from '@/data/text';
import { generalStyles, deviceSizes } from '@/styles/variables';

const Container = styled.div`
  grid-area: swiper;
  max-width: 100%;

  .swiper {
    padding: 0 40px;

    &:after,
    &:before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      width: 60px;
      pointer-events: none;
      z-index: 2;
    }

    &:before {
      left: 0;
      background: linear-gradient(
        to right,
        ${generalStyles.colors.lightGray} 0%,
        ${generalStyles.colors.lightGray} 50%,
        transparent 100%
      );
    }

    &:after {
      right: 0;
      background: linear-gradient(
        to left,
        ${generalStyles.colors.lightGray} 0%,
        ${generalStyles.colors.lightGray} 30%,
        transparent 100%
      );
    }
  }

  .swiper-button-next,
  .swiper-button-prev {
    z-index: 4;
    color: ${generalStyles.colors.red};
    width: 32px;
    height: 32px;

    &::after {
      font-size: 16px;
    }
  }

  .swiper-button-disabled {
    opacity: 0 !important;
  }
`;

const CategoryCard = styled(SwiperSlide)`
  width: auto !important;
`;

const SwiperFilters = () => {
  const { selectedCategory, setSelectedCategory } = useFilters();

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(selectedCategory === categoryId ? '' : categoryId);
  };

  const handleKeyDown = (e: React.KeyboardEvent, categoryId: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCategoryClick(categoryId);
    }
  };

  return (
    <Container>
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={12}
        slidesPerView="auto"
        navigation
        a11y={{
          prevSlideMessage: textData.swiper.a11yPrevious,
          nextSlideMessage: textData.swiper.a11yNext,
        }}
        breakpoints={{
          [deviceSizes.mobileS]: {
            spaceBetween: 8,
          },
          [deviceSizes.mobile]: {
            spaceBetween: 12,
          },
        }}
      >
        {categoryList.map((category: PetNameCategory) => (
          <CategoryCard
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            onKeyDown={(e) => handleKeyDown(e, category.id)}
            role="button"
            aria-label={`Filter by ${category.title}`}
            aria-pressed={selectedCategory === category.id}
            tabIndex={0}
          >
            <CategoryItem
              desktopImg={category.icon_desktop_tablet}
              mobileImg={category.icon_mobile}
              isActive={selectedCategory === category.id}
              title={category.title}
            />
          </CategoryCard>
        ))}
      </Swiper>
    </Container>
  );
};

export default SwiperFilters;
