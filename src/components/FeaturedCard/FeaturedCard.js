import React from 'react';
import PropTypes from 'prop-types';
import './FeaturedCard.css';

export default function FeaturedCard({
                                       image,
                                       subtitle,
                                       description,
                                       link
                                   }) {
    return (
        <div className="featured-card">

            <div className="card-featured-text-container">
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

FeaturedCard.propTypes = {
    image: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link:        PropTypes.string.isRequired
};
