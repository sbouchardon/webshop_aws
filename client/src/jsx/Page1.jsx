import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { useState } from 'react';

import { Product } from './Product.jsx';

import './style.css'

function Page1({results, query}) {
  // Introduction page

  return (
    <>

      <div className='productsContainer'>
        {query && (
          <div>
            <h2>Results for "{query}"</h2>
            {results.length === 0 ? (
              <p>No results found.</p>
            ) : (
              <div className='products'>
                {results.map((item, index) => (
                  <div key={index}>
                    <Product
                      id={item.pid}
                      name={item.pname}
                      price={item.pprice}
                      description={item.pdescription}
                      image={item.ppicturelink}
                      stock={item.pnumberstock}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  )
};

export default Page1;