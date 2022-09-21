import React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';

import Core from 'core/Core';
import BlogContainer from 'groups/BlogContainer';

const Entry = ({ data }) => {
  const { markdownRemark } = data;
  const { html, frontmatter } = markdownRemark;
  const { title, slug, category, stack, featuredImage } = frontmatter;
  const { fluid } = featuredImage.childImageSharp;

  return (
    <Core>
      <BlogContainer>
        <h1>{title}</h1>
        <Image fluid={fluid} />
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
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
