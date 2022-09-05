import React from 'react';

import Grid from 'components/Grid';

const Posts = ({
  items,
  itemHeight
}) => {
  return (
    <div style={{ overflowY: 'auto', height: `${itemHeight * 2}px` }}>
      <Grid
        width='200px'
        flexDirection='column'
        justifyContent='flex-start'
        align-items='flex-start' >
        {
          items.map(item => {
            const { Component, params } = item;
            return <Component { ...params } />;
          })
        }
      </Grid>
    </div>
  );
};

export default Posts;
