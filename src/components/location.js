import React from 'react';
import '../styles/location.scss';

export const Location = ({ title, location }) => {
    const formattedLocation = `${location.split(' - ')[1]?.split(' ')[0] || 'Paris'}, ${location.split(' - ')[0] || 'Ile de France'}`;

    return (
        <div className="location-container">
            <h1 className="location-title">{title}</h1>
            <p className="location">{formattedLocation}</p>
        </div>
    );
};
