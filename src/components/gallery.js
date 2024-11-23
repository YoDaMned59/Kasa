import React from "react";
import { Link } from "react-router-dom";
import Housings from "../data/housings.json";
import "../styles/gallery.scss"

export const Gallery = () => {
    return (
        <div className="galleryContainer">
            {Housings.map((housing) => (
                <article className="gallery-card" key={housing.id}>
                    <Link to={`/Housing/${housing.id}`} className="gallery-link">
                        <img
                            src={housing.cover}
                            alt={housing.title}
                            className="gallery-image"
                        />
                        <h2 className="gallery-title">{housing.title}</h2>
                    </Link>
                </article>
            ))}
        </div>
    );
};

