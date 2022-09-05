import React from 'react';
import styled from 'styled-components';

import Text from 'components/Text';

const Container = styled.section`
  height: ${props => props.height || 'auto'};
  width: ${props => props.width || 'auto'};
  overflow: ${props => props.overflow || 'visible'};
  display: ${props => props.display || 'block'};
  -webkit-line-clamp: ${props => props.lineClamp || 'none'};
  -webkit-box-orient: ${props => props.lineClamp ? 'vertical' : 'none'};
  border-top: ${props => props.borderStyle || 'none'};
  cursor: ${props => props.cursor || 'auto'};
`;

const fontStyles = [
  'Open Sans, sans-serif',
  'Old Standard TT, serif',
  'Roboto Serif, serif'
];

const getRandomNumber = max => {
  return Math.floor(Math.random() * max);
}

const PostDetail = ({
  title,
  content,
  size,
  lineClamp,
  overflow,
  borderStyle,
  display,
  cursor,
  callback
}) => {
  return (
    <Container
      height={ size?.height }
      width={ size?.width }
      lineClamp={lineClamp}
      overflow={overflow}
      borderStyle={borderStyle}
      display={display}
      cursor={cursor}
      onClick={e => callback(e, { title, content })}>
      <Text
        fontFamily={fontStyles[getRandomNumber(3)]}
        margin='10px 0 10px 0'
        fontWeight='700'
      >{ title }</Text>
      <Text fontFamily='Open Sans, sans-serif'>{ content }</Text>
    </Container>
  );
};

export default PostDetail;
