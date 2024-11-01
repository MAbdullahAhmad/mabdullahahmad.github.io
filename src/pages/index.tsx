import * as React from 'react';
import PageLayout from '../layouts/PageLayout';

import Divider from '@mui/material/Divider';
import Hero from '../components/Hero';
import LogoCollection from '../components/LogoCollection';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Highlights from '../components/Highlights';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import Footer from '../partials/Footer';

export default function Home() {
  return (
    <PageLayout>
      <Hero />
      <div>
        <LogoCollection />
        <Features />
        <Divider />
        <Testimonials />
        <Divider />
        <Highlights />
        <Divider />
        <Pricing />
        <Divider />
        <FAQ />
        <Divider />
        <Footer />
      </div>
    </PageLayout>
  );
}