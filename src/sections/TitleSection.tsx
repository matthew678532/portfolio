import React from 'react';

import Grid from 'components/Grid';
import Advertisement from 'components/Advertisement';
import Text from 'components/Text';
import Image from 'components/Image';

import LinkedInImage from 'images/linkedin-brands.svg';
import GithubImage from 'images/square-github-brands.svg';
import CodepenImage from 'images/codepen-brands.svg';

const socialImagesSize = {
  height: '20px',
  width: '20px'
};

const onExternalLinkClick = (e, url) => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

const TitleSection = () => {
  return (
    <Grid
      justifyContent='space-around'
      margin='10px 0 10px 0'
    >
      <Advertisement onClick={e => onExternalLinkClick(e, 'https://www.npmjs.com/package/@matthew678532/log')}>
        <Text
          fontFamily='Open Sans'
          textTransform='uppercase'
          color='#000'
          fontSize='0.6rem'
          margin='0 5px 0 5px'>
          Npm log utility
        </Text>
      </Advertisement>
      <Text
        fontFamily='Old Standard TT'
        textTransform='uppercase'
        fontSize='48px'>Developer Digest</Text>
      <Grid>
        <Image
          src={LinkedInImage}
          size={socialImagesSize}
          cursor='pointer'
          onClick={e => onExternalLinkClick(e, 'https://www.linkedin.com/in/matthewlbirch/')}/>
        <Image
          src={GithubImage}
          size={socialImagesSize}
          cursor='pointer'
          onClick={e => onExternalLinkClick(e, 'https://github.com/matthew678532')}/>
        <Image
          src={CodepenImage}
          size={socialImagesSize}
          cursor='pointer'
          onClick={e => onExternalLinkClick(e, 'https://codepen.io/matthew678532')}/>
      </Grid>
    </Grid>
  );
};

export default TitleSection;