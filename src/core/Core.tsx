import React from 'react';

import GlobalStyle from 'core/GlobalStyle';

const Core = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      { children }
    </>
  );
};

export default Core;
