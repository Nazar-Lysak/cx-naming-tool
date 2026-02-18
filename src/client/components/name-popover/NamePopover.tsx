import type { PetName } from '@/client/types/types';
import { generalStyles } from '@/styles/variables';
import { motion } from 'motion/react';
import parse from 'html-react-parser';
import styled from 'styled-components';

interface NamePopoverProps {
  name: PetName;
  activeColumnIndex: number;
  totalColumns: number;
}

const Popover = styled(motion.div)`
  position: relative;
  grid-column: 1 / -1;
  padding: 48px;
  background-color: ${generalStyles.colors.white};
  border: 1px solid ${generalStyles.colors.red};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 16px 0px;
  border-radius: 8px;
  margin-top: 22px;
`;

const Arrow = styled.span<{ $position: number }>`
  position: absolute;
  height: 20px;
  width: 20px;
  top: -11px;
  left: ${(props) => props.$position}%;
  border-left: 1px solid ${generalStyles.colors.red};
  border-top: 1px solid ${generalStyles.colors.red};
  background: ${generalStyles.colors.white};
  transform: translateX(-50%) rotate(45deg);
  z-index: 1;
`;

const NamePopover = ({
  name,
  activeColumnIndex,
  totalColumns,
}: NamePopoverProps) => {
  const arrowPosition = ((activeColumnIndex + 0.5) / totalColumns) * 100;

  return (
    <Popover
      key={name.id}
      initial={{
        opacity: 0,
        transform: 'translateY(50px)',
      }}
      animate={{
        opacity: 1,
        transform: 'translateY(0px)',
        transition: { opacity: { delay: 0.1 } },
      }}
      transition={{ duration: 0.5 }}
    >
      <Arrow $position={arrowPosition} />
      <h2>{name.title}</h2>
      <div>{parse(name.definition)}</div>
    </Popover>
  );
};

export default NamePopover;
