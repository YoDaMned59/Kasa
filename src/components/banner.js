import React from 'react';
import BannerImg from '../assets/Banniere.png';
import AboutImg from "../assets/BanniereAbout.png";
import '../styles/banner.scss';

export const Banner = () => {
    return (
        <div className='bannerContainer'>
        <img src={BannerImg} alt="banniere" ></img>
        </div>
    )
}

export const BannerAbout = () => {
    return (
        <div className="bannerContainer">
            <img src={AboutImg} alt="banniere"></img>
        </div>
    )
}