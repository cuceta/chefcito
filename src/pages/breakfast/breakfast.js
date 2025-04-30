import React, { useState } from 'react';
import recipes from '../../data/breakfastRecipes.json';
import RecipeCard from '../../components/recipeCard/recipeCard';
import Footer from '../../components/footer/footer';
import './breakfast.css';
import RecipeModal from '../../components/RecipeModal/RecipeModal';
import ToTop from "../../components/toTop/toTop";

export default function Breakfast() {
    const [selected, setSelected] = useState(null);

    return (
        <div className="breakfast-page">

            <h1>CHEFCITO'S BREAKFAST RECIPES</h1>

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

            <ToTop/>

            <Footer />
        </div>
    );
}
