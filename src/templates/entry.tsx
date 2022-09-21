import React from 'react';
import { graphql } from 'gatsby';

import Core from 'core/Core';
import BlogContainer from 'groups/BlogContainer';

const Entry = ({ data }) => {
  const { markdownRemark } = data;
  const { html, frontmatter } = markdownRemark;
  const { title, slug, category, stack } = frontmatter;

  return (
    <Core>
      <BlogContainer>
        <h1>{title}</h1>
        <p dangerouslySetInnerHTML={{ __html: html }}></p>
      </BlogContainer>
    </Core>
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
