import NamePopover from '@/client/components/name-popover/NamePopover';
import { useApp } from '@/client/context/context';
import { nameList } from '@/data/nameList';
import { generalStyles } from '@/styles/variables';
import { useMemo } from 'react';
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
  width: 100%;
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

  const memoizedNames = useMemo(() => {
    console.log('Memoized value');
    return nameList;
  }, []);

  const handleNameClick = (id: string): void => {
    return nameId === id ? setNameId('') : setNameId(id);
  };

  const handleActiveClass = (id: string): string => {
    return id === nameId ? 'nt-active' : '';
  };

  return (
    <Container>
      {memoizedNames.map((name) => (
        <div key={name.id}>
          <NameCard
            className={handleActiveClass(name.id)}
            onClick={() => handleNameClick(name.id)}
          >
            {name.title}
          </NameCard>
          {name.id === nameId && <NamePopover name={name} />}
        </div>
      ))}
    </Container>
  );
};

export default ViewComponent;
