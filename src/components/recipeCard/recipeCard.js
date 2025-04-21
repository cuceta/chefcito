import React from 'react';
import './recipeCard.css';

export default function RecipeCard({ recipe, onClick }) {
    return (
        <div className="recipe-card" onClick={() => onClick(recipe)}>
            <img
                className="recipe-card__image"
                src={recipe.image}
                alt={recipe.title}
                loading="eager"
            />
            <div className="recipe-card__body">
                <h2 className="recipe-card__title">{recipe.title}</h2>
                <hr className="recipe-card-hr"/>
                <div className="recipe-card__meta">
                    <span className="recipe-card-spam">⏱ {recipe.time}</span>
                    <span className="recipe-card-spam">⚠️ {recipe.allergen}</span>
                </div>
            </div>
        </div>
    );
}
