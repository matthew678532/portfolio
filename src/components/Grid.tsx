import styled from 'styled-components';

const Grid = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: ${props => props.borderStyle || 'none'}
`;

export default Grid;
