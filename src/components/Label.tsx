import styled from 'styled-components';

const Label = styled.div`
  background-color: ${props => props.active ? '#23d5ab' : '#ee7752'};
  font-family: 'Roboto', sans-serif;
  font-size: 0.75rem;
  padding: 0.5rem;
  align-self: flex-end;
  ${props => props.isClickable && `cursor: pointer`}
`;

export default Label;
