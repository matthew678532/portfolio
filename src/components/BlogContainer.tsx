import React from 'react';
import styled from 'styled-components';

const Shelf = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 10px;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
`;

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
