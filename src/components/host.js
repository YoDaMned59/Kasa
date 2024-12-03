import React from 'react';
import "../styles/host.scss"

export const Host = ({ host }) => {
    return (
        <div className="host">
            <div className="host-info">
            <p className="host-name">{host.name}</p>
                <img src={host.picture} alt={host.name} className="host-image" />
            </div>
        </div>
    );
};

