import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import housingData from '../data/housings.json';
import { Carrousel } from '../components/carrousel';
import { Collapse } from '../components/collapse';
import { Tags } from '../components/tags';
import { Host } from '../components/host';
import { Rating } from '../components/rating';
import "../styles/housings.scss";

export const Housings = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [housing, setHousing] = useState(null);

    useEffect(() => {
        const selectedHousing = housingData.find((housing) => housing.id === id);
        if (selectedHousing) {
            setHousing(selectedHousing);
        } else {
            navigate('/error');
        }
    }, [id, navigate]);

    if (!housing) {
        return null;
    }

    return (
        <main className="housing-page">
            <div className="carrousel-container">
                <Carrousel images={housing.pictures} />
            </div>
            <div className="housing-details">
                <div className="housing-details__left">
                    <h1 className="housing-details__title">{housing.title}</h1>
                    <h3 className="housing-details__location">{housing.location}</h3>
                    <Tags tags={housing.tags} />
                </div>
                <div className="housing-details__right">
                    <Host host={housing.host} />
                    <Rating rating={housing.rating} />
                </div>
            </div>
            <div className="collapse-housings">
                <Collapse title="Description" content={housing.description} />
                <Collapse
                    title="Équipements"
                    content={
                        <ul>
                            {housing.equipments.map((equipment, index) => (
                                <li key={index}>{equipment}</li>
                            ))}
                        </ul>
                    }
                />
            </div>
        </main>
    );
};
