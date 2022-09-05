import React, { useState } from 'react';

import { useContent } from 'hooks/useContent';

import Grid from 'components/Grid';
import Posts from 'components/Posts';
import PostDetail from 'components/PostDetail';

const noop = () => {};
const smallPostHeight = 135;

const postSizes = {
  smallPost: {
    height: `${smallPostHeight}px`,
    width: '200px'
  },
  largePost: {
    height: '285px',
    width: '400px'
  }
};

const { smallPost, largePost } = postSizes;

const parseNodes = (nodes, callback)  => {
  const container = {};

  nodes.forEach(item => {
    const {
      frontmatter: { category, title },
      excerpt,
      html
    } = item;
    const Post = {
      Component: PostDetail,
      params: {
        title: title,
        content: excerpt,
        size: smallPost,
        lineClamp: 4,
        overflow: 'hidden',
        borderStyle: 'dashed',
        display: '-webkit-box',
        cursor: 'pointer',
        callback,
        html
      }
    };

    if (!container[category]) {
      container[category] = [];
    }
    container[category].push(Post);
  });

  return container;
};

const WorkSection = () => {
  const nodes = useContent();

  const onPostClick = (e, context) => {
    console.info('[onPostClick] ', context);
    setLargePostDetails(context);
  };

  const { blogs, projects } = parseNodes(nodes, onPostClick);

  const { params } = blogs[0];
  const [largePostDetails, setLargePostDetails] = useState(params);

  return (
    <Grid
      justifyContent='space-around'
      alignItems='flex-start'
      margin='12px 0 0 0'
    >
      <Posts
        items={blogs}
        itemHeight={smallPostHeight}
      />
      <PostDetail
        size={largePost}
        overflow='scroll'
        title={largePostDetails.title}
        content={largePostDetails.html}
        callback={noop} />
      <Posts
        items={projects}
        itemHeight={smallPostHeight}
      />
    </Grid>
  );
};

export default WorkSection;
