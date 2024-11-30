import React from 'react';
import '../styles/banner.scss';

export const Banner = ({ BannerImg, content, pageType }) => {
    return (
        <div className={`banner-container ${pageType}`}>
            <img src={BannerImg} alt="banniere" className='banner-image' />
            {content && <p className='banner-text'>{content}</p>}
        </div>
    );
}
