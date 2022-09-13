import React from 'react';

import Grid from 'components/Grid';
import Image from 'components/Image';
import Text from 'components/Text';
import Label from 'components/Label';
import Link from 'components/Link';

const fallbackImageSrc = 'https://i.stack.imgur.com/frlIf.png';

const GridItem = ({
  imageSrc,
  excerpt,
  slug,
  callback
}) => {
  return (
    <Grid
      flexDirection='column'
      width='22%'
      style={{
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        padding: '20px',
        cursor: 'pointer'
      }}
      onClick={e => callback(e, { slug })}
    >
      <Image src={imageSrc || fallbackImageSrc} size={{ width: '100%', height: '100%' }} />
      <Text margin='10px 0 10px 0' dangerouslySetInnerHTML={{ __html: excerpt }} />
      <Label>{slug}</Label>
    </Grid>
  );
};

export default GridItem;
