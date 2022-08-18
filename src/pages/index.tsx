import React from 'react';

import TitleSection from 'sections/TitleSection';
import PageDetails from 'sections/PageDetails';
import HeroSection from 'sections/HeroSection';

import Core from 'components/core/Core';
import Subheader from 'components/Subheader';
import Text from 'components/Text';
import Button from 'components/Button';

const Index = () => {
  return (
    <Core>
      <TitleSection />
      <PageDetails />
      <HeroSection />

      {/* <section>
        <Subheader>Matthew Birch</Subheader>
        <Button>LinkedIn</Button>
        <Button>Codepen</Button>
        <Header>Portfolio 01</Header>
        <Text>Code cruncher. Coffee muncher. Lead sponger.</Text>
      </section>
      <section>
        <Header>Projects 02</Header>
        <Text>Selection of projects worked on.. go on, take a gander</Text>
      </section>
      <section>
        <Header>Blog 03</Header>
        <Text>Blog heaven</Text>
      </section>
      <Text>Copyright 2022 Matthew Birch</Text> */}
    </Core>
  )
};

export default Index;
