import React from 'react';
import './RecipeModal.css';

export default function RecipeModal({ recipe, onClose }) {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>×</button>
                <h2>{recipe.title}</h2>
                <h3>Ingredients</h3>
                <ul>{recipe.ingredients.map((i, idx) => <li key={idx}>{i}</li>)}</ul>
                <h3>Instructions</h3>
                <ol>{recipe.instructions.map((s, idx) => <li key={idx}>{s}</li>)}</ol>
                {recipe.tip && <p className="modal-tip">{recipe.tip}</p>}
            </div>
        </div>
    );
}
