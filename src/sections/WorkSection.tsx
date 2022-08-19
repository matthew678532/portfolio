import React, { useState } from 'react';

import Grid from 'components/Grid';
import Posts from 'components/Posts';
import PostDetail from 'components/PostDetail';

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const postSizes = {
  smallPost: {
    height: '166.6px',
    width: '200px'
  },
  largePost: {
    height: '500px',
    width: '400px'
  }
};

const WorkSection = () => {
  const [largePostDetails, setLargePostDetails] = useState({
    title: 'Noddy title',
    content: lorem
  });

  const { smallPost, largePost } = postSizes;

  const onPostClick = (e, context) => {
    console.info('[onPostClick] ', context);
    setLargePostDetails(context);
  };

  const posts = [
    {
      Component: PostDetail,
      params: {
        title: 'Noddy title',
        content: lorem,
        size: smallPost,
        lineClamp: 4,
        overflow: 'hidden',
        borderStyle: 'dashed',
        display: '-webkit-box',
        cursor: 'pointer',
        callback: onPostClick
      }
    },
    {
      Component: PostDetail,
      params: {
        title: 'Noddy title 2',
        content: lorem,
        size: smallPost,
        lineClamp: 4,
        overflow: 'hidden',
        borderStyle: 'dashed',
        display: '-webkit-box',
        cursor: 'pointer',
        callback: onPostClick
      }
    },
    {
      Component: PostDetail,
      params: {
        title: 'Noddy title 3',
        content: lorem,
        size: smallPost,
        lineClamp: 4,
        overflow: 'hidden',
        borderStyle: 'dashed',
        display: '-webkit-box',
        cursor: 'pointer',
        callback: onPostClick
      }
    }
  ];

  return (
    <Grid
      justifyContent='space-around'
      alignItems='flex-start'
      margin='12px 0 0 0'
    >
      <Posts
        items={posts}
      />
      <PostDetail
        size={largePost}
        overflow='scroll'
        title={largePostDetails.title}
        content={largePostDetails.content} />
      <Posts
        items={posts}
      />
    </Grid>
  );
};

export default WorkSection;
