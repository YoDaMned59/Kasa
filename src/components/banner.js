import React from 'react';
import '../styles/banner.scss';

export const Banner = ({BannerImg, content}) => {
    return (
        <div className='banner-container'>
        <img src={BannerImg} alt="banniere" className='banner-image'></img>
        {content && <p className='banner-text'>{content}</p>}
        </div>
    )
}