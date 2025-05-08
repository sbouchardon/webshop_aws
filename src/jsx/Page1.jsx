
import './style.css'
import { Product } from './Product';

function Page1(props) {
    // Introduction page
    return (
      <>
        <div className='centerDiv'>
          <Product name="Product1" price="10" description="This is a product" image="logo.png"/>
        </div>
      </>
    )
  };
  
  export default Page1;