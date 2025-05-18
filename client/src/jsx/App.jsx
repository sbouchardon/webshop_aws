import { BrowserRouter as Router, Route, Routes, Link, Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Page1 from './Page1.jsx';
import Page2 from './Page2.jsx';
import { Search } from './Search.jsx';

import './style.css'

// This is the main component, it sets up the routing and navigation for the application

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

function AppRoutes() {
  // The AppRoutes component handles the routing logic and state management for search results
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = async (searchQuery) => {
    // This function handles the search in the navigation bar, query is passed from the Search component
    // It fetches data from the Gateway API and filters the results based on the search query

    setQuery(searchQuery);
    try {
      const response = await fetch("https://oi5hultkdk.execute-api.us-east-1.amazonaws.com/dev/products");
      const text = await response.text();
      let data = JSON.parse(text);
      if (data.body && typeof data.body === 'string') {
        data = JSON.parse(data.body);
      }
      if (!Array.isArray(data)) return;
      const filtered = data.filter(item =>
        item.pname.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setResults(filtered);
      navigate('/page1');
    } catch (error) {
      setResults([]);
    }
  };

  return (
    <>
      {/* The navbar contains the logo and the search bar */}
      <div className='navbar'>
        <Link to="/">
          <img src='/bambay_logo.svg' />
        </Link>

        <Search onSearch={handleSearch} />

      </div>

      {/* Only show background-sign if not on /page2 */}
      {location.pathname !== '/page2' && <div className='background-sign'></div>}

      {/* The Routes component defines the different routes in the application */}
      <Routes>
        <Route path="/page1" element={<Page1 results={results} query={query} handleSearch={handleSearch} />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;