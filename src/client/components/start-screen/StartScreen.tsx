import styled from 'styled-components';
import parse from 'html-react-parser'
import { motion } from 'motion/react';
import Button from '@/client/UI/button/Button';
import { textData } from '@/data/text';
import { generalStyles } from '@/styles/variables';

interface StartScreenProps {
  onStart: () => void;
}

const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  padding: 16px;
  background-color: ${generalStyles.colors.lightGray};
  border-radius: ${generalStyles.borderRadius};
  font-family: ${generalStyles.fonts.secondary};
`;

const Content = styled(motion.div)`
  text-align: center;
  max-width: 500px;
`;

const Title = styled(motion.h2)`
  font-size: 2rem;
  font-weight: 600;
  color: ${generalStyles.colors.darkGray};
  margin: 0 0 16px 0;
  line-height: 1.2;
`;

const Description = styled(motion.p)`
  font-size: 1rem;
  color: ${generalStyles.colors.darkGray};
  margin: 0 0 32px 0;
  line-height: 1.5;
`;

const ButtonWrapper = styled(motion.div)`
  display: inline-block;
`;

function StartScreen({ onStart }: StartScreenProps) {
  return (
    <Container>
      <Content>
        <Title
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          {parse(textData.startScreen.title)}
        </Title>
        <Description
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {parse(textData.startScreen.description)}
        </Description>
        <ButtonWrapper
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <Button title={textData.buttons.start} handleClick={onStart} />
        </ButtonWrapper>
      </Content>
    </Container>
  );
}

export default StartScreen;
