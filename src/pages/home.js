import React from 'react';
import { Banner } from '../components/banner';
import { Gallery } from '../components/gallery';
import { Footer } from '../components/footer';

export const Home = () => {
  return (
    <main>
      <Banner />
      <Gallery />
      <Footer />
    </main>
  )
};