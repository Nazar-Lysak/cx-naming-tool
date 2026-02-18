import styled from 'styled-components';

const Container = styled.div`
  grid-area: alphabet;
  background: green;
`;

const AlphabetSelector = () => {
  return (
    <Container>
      <h2>Alphabet Selector</h2>
    </Container>
  );
};

export default AlphabetSelector;
