import React from 'react';
import { Banner } from '../components/banner';
import { Gallery } from '../components/gallery';
import BannerHome from '../assets/Banniere.png'
import "../styles/home.scss"

export const Home = () => {
  return (
    <main>
      <div className='home-container'>
        <Banner
          BannerImg={BannerHome}
          content={"Chez vous, partout et ailleurs"} pageType="home"
        />
        <Gallery />
      </div>
    </main>
  )
};

