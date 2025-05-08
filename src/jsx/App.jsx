import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';

import Page1 from './Page1.jsx';
import Page2 from './Page2.jsx';
import Button from './Button.jsx';
import { Search } from './Search.jsx';

import './style.css'

function App() {

  return (
    <>


        <Router>
        <div className='navbar'>

          <Link to="/page1">
            <img src='/bambay_logo.svg'/>
          </Link>

          <Search/>

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
