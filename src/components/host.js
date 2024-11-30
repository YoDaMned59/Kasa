import React from 'react';

export const Host = ({ host }) => {
    return (
        <div className="host">
            <div className="host-info">
                <img src={host.picture} alt={host.name} className="host-image" />
                <p className="host-name">{host.name}</p>
            </div>
        </div>
    );
};

