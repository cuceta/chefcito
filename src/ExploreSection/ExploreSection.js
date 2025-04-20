import React from 'react';
import RecipeCard from './../RecipeCard/RecipeCard';
import './ExploreSection.css';

import breakfastImg from '../img/breakfast.png';
import lunchImg     from '../img/lunch.png';
import dinnerImg    from '../img/dinner.png';
import snacksImg    from '../img/snacks.png';

const RECIPES = [
    {
        image: breakfastImg,
        subtitle: 'Energizing, easy to make breakfast recipes',
        description: 'Rise and shine with our amazing breakfast recipes that set a positive tone for your day.',
        link: '/breakfast'
    },
    {
        image: lunchImg,
        subtitle: 'Quick and delicious lunch recipes',
        description: 'Refuel with vibrant, simple meals perfect for a busy workday or a leisurely weekend picnic.',
        link: '/lunch'
    },
    {
        image: dinnerImg,
        subtitle: 'Filling and nutritious dinner recipes',
        description: 'Indulge in comforting dinners that bring flavor and ease \n \nto your evening routine.',
        link: '/dinner'
    },
    {
        image: snacksImg,
        subtitle: 'Healthy tasty snacks and baking recipes',
        description: 'Satisfy your cravings with creative snack ideas and baked delights, perfect for anytime treats.',
        link: '/snack-baking'
    }
];

export default function ExploreSection() {
    return (
        <section className="explore-section">
            <div className="card-container">
                {RECIPES.map((r) =>
                    <RecipeCard
                        key={r.subtitle}
                        image={r.image}
                        subtitle={r.subtitle}
                        description={r.description}
                        link={r.link}
                    />
                )}
            </div>
        </section>
    );
}
