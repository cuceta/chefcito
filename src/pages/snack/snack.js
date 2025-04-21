import React, { useState } from 'react';
import recipes from '../../data/snackBakingRecipes.json';
import RecipeCard from '../../components/recipeCard/recipeCard';
import Footer from '../../components/footer/footer';
import './snack.css';
import RecipeModal from '../../components/RecipeModal/RecipeModal';

export default function Snack() {
    const [selected, setSelected] = useState(null);

    return (
        <div className="snack-page">

            <h1>SNACK RECIPES</h1>

            <div className="snack-grid">
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
