import styled from 'styled-components';

const Grid = styled.div`
  display: flex;
  justify-content: ${props => props.justifyContent || 'flex-start'};
  align-items: ${props => props.alignItems || 'stretch'};
  flex-wrap: ${props => props.flexWrap || 'nowrap'};
  flex-direction: ${props => props.flexDirection || 'row'};
  flex: ${props => props.flex || '0 1 auto'};
  gap: ${props => props.gap || 'normal normal' };
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
`;

export default Grid;
