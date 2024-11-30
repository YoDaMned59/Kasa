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
        const selectedHousing = housingData.find(housing => housing.id === id);
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
            <Carrousel images={housing.pictures} />
            <div className="housing-info">
                <h1>{housing.title}</h1>
                <p className="location">
                    {`${housing.location.split(' - ')[1]?.split(' ')[0] || 'Paris'}, ${housing.location.split(' - ')[0] || 'Ile de France'}`}
                </p>
                <Tags tags={housing.tags} />
                <Rating rating={housing.rating} />
                <Host host={housing.host} />
            </div>
            <div className="collapse-section">
                <Collapse title="Description" content={housing.description} />
            </div>
            <div className="collapse-section">
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
