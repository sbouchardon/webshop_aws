import React, { useState, useEffect } from 'react';

export default function Info({ visible, img, message }) {
    const [isVisible, setIsVisible] = useState(visible);

    useEffect(() => {
        if (visible) {
            setIsVisible(true);
        }
    }, [visible]);

    if (!isVisible) return null;

    return (
        <div className={`fixed z-50 top-[4.5rem] right-5 sm:right-10 
    flex h-20 gap-5 items-center justify-between
    px-6 py-2 text-black font-medium text-sm rounded-md shadow-lg
    bg-white bg-opacity-80 transition-opacity duration-1000 ease-in-out
    ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}
  `}>
            <img className="w-[60px] h-[60px]" src={img} alt="icon" />
            {message}
            <button onClick={() => setIsVisible(false)} className="nav-button text-sm rounded-4xl">x</button>
        </div>
    );
}
