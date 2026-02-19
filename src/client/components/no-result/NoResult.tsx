import NoRessultsIcon from '@/assets/icons/NoResultsIcon';
import { textData } from '@/data/text';
import { generalStyles } from '@/styles/variables';
import styled from 'styled-components';
import { motion } from 'motion/react';

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0 80px;
`;

const Title = styled(motion.h3)`
  color: ${generalStyles.colors.darkGray};
  text-align: center;
  font-family: ${generalStyles.fonts.primary};
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.4;
  margin-bottom: 8px;
  margin: 26px 0 36px;
`;

const IconWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CleanButton = styled(motion.button)`
  padding: 12px 24px;
  background-color: ${generalStyles.colors.red};
  color: ${generalStyles.colors.white};
  border: none;
  border-radius: 8px;
  font-family: ${generalStyles.fonts.primary};
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${generalStyles.colors.darkGray};
  }
`;

const NoResult = () => {
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0 } }}
      transition={{ 
        duration: 0.3,
        delay: 0.4
      }}
    >
      <IconWrapper
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: 0.5,
          type: 'spring',
          stiffness: 200,
          damping: 15
        }}
      >
        <NoRessultsIcon />
      </IconWrapper>
      <Title
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.7 }}
      >
        {textData.noResults.title}
      </Title>
      <CleanButton
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.9 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {textData.buttons.clean}
      </CleanButton>
    </Container>
  );
};

export default NoResult;
