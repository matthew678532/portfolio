import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';

const Link = styled(GatsbyLink)`
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default Link;
