import styled from 'styled-components';

const Button = styled.button`
  border: 1px solid black;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }
`;

export default Button;