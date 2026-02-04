'use client';

import { useState, useEffect } from 'react';
import { IoIosArrowUp } from "react-icons/io";
const ScrollToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed right-4 bottom-4 lg:bottom-8 lg:right-8 p-4 bg text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-200 z-[999]  "
                    aria-label="Scroll to top"
                >
                    <IoIosArrowUp size={20} />
                </button>
            )}
        </>
    );
};

export default ScrollToTop;