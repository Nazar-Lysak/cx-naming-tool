import type { PetName } from '@/client/types/types';
import { generalStyles } from '@/styles/variables';
import { motion } from 'motion/react';
import parse from 'html-react-parser';
import styled from 'styled-components';
import CloseIcon from '@/assets/icons/CloseIcon';
import { useApp } from '@/client/context/context';
import { textData } from '@/data/text';
import ShareButtons from '../share-buttons/ShareButtons';

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

const CloseButton = styled.button`
  fill: ${generalStyles.colors.red};
  position: absolute;
  top: 16px;
  right: 16px;
  height: 24px;
  width: 24px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
`;

const Title = styled.h2`
  margin: 0 0 16px 0;
  font-size: 60px;
  font-weight: 400;
  line-height: 66px;
  font-family: ${generalStyles.fonts.primary};
  color: ${generalStyles.colors.darkGray};
`;

const Category = styled.p`
  margin: 0 0 16px 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  font-family: ${generalStyles.fonts.primary};
  color: ${generalStyles.colors.gray};
`;

const Definition = styled.div`
  max-width: 708px;
  padding: 24px 0;
  border-top: 1px dashed ${generalStyles.colors.beige};
  border-bottom: 1px dashed ${generalStyles.colors.beige};
  font-family: ${generalStyles.fonts.primary};
  font-size: 20px;
  line-height: 32px;
  color: ${generalStyles.colors.gray};

  a {
  text-decoration: none;
  color: inherit;
  font-weight: 500;
  border-bottom: 1px solid transparent;
    border-bottom: 1.2px solid ${generalStyles.colors.red};
  }
`;

const NamePopover = ({
  name,
  activeColumnIndex,
  totalColumns,
}: NamePopoverProps) => {
  const { setNameId } = useApp();
  const arrowPosition = ((activeColumnIndex + 0.5) / totalColumns) * 100;

  console.log('Rendering NamePopover with name:', name);

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
      <CloseButton onClick={() => setNameId('')}>
        <CloseIcon />
      </CloseButton>
      <Title>{name.title}</Title>
      <Category>
        <strong>{textData.nameDetails.categoryLabel}:</strong> some categody
      </Category>
      <Definition>{parse(name.definition)}</Definition>
      <ShareButtons />
    </Popover>
  );
};

export default NamePopover;
