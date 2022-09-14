import React from 'react';
import styled from 'styled-components';

import Grid from 'components/Grid';
import Image from 'components/Image';
import { Standard } from 'components/Text';
import Label from 'components/Label';

const fallbackImageSrc = 'https://i.stack.imgur.com/frlIf.png';

const PostContainer = styled(Grid)`
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  padding: 1.25rem;
  cursor: pointer;
`;

const Post = ({
  imageSrc,
  excerpt,
  slug,
  stack,
  callback
}) => {
  return (
    <PostContainer
      flexDirection='column'
      width='23%'
      onClick={e => callback(e, { slug })}
    >
      <Image src={imageSrc || fallbackImageSrc} style={{ width: '100%', height: '100%' }} />
      <Standard margin='0.75rem 0 0.75rem 0' dangerouslySetInnerHTML={{ __html: excerpt }} />
      <Label>{stack}</Label>
    </PostContainer>
  );
};

export default Post;
