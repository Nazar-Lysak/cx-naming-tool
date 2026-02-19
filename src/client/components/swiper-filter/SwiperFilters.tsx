import { useCallback } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

import { useFilters } from '@/client/context/filtersContext';
import CategoryItem from '@/client/UI/category-item/CategoryItem';
import { categoryList } from '@/data/categoryList';
import { textData } from '@/data/text';
import { generalStyles, deviceSizes } from '@/styles/variables';

/**
 * Data URI encoded SVG icons for Swiper navigation buttons
 * Stored as constants to avoid recreation on each render
 */
const ARROW_NEXT_SVG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M8 19L18.5 12L8 5' stroke='%233A3533' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E";
const ARROW_PREV_SVG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M16 19L5.5 12L16 5' stroke='%233A3533' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E";

/**
 * Main container with custom navigation buttons and fade gradients
 */
const Container = styled.div`
  grid-area: swiper;
  max-width: 100%;

  .swiper {
    padding: 0 40px;

    /* Fade gradients on left and right edges */
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

    /* Left gradient fade */
    &:before {
      left: 0;
      background: linear-gradient(
        to right,
        ${generalStyles.colors.lightGray} 0%,
        ${generalStyles.colors.lightGray} 50%,
        transparent 100%
      );
    }

    /* Right gradient fade */
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

  /* Custom navigation buttons styling */
  .swiper-button-next,
  .swiper-button-prev {
    z-index: 4;
    width: 32px;
    height: 32px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 24px;
    transition: opacity 0.3s ease;

    /* Hide default Swiper arrow */
    svg {
      display: none;
    }
  }

  /* Next button with custom arrow icon */
  .swiper-button-next {
    background-image: url('${ARROW_NEXT_SVG}');
  }

  /* Previous button with custom arrow icon */
  .swiper-button-prev {
    background-image: url('${ARROW_PREV_SVG}');
  }

  /* Hide disabled navigation buttons */
  .swiper-button-disabled {
    opacity: 0 !important;
  }
`;

/**
 * Styled wrapper for each category slide
 * Auto width allows flexible content sizing
 */
const CategoryCard = styled(SwiperSlide)`
  width: auto !important;
`;

/**
 * Swiper configuration object
 * Extracted for reusability and cleaner JSX
 */
const SWIPER_CONFIG = {
  modules: [Navigation, A11y],
  spaceBetween: 12,
  slidesPerView: 'auto' as const, // Auto width based on content
  navigation: true,
  breakpoints: {
    [deviceSizes.mobileS]: { spaceBetween: 8 },
    [deviceSizes.mobile]: { spaceBetween: 12 },
  },
};

/**
 * SwiperFilters Component
 * Horizontal scrollable category filter with navigation arrows
 * Allows users to filter names by category selection
 */
const SwiperFilters = () => {
  const { selectedCategory, handleSelectCategory } = useFilters();

  /**
   * Handles keyboard navigation for accessibility
   * Triggers category selection on Enter or Space key press
   */
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, categoryId: string) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleSelectCategory(categoryId);
      }
    },
    [handleSelectCategory]
  );

  return (
    <Container>
      <Swiper
        {...SWIPER_CONFIG}
        a11y={{
          prevSlideMessage: textData.swiper.a11yPrevious,
          nextSlideMessage: textData.swiper.a11yNext,
        }}
      >
        {categoryList.map((category) => (
          <CategoryCard
            key={category.id}
            onClick={() => handleSelectCategory(category.id)}
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
