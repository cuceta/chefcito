import React, { useState } from 'react';
import recipes from '../../data/lunchRecipes.json';
import RecipeCard from '../../components/recipeCard/recipeCard';
import Footer from '../../components/footer/footer';
import './lunch.css';
import RecipeModal from '../../components/RecipeModal/RecipeModal';

export default function Lunch() {
    const [selected, setSelected] = useState(null);

    return (
        <div className="breakfast-page">

            <h1>LUNCH RECIPES</h1>

            <div className="breakfast-grid">
                {recipes.map(r => (
                    <RecipeCard
                        key={r.id}
                        recipe={r}
                        onClick={setSelected}
                    />
                ))}
            </div>

            {selected && (
                <RecipeModal
                    recipe={selected}
                    onClose={() => setSelected(null)}
                />
            )}

            <Footer />
        </div>
    );
}
