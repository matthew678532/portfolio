import { useStaticQuery, graphql } from 'gatsby';

export const useContent = () => {
  const data = useStaticQuery(
    graphql`
    query MarkdownExtract {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
            stack
            title
            category
          }
          html
          excerpt(format: HTML, pruneLength: 40)
        }
      }
    }
    `
  );

  return data.allMarkdownRemark.nodes;
};
