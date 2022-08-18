import React from 'react';
import styled from 'styled-components';

import GlobalStyle from 'components/core/GlobalStyle';

const Page = styled.section`
  width: 900px;
  background-color: white;
  margin: 0 auto 0 auto;
`;

const Core = ({ children }) => {
  return (
    <Page>
      <GlobalStyle />
      { children }
    </Page>
  );
};

export default Core;