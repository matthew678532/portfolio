import React from 'react';

import Grid from 'components/Grid';
import Noddy from 'components/Noddy';
import Text from 'components/Text';

const TitleSection = () => {
  return (
    <Grid>
      <Noddy />
      <Text
        fontFamily='Old Standard TT'
        textTransform='uppercase'
        fontSize='48px'>Developer Digest</Text>
      <Noddy />
    </Grid>
  );
};

export default TitleSection;