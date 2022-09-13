import styled from 'styled-components';

const Text = styled.p`
  font-family: ${props => props.fontFamily || 'sans-serif'};
  font-size: ${props => props.fontSize};
  text-transform: ${props => props.textTransform || 'none'};
  margin: ${props => props.margin || 0};
  font-weight: ${props => props.fontWeight || 500};
  color: ${props => props.color || '#000'};
  line-height: ${props => props.lineHeight || 'normal'};
`;

export default Text;