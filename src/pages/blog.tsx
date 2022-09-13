import React from 'react';
import { navigate } from 'gatsby';

import Core from 'core/Core';

import Grid from 'components/Grid';
import GridItem from 'components/GridItem';
import Label from 'components/Label';
import BlogContainer from 'components/BlogContainer';

import { useContent } from 'hooks/useContent';

const filters = [
  { Component: Label, props: {} },
  { Component: Label, props: {} },
  { Component: Label, props: {} }
];

const parseNodes = (nodes, callback) => {
  const ret = {
    blogs: []
  };

  nodes.forEach(item => {
    const { excerpt, frontmatter } = item;
    const { slug } = frontmatter;

    const BlogPost = {
      Component: GridItem,
      props: {
        imageSrc: '',
        excerpt,
        slug,
        callback
      }
    };

    ret.blogs.push(BlogPost);
  });

  return ret;
};

const Blog = () => {
  const nodes = useContent();

  const onBlogClick = (event, context) => {
    return navigate(`/blog/${context.slug}`);
  };

  const { blogs, slugs } = parseNodes(nodes, onBlogClick);

  return (
    <Core>
      <BlogContainer>
        <Grid
          justifyContent='flex-start'
          gap='1rem'
          margin='0 0 1rem 0'
        >
          { filters.map(({ Component, props }) => <Component {...props}>html/css</Component>) }
        </Grid>

        <Grid
          justifyContent='flex-start'
          flexWrap='wrap'
          gap='1rem'
        >
          { blogs.map(({ Component, props }) => <Component {...props} />) }
        </Grid>
      </BlogContainer>
    </Core>
  )
};

export default Blog;
