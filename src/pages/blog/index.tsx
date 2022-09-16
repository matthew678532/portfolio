import React, { useEffect, useState, useRef } from 'react';
import { navigate } from 'gatsby';

import Core from 'core/Core';

import Grid from 'components/Grid';
import BlogContainer from 'groups/BlogContainer';

import { useContent } from 'hooks/useContent';

import { parseNodes, filterClickHandler } from './helper';

const Blog = () => {
  const nodes = useContent();
  const blogsRef = useRef();
  const activeFilter = useRef();
  const [blogs, setBlogs] = useState();
  const [filters, setFilters] = useState();

  const onBlogClick = (event, context) => {
    return navigate(`/blog/${context.slug}`);
  };

  const onFilterClick = (event, filter, index) => {
    filterClickHandler(
      filter,
      index,
      activeFilter,
      setFilters,
      setBlogs,
      blogsRef.current
    );
  };

  useEffect(() => {
    const { blogs, filters } = parseNodes(nodes, onBlogClick, onFilterClick);
    setFilters(filters);

    blogsRef.current = blogs; // Maintain all the nodes, for our filters..
    setBlogs(blogs);
  }, []);

  return (
    <Core>
      <BlogContainer>
        <Grid
          justifyContent='flex-start'
          gap='1rem'
          style={{ margin: '0 0 1rem 0' }}
        >
          { filters && filters.map(({ Component, props }) => <Component {...props}>{props.stack}</Component>) }
        </Grid>

        <Grid
          justifyContent='flex-start'
          flexWrap='wrap'
          gap='1rem'
        >
          { blogs && blogs.map(({ Component, props }) => <Component {...props} />) }
        </Grid>
      </BlogContainer>
    </Core>
  )
};

export default Blog;
