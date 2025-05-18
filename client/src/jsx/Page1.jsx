import { Product } from './Product.jsx';

import './style.css'

function Page1({ results, query }) {
  // This component displays the search results based on the query passed from the navigation bar inside App.jsx
  // It uses the Product component to render each product in the results

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