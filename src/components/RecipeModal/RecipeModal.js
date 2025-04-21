import React from 'react';
import './RecipeModal.css';

export default function RecipeModal({ recipe, onClose }) {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>X</button>
                <h2 className="recipe-title">{recipe.title}</h2>
                <h3 className="recipe-section-title">Ingredients</h3>
                <ul className="recipe-content">{recipe.ingredients.map((i, idx) => <li key={idx}>{i}</li>)}</ul>
                <div className="detail-line">
                    <h3 className="recipe-section-title ">Allergen Warning: </h3>
                    <span className="details">{recipe.allergen}</span>
                </div>
                <div className="detail-line">
                    <h3 className="recipe-section-title ">Substitute: </h3>
                    <span className="details">{recipe.substitutions}</span>
                </div>
                <div className="space"></div>
                <h3 className="recipe-section-title">Instructions</h3>
                <ol className="recipe-content">{recipe.instructions.map((s, idx) => <li key={idx}>{s}</li>)}</ol>
                <div className="detail-line">
                    <h3 className="recipe-section-title ">Meal Prepping Tip: </h3>
                    <p className="details">{recipe.tip}</p>
                </div>

            </div>
        </div>
    );
}
