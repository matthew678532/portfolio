import React from 'react';
import styled from 'styled-components';

import Shelf from 'components/Shelf';

const Container = styled.div`
  width: 80%;
  margin: 10% auto;
`;

const BlogContainer = ({ children }) => {
  return (
    <>
      <Shelf />
      <Container>
        { children }
      </Container>
    </>
  );
};

export default BlogContainer;
