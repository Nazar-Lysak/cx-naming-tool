import styled from 'styled-components';

const Container = styled.div`
  grid-area: gender;
  background: yellow;
`;

const GenderSelection = () => {
  return (
    <Container>
      <h2>Gender Selection</h2>
    </Container>
  );
};

export default GenderSelection;
