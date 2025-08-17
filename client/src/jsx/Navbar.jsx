import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';

import Search from './Search.jsx';

export default function Navbar() {

    const [hoverIndex, setHover] = useState(null)

    const buttons = [
        { to: '/account', icon: '/account.svg', alt: 'account' },
        { to: '/like', icon: '/like.svg', alt: 'like' },
        { to: '/cart', icon: '/cart.svg', alt: 'cart' },
    ]

    return (
        <>
            <nav className='sticky top-0 w-full z-50 bg-blue-950'>
                <div className="container max-w-full px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-12 items-center justify-between">

                        {/* LEFT side: logo + search */}
                        <div className="flex items-center space-x-4">
                            {/* Logo */}
                            <NavLink to="/">
                                <img className="nav-button" src="/logo.svg" alt="logo" />
                            </NavLink>

                            {/* Search component */}
                            <Search />
                        </div>

                        {/* RIGHT side: account + like + cart */}
                        <div className="flex items-center space-x-4 ml-auto">
                            {buttons.map((btn, index) => (
                                <NavLink
                                    key={index}
                                    to={btn.to}
                                    onMouseEnter={() => setHover(index)}
                                    onMouseLeave={() => setHover(null)}
                                >
                                    <img
                                        src={btn.icon}
                                        alt={btn.alt}
                                        className={`nav-button transition-all duration-250 ${hoverIndex === index
                                                ? 'active:scale-95'
                                                : hoverIndex !== null
                                                    ? 'opacity-60'
                                                    : ''
                                            }`}
                                    />
                                </NavLink>
                            ))}
                        </div>

                    </div>
                </div>
            </nav>

        </>
    )
}