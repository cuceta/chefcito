import React from 'react';
import './recipeCard.css';

export default function RecipeCard({ recipe, onClick }) {
    // Split title on newline characters
    const titleLines = recipe.title.split('\n');
    const allergiesLines = recipe.allergenWarning.split('\n');

    return (
        <div className="recipe-card" onClick={() => onClick(recipe)}>
            <img
                className="recipe-card__image"
                src={recipe.image}
                alt={recipe.title}
                loading="eager"
            />
            <div className="recipe-card__body">
                <h2 className="recipe-card__title">
                    {titleLines.map((line, idx) => (
                        <React.Fragment key={idx}>
                            {line}
                            {idx < titleLines.length - 1 && <br />}
                        </React.Fragment>
                    ))}
                </h2>
                <hr className="recipe-card-hr" />
                <div className="recipe-card__meta">
                    <span className="recipe-card-spam">⏱ {recipe.time}</span>
                    <span className="recipe-card-spam">⚠️ {allergiesLines.map((line, idx) => (
                        <React.Fragment key={idx}>
                            {line}
                            {idx < allergiesLines.length - 1 && <br />}
                        </React.Fragment>
                    ))}</span>
                </div>
            </div>
        </div>
    );
}
