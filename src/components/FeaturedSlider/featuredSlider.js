import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './featuredSlider.css';

import breakfastImg from '../../img/breakfastFeatureThumbnail.png';
import lunchImg     from '../../img/lunchFeatureThumbnail.png';
import dinnerImg    from '../../img/dinnerFeatureThumbnail.png';
import snacksImg    from '../../img/snackBakingFeatureThumbnail.png';
import FeaturedCard from '../FeaturedCard/FeaturedCard';

const FEATURES = [
    {
        image: breakfastImg,
        subtitle: 'Energizing, easy to make breakfast recipes',
        description:
            'Rise and shine with our amazing breakfast recipes that set a positive tone for your day.',
        link: '/breakfast',
    },
    {
        image: lunchImg,
        subtitle: 'Quick and delicious lunch recipes',
        description:
            'Refuel with vibrant, simple meals perfect for a busy workday or a leisurely weekend picnic.',
        link: '/lunch',
    },
    {
        image: dinnerImg,
        subtitle: 'Filling and nutritious dinner recipes',
        description:
            'Indulge in comforting dinners that bring flavor and ease to your evening routine—ideal for both weeknights and special gatherings.',
        link: '/dinner',
    },
    {
        image: snacksImg,
        subtitle: 'Healthy tasty snacks and baking recipes',
        description:
            'Satisfy your cravings with our creative snack ideas and baked delights, perfect for anytime treats or a fun baking day.',
        link: '/snack-baking',
    },
    {
        image: breakfastImg,
        subtitle: 'Energizing, easy to make breakfast recipes',
        description:
            'Rise and shine with our amazing breakfast recipes that set a positive tone for your day.',
        link: '/breakfast',
    },
    {
        image: lunchImg,
        subtitle: 'Quick and delicious lunch recipes',
        description:
            'Refuel with vibrant, simple meals perfect for a busy workday or a leisurely weekend picnic.',
        link: '/lunch',
    },
    {
        image: dinnerImg,
        subtitle: 'Filling and nutritious dinner recipes',
        description:
            'Indulge in comforting dinners that bring flavor and ease to your evening routine—ideal for both weeknights and special gatherings.',
        link: '/dinner',
    },
    {
        image: snacksImg,
        subtitle: 'Healthy tasty snacks and baking recipes',
        description:
            'Satisfy your cravings with our creative snack ideas and baked delights, perfect for anytime treats or a fun baking day.',
        link: '/snack-baking',
    },
];

export default function ExploreSectionSlider() {
    return (
        <section className="explore-section">
            <Swiper
                modules={[Navigation, Autoplay]}
                loop={true}
                loopedSlides={FEATURES.length}      // clone all slides so peeks at ends
                initialSlide={0}                    // start on the very first
                centeredSlides={true}               // active slide is centered
                slidesPerView={'auto'}              // width dictated by CSS
                spaceBetween={16}
                navigation
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                breakpoints={{
                    // on desktop, switch to a 3-wide “grid” style
                    1025: {
                        slidesPerView: 3,
                        centeredSlides: false,
                    },
                }}
                className="recipe-swiper"
            >
                {FEATURES.map((feat) => (
                    <SwiperSlide key={feat.subtitle}>
                        <FeaturedCard {...feat} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
