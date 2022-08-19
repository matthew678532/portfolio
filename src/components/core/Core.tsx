import React from 'react';
import styled from 'styled-components';

import GlobalStyle from 'components/core/GlobalStyle';

const Page = styled.section`
  width: 900px;
  background-color: white;
  margin: 0 auto 0 auto;
  border: 1px solid #ccc;
	box-shadow: inset 0 0 30px rgba(0,0,0,0.1), 1px 1px 3px rgba(0,0,0,0.2);
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