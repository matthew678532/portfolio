import React from 'react';

import Grid from 'components/Grid';
import Text from 'components/Text';

const PageDetails = () => {
  return (
    <Grid borderStyle='double'>
      <Text
        fontFamily='Old Standard TT'
        textTransform='uppercase'
        fontSize='12px'
        margin='10px'>Volume LXXXI-NO 107</Text>
      <Text
        fontFamily='Old Standard TT'
        textTransform='uppercase'
        fontSize='12px'
        margin='10px'>London thursday morning 18 2022-twenty pages</Text>
      <Text
        fontFamily='Old Standard TT'
        textTransform='uppercase'
        fontSize='12px'
        margin='10px'>Price: free</Text>
    </Grid>
  );
};

export default PageDetails;