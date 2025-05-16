
import './style.css'
import React from 'react'
import { useState } from 'react';
import Button from './Button.jsx'

export function Search({ onSearch }) {
    // Search component
    // Search in the cloud database for the existence of a possible product

    const [query, setQuery] = React.useState('');

    const handleSearch = () => {
      onSearch(query); // Send query to parent
    };

    return (
      <>
        <div>
          <nav id="search-container">
            <div id="search-bar">
              <input
              type="text"
              id="search-input"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              />
              <button id="search-button" type="button" onClick={handleSearch}>
                <img src="/search-button.svg" alt="search" />
              </button>
            </div>
          </nav>
        </div>
      </>
    )
};
  
