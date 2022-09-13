import React from 'react';
import styled from 'styled-components';

import Text from 'components/Text';
import Image from 'components/Image';
import Grid from 'components/Grid';
import Link from 'components/Link';

import LinkedInImage from 'images/linkedin-brands.svg';
import GithubImage from 'images/square-github-brands.svg';
import CodepenImage from 'images/codepen-brands.svg';

import Avatar from 'images/avatar.png';

const CardContainer = styled.div`
  background-color: rgba(255, 255, 255, .15);  
  backdrop-filter: blur(5px);
  height: 60%;
  width: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;

const socialImagesSize = {
  height: '20px',
  width: '20px'
};

const onExternalLinkClick = (e, url) => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

const Card = () => {
  return (
    <CardContainer>
      <Grid
        flexDirection='column'
        flex='1'
        gap='20px'
      >
        <Image
          src={Avatar}
          size={{
            width: "50%",
            height: "100%"
          }}
          style={{ borderRadius: "50%" }}
        />
      </Grid>
      <Grid
        flexDirection='column'
        flex='1'
        gap='20px'
        alignItems='flex-start'
        margin='0 10px 0 10px'
      >
        <Text
          fontFamily='Abril Fatface, cursive'
          fontWeight='700'
          fontSize='42px'>Matthew Birch</Text>
        <Text
          fontFamily='Roboto'
          fontWeight={100}
          fontSize='16px'
          lineHeight='1.6' >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>

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
          <Link to='/blog'>
            Blog
          </Link>
        </Grid>
      </Grid>
    </CardContainer>
  );
};

export default Card;
