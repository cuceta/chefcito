import React, { useState } from 'react';
import recipes from '../../data/lunchRecipes.json';
import RecipeCard from '../../components/recipeCard/recipeCard';
import Footer from '../../components/footer/footer';
import './lunch.css';
import RecipeModal from '../../components/RecipeModal/RecipeModal';
import ToTop from "../../components/toTop/toTop";

export default function Lunch() {
    const [selected, setSelected] = useState(null);

    return (
        <div className="lunch-page">

            <h1>CHEFCITO'S LUNCH RECIPES</h1>
            <p className="snippet">Quick and delicious lunch recipes</p>

            <div className="lunch-grid">
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
