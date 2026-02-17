import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #e91c24;
  border: solid 1px #e91c24;
  color: #ffffff;
  border-radius: 8px;
  padding: 14px 40px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 250ms ease-out;

  &:hover,
  &:focus {
    background-color: #2b2b2b;
  }
`;

type ButtonProps = {
  title: string;
  handleClick: () => void;
}

const Button = ({ title, handleClick }: ButtonProps) => {
  return (
    <StyledButton 
      onClick={handleClick}
    >
      {title}
    </StyledButton>
  )
}

export default Button;