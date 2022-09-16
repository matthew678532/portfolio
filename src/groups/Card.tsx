import React from 'react';
import styled from 'styled-components';

import { Header, Standard } from 'components/Text';

import Image from 'components/Image';
import Grid from 'components/Grid';
import Link from 'components/Link';

import LinkedInImage from 'images/linkedin-brands.svg';
import GithubImage from 'images/square-github-brands.svg';
import CodepenImage from 'images/codepen-brands.svg';

import Avatar from 'images/avatar_two.png';

const CardContainer = styled(Grid)`
  background-color: rgba(255, 255, 255, .15);  
  backdrop-filter: blur(5px);
  height: 60%;
  width: 50%;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;

const socialImagesSize = { height: '1.25rem', width: '1.25rem' };

const onExternalLinkClick = (e, url) => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

const Card = () => {
  return (
    <CardContainer
      justifyContent='space-around'
      alignItems='center'
    >
      <Grid
        justifyContent='center'
        alignItems='center'
        flex='1'>
        <Image
          src={Avatar}
          style={{
            width: "50%",
            height: "100%"
          }}
        />
      </Grid>
      <Grid
        flexDirection='column'
        flex='1'
        style={{ margin: '0 1rem' }}>
        <Header>Matthew Birch</Header>
        <Standard style={{ margin: '0 0 1rem 0' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Standard>
        <Grid
          gap='1rem'>
          <Image
            src={LinkedInImage}
            style={{
              ...socialImagesSize,
              cursor: 'pointer'
            }}
            onClick={e => onExternalLinkClick(e, 'https://www.linkedin.com/in/matthewlbirch/')}/>
          <Image
            src={GithubImage}
            style={{
              ...socialImagesSize,
              cursor: 'pointer'
            }}
            onClick={e => onExternalLinkClick(e, 'https://github.com/matthew678532')}/>
          <Image
            src={CodepenImage}
            style={{
              ...socialImagesSize,
              cursor: 'pointer'
            }}
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
