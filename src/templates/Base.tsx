import { Hero } from './Hero';
import { Sponsors } from './Sponsors';
import { VerticalFeatures } from './VerticalFeatures';
import FancyTestimonialSliderPage from './PageTestimonials';
import { AboutUs } from './AboutUs';
import React, { useState } from 'react';

const Base = () => (
  <>
    <Hero />
    <AboutUs />
    <VerticalFeatures />
    <Sponsors />
    <FancyTestimonialSliderPage />
  </>
);

export { Base };
