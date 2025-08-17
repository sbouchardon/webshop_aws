
import { BrowserRouter as Router, Route, Routes, Link, Navigate, useNavigate } from 'react-router-dom';

import Comp0 from './Comp0.jsx';
import Comp1 from './Comp1.jsx';
import Comp2 from './Comp2.jsx';
import ProductPage from './ProductPage.jsx';

import Navbar from './Navbar.jsx';
import '../css/style.css';

export default function App() {

  return (
    <>
      <Router>
        <div>

          <Navbar/>

          {/* Routes */}
          <Routes>
            <Route path="/" element={<Comp0 />} />
            <Route path="/like" element={<Comp1 />} />
            <Route path="/cart" element={<Comp2 />} />
            <Route path="/product/:id" element={<ProductPage />} />
          </Routes>

        </div>
      </Router>
    </>
  )
}
