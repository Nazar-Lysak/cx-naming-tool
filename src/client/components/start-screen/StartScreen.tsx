import styled from 'styled-components';
import Button from '../../UI/button/Button';

interface StartScreenProps {
  onStart: () => void;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  padding: 16px;
  background-color: #f8f9fa;
  border-radius: 16px;
`;

const Content = styled.div`
  text-align: center;
  max-width: 500px;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: #2b2b2b;
  margin: 0 0 16px 0;
  line-height: 1.2;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #2b2b2b;
  margin: 0 0 32px 0;
  line-height: 1.5;
`;

function StartScreen({ onStart }: StartScreenProps) {
  return (
    <Container>
      <Content>
        <Title>Find the Pawfect Name</Title>
        <Description>
          Found the perfect breed? Now you need a name! Try our new Dog Name Generator; from the UK's most popular ones, names for small dogs, big dogs, or something unusual - we've got the one for you!
        </Description>
        <Button title="Start" handleClick={onStart} />
      </Content>
    </Container>
  );
}

export default StartScreen;
