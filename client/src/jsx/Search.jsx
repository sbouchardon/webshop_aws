
import React from 'react'

import './style.css'

export function Search({ onSearch }) {
  // This component is used to create the search bar
  // Search in the cloud database for the existence of a possible product

  const [query, setQuery] = React.useState('');

  const handleSearch = () => {
    onSearch(query); // Send query to parent, App.jsx
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

