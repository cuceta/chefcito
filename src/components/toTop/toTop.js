import React, { useState, useEffect } from 'react';
import upArrow from '../../img/up-arrow.svg';
import './toTop.css';

export default function ToTop() {
    const [bottomOffset, setBottomOffset] = useState(20);

    const scrollToTop = () =>
        window.scrollTo({ top: 0, behavior: 'smooth' });

    useEffect(() => {
        const footerEl = document.getElementById('page-footer');
        if (!footerEl) return;

        const updateOffset = () => {
            const scrollY       = window.pageYOffset;
            const viewportBottom = scrollY + window.innerHeight;
            const scrollHeight   = document.documentElement.scrollHeight;
            const footerHeight   = footerEl.offsetHeight;

            // if viewport bottom has passed into the footer's top zone...
            if (viewportBottom > scrollHeight - footerHeight) {
                const intrusion    = viewportBottom - (scrollHeight - footerHeight);
                setBottomOffset(intrusion + 20);
            } else {
                setBottomOffset(20);
            }
        };

        window.addEventListener('scroll',  updateOffset, { passive: true });
        window.addEventListener('resize',  updateOffset);
        updateOffset(); // init
        return () => {
            window.removeEventListener('scroll', updateOffset);
            window.removeEventListener('resize', updateOffset);
        };
    }, []);

    return (
        <aside
            className="toTop"
            onClick={scrollToTop}
            style={{ bottom: `${bottomOffset}px` }}
        >
            <div className="toTop-container">
                <img src={upArrow} alt="Up arrow" className="toTop-img" />
            </div>
        </aside>
    );
}
