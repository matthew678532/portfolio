import React from 'react';

import Grid from 'components/Grid';
import Text from 'components/Text';

const Posts = ({
  items
}) => {
  return (
    <Grid
      height='500px'
      width='200px'
      overflow='scroll'
      flexDirection='column'
      justifyContent='flex-start'
    >
      {
        items.map(item => {
          const { Component, params } = item;
          return <Component { ...params } />;
        })
      }
    </Grid>
  );
};

export default Posts;
