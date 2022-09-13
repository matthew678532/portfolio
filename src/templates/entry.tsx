import React from 'react';
import { graphql } from 'gatsby';

import BlogContainer from 'groups/BlogContainer';

const Entry = ({ data }) => {
  console.info('Data = ', data);
  const { markdownRemark } = data;
  const { html, frontmatter } = markdownRemark;
  const { title, slug, category, stack } = frontmatter;

  return (
    <BlogContainer>
      <h2>{title}</h2>
      <p dangerouslySetInnerHTML={{ __html: html }}></p>
    </BlogContainer>
  );
};

export default Entry;

export const query = graphql`
  query EntryQuery($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        category
        slug
        stack
        title
      }
    }
  }
`;
