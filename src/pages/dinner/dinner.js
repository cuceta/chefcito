import React, { useState } from 'react';
import recipes from '../../data/dinnerRecipes.json';
import RecipeCard from '../../components/recipeCard/recipeCard';
import Footer from '../../components/footer/footer';
import './dinner.css';
import RecipeModal from '../../components/RecipeModal/RecipeModal';
import ToTop from "../../components/toTop/toTop";

export default function Dinner() {
    const [selected, setSelected] = useState(null);

    return (
        <div className="dinner-page">

            <h1>CHEFCITO'S DINNER RECIPES</h1>

            <div className="dinner-grid">
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
