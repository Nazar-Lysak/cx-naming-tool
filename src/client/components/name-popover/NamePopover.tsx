import type { PetName } from '@/client/types/types';
import { generalStyles } from '@/styles/variables';
import parse from 'html-react-parser';
import styled from 'styled-components';

const Popover = styled.div`
  grid-column: 1 / -1;
  padding: 48px;
  background-color: ${generalStyles.colors.white};
  border: 1px solid ${generalStyles.colors.red};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 16px 0px;
  border-radius: 8px;
  margin-top: 22px;
`;

const NamePopover = ({ name }: { name: PetName }) => {
  return (
    <Popover>
      <h2>{name.title}</h2>
      <div>{parse(name.definition)}</div>
    </Popover>
  );
};

export default NamePopover;
