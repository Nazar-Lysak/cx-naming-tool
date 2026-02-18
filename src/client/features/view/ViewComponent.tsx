import NamePopover from '@/client/components/name-popover/NamePopover';
import { useApp } from '@/client/context/context';
import { nameList } from '@/data/nameList';
import { deviceSizes, generalStyles } from '@/styles/variables';
import { Fragment, useEffect, useMemo, useState } from 'react';
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
  font-size: 20px;
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

  &.nt-active {
    background-color: ${generalStyles.colors.red};
    color: ${generalStyles.colors.white};
  }
`;

const ViewComponent = () => {
  const { nameId, setNameId } = useApp();
  const [popoverInterval, setPopoverInterval] = useState<number>(5);

  const memoizedNames = useMemo(() => {
    console.log('Memoized names recalculated');
    return nameList;
  }, []);

  useEffect(() => {
    const updateInterval = () => {
      const width = window.innerWidth;
      let interval: number;

      switch (true) {
        case width <= deviceSizes.mobileS:
          interval = 1;
          break;
        case width <= deviceSizes.mobile:
          interval = 2;
          break;
        case width <= deviceSizes.tablet:
          interval = 3;
          break;
        default:
          interval = 4;
      }

      setPopoverInterval(interval);
    };

    updateInterval();
    window.addEventListener('resize', updateInterval);
    return () => window.removeEventListener('resize', updateInterval);
  }, []);

  const handleNameClick = (id: string): void => {
    return nameId === id ? setNameId('') : setNameId(id);
  };

  const handleActiveClass = (id: string): string => {
    return id === nameId ? 'nt-active' : '';
  };

  const activeNameIndex = memoizedNames.findIndex((name) => name.id === nameId);
  const popoverPosition =
    activeNameIndex >= 0
      ? Math.ceil((activeNameIndex + 1) / popoverInterval) * popoverInterval - 1
      : -1;
  const activeName =
    activeNameIndex >= 0 ? memoizedNames[activeNameIndex] : null;
  const activePositionInRow =
    activeNameIndex >= 0 ? activeNameIndex % popoverInterval : 0;

  return (
    <Container>
      {memoizedNames.map((name, index) => (
        <Fragment key={name.id}>
          <NameCard
            className={handleActiveClass(name.id)}
            onClick={() => handleNameClick(name.id)}
          >
            {name.title}
          </NameCard>
          {index === popoverPosition && activeName && (
            <NamePopover
              name={activeName}
              activeColumnIndex={activePositionInRow}
              totalColumns={popoverInterval}
            />
          )}
        </Fragment>
      ))}
    </Container>
  );
};

export default ViewComponent;
