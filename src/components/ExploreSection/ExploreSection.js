import React from 'react';
import FeaturedCard from '../FeaturedCard/FeaturedCard';
import './ExploreSection.css';

import breakfastImg from '../../img/breakfastFeatureThumbnail.png';
import lunchImg     from '../../img/lunchFeatureThumbnail.png';
import dinnerImg    from '../../img/dinnerFeatureThumbnail.png';
import snacksImg    from '../../img/snackBakingFeatureThumbnail.png';

const FEATURES = [
    {
        image: breakfastImg,
        subtitle: 'Energizing, easy to make breakfast recipes',
        description: 'Rise and shine with our amazing breakfast recipes that set a positive tone for your day.',
        link: '/breakfast'
    },
    {
        image: lunchImg,
        subtitle: 'Quick and delicious lunch recipes',
        description: 'Refuel with vibrant, simple meals perfect for a busy workday or a leisurely weekend picnic.\n\n',
        link: '/lunch'
    },
    {
        image: dinnerImg,
        subtitle: 'Filling and nutritious dinner recipes',
        description: 'Indulge in comforting dinners that bring flavor and ease to your evening routine—ideal for both weeknights and special gatherings.',
        link: '/dinner'
    },
    {
        image: snacksImg,
        subtitle: 'Healthy tasty snacks and baking recipes',
        description: 'Satisfy your cravings with our creative snack ideas and baked delights, perfect for anytime treats or a fun baking day.',
        link: '/snack-baking'
    }
];

export default function ExploreSection() {
    return (
        <section className="explore-section">
            <div className="card-container">
                {FEATURES.map((r) =>
                    <FeaturedCard
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
