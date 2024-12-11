import React from "react";
import BannerAbout from "../assets/BanniereAbout.png";
import { Banner } from "../components/banner"
import infosKasa from "../data/infosKasa.json"
import { Collapse } from "../components/collapse";
import '../styles/about.scss'


export const About = () => {
    return (
        <main>
            <div className="page-container">
                <Banner className="banner-about" BannerImg={BannerAbout} pageType="about" />
                <div className="collapse-container">
                    {infosKasa.map((data, index) => (
                        <Collapse className="collapse-about"
                            key={index}
                            title={data.title}
                            content={data.content}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
};


