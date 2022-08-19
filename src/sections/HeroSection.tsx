import React from 'react';

import Text from 'components/Text';

const HeroSection = () => {
  return (
    <>
      <Text
        fontFamily='Open Sans'
        textTransform='uppercase'
        fontSize='108px'
        fontWeight='900'>
        Matthew Birch
      </Text>
      <hr style={{ width: '70px' }}/>
      <Text
        fontFamily='Open Sans'
        textTransform='uppercase'
        fontSize='72px'
        fontWeight='700'>
        Another Software Engineer hits the web
      </Text>
    </>
  );
};

export default HeroSection;
