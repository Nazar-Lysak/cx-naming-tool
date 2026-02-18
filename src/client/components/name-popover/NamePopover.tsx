import type { PetName } from '@/client/types/types';
import parse from 'html-react-parser';

const NamePopover = ({ name }: { name: PetName }) => {
  console.log(name);

  return (
    <div>
      <h2>{name.title}</h2>
      <div>{parse(name.definition)}</div>
    </div>
  );
};

export default NamePopover;
