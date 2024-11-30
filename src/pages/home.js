import React from 'react';
import { Banner } from '../components/banner';
import { Gallery } from '../components/gallery';
import BannerHome from '../assets/Banniere.png'

export const Home = () => {
  return (
    <main>
      <Banner
        BannerImg={BannerHome}
        content={"Chez vous, partout et ailleurs"}
      />
      <Gallery />
    </main>
  )
};
