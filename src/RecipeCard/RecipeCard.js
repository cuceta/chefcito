import React from 'react';
import PropTypes from 'prop-types';
import './RecipeCard.css';

export default function RecipeCard({
                                       image,
                                       subtitle,
                                       description,
                                       link
                                   }) {
    return (
        <div className="recipe-card">

            <div className="card-recipe-text-container">
                <h3 className="card-subtitle">{subtitle}</h3>
                <p className="card-description">{description}</p>
                <a href={link} className="card-link">Check them out!</a>
            </div>
            <div className="card-image-wrapper">
                <img src={image} alt={subtitle}/>
            </div>
        </div>
    );
}

RecipeCard.propTypes = {
    image: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link:        PropTypes.string.isRequired
};
