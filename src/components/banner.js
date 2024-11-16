import React from 'react';
import BannerImg from '../assets/Banniere.png';
import '../styles/banner.scss';

export const Banner = () => {
    return (
        <div className='bannerContainer'>
        <img src={BannerImg} alt="banniere" ></img>
        </div>
    )
} 