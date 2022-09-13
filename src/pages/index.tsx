import React from 'react';
import styled from 'styled-components';

import Core from 'core/Core';

import Card from 'components/Card';

const Page = styled.section`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const CardWrapper = styled.div`
  height: inherit;
  width: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Index = () => {
  return (
    <Core>
      <Page>
        <CardWrapper>
          <Card />
        </CardWrapper>
      </Page>
    </Core>
  )
};

export default Index;
