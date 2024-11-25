import React from "react";
import { BannerAbout } from "../components/banner";
import infosKasa from "../data/infosKasa.json"
import { Collapse } from "../components/collapse";

export const About = () => {
    return (
        <div className="page-container">
            <main>
                <BannerAbout />
                <div className="collapse-container">
                    {infosKasa.map((data, index) => (
                        <Collapse
                            key={index}
                            title={data.title}
                            content={data.content}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
};


