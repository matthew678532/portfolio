import React from 'react';

import TitleSection from 'sections/TitleSection';
import PageDetails from 'sections/PageDetails';
import HeroSection from 'sections/HeroSection';
import WorkSection from 'sections/WorkSection';

import Core from 'components/core/Core';

const Index = () => {
  return (
    <Core>
      <TitleSection />
      <PageDetails />
      <HeroSection />
      <WorkSection />
    </Core>
  )
};

export default Index;
