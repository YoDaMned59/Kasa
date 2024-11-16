import React from "react";
import { Link } from "react-router-dom"; // Import de Link pour naviguer vers la page de détail
import Housings from "../data/housings.json"; // Import des données JSON
import "../styles/gallery.scss"

export const Gallery = () => {
    return (
        <div className="galleryContainer">
            {Housings.map((housing) => (
                <article className="gallery-card" key={housing.id}>
                    {/* Le lien vers la page de détail */}
                    <Link to={`/Housing/${housing.id}`} className="gallery-link">
                        <img
                            src={housing.cover} // Image de couverture
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

