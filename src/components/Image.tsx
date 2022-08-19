import styled from 'styled-components';

const Image = styled.img`
  height: ${props => props.size.height || 'auto'};
  width: ${props => props.size.width || 'auto'};
  cursor: ${props => props.cursor || 'auto'};
`;

export default Image;
