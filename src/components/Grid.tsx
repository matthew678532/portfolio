import styled from 'styled-components';

const Grid = styled.div`
  display: ${props => props.display || 'flex'};
  justify-content: ${props => props.justifyContent || 'center'};
  align-items: ${props => props.alignItems || 'center'};
  gap: ${props => props.gap || 'auto'};
  border-top: ${props => props.borderStyle || 'none'};
  border-bottom: ${props => props.borderStyle || 'none'};
  flex-direction: ${props => props.flexDirection || 'row'};
  overflow: ${props => props.overflow || 'visible'};
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  margin: ${props => props.margin || '0'};
  flex: ${props => props.flex || '0 1 auto'};
  flex-wrap: ${props => props.flexWrap || 'nowrap'};
`;

export default Grid;
