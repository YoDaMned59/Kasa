import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/errorPages.scss'



export const ErrorPage = () => {
    return (
        <main>
        <div className="error-page">
            <h1 className="error-code">404</h1>
            <p className="error-message">Oups ! La page que vous recherchez n'existe pas.</p>
            <Link to="/" className="home-link">
                Retour à l'accueil
            </Link>
        </div>
        </main>
    );
};
