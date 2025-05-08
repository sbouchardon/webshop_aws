
import './style.css'

import Button from './Button.jsx'

export function Search(props) {
    // Search component
    // Search in the cloud database for the existence of a possible product
    return (
      <>
        <div>
          <nav id="search-container">
            <div id="search-bar">
              <input type="text" id="search-input" placeholder="..." />
              <button id='search-button' type="button" onClick={props.onSearch}>
                <img src="/search-button.svg" alt="search" />
              </button>
            </div>
          </nav>
        </div>
      </>
    )
};
  
