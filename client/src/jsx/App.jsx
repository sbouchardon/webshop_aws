import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { useState } from 'react';

import Page1 from './Page1.jsx';
import { Search } from './Search.jsx';

import './style.css'

function App() {

  const [results, setResults] = useState([]);
  const [query, setQuery] = useState('');

  const handleSearch = async (searchQuery) => {
      setQuery(searchQuery); // Set the query to the state

      try {
        const response = await fetch("https://oi5hultkdk.execute-api.us-east-1.amazonaws.com/dev");
        const bodyTxt = await response.text();
        const data = JSON.parse(bodyTxt);
        console.log(data);

        // Filter results locally based on the searchQuery
        const filtered = data.filter(item =>
          item.pname.toLowerCase().includes(searchQuery.toLowerCase())
        );

        setResults(filtered);
      } catch (error) {
        console.error("Error fetching data:", error);
        setResults([]);
      }
    };

  return (
    <>


        <Router>
        <div className='navbar'>

          <Link to="/page1">
            <img src='/bambay_logo.svg'/>
          </Link>

          <Search onSearch={handleSearch}/>
        </div>
          
        <div style={{ marginTop: '100px', padding: '20px' }}>
        {query && (
          <div>
            <h2>Results for "{query}"</h2>
            <ul>
              {results.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
              {results.length === 0 && <p>No results found.</p>}
            </ul>
          </div>
        )}
        </div>
        

          <Routes>
            <Route path="/page1" element={<Page1 />} />
            <Route path="*" element={<Navigate to="/page1" />} />
          </Routes>
        </Router>
    </>
  )
}

export default App;
