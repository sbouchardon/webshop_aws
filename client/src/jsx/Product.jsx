
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


export function Product(props) {

    /* update buy now button if product unavailable, price = 0 */
    const [isAvailable, setAvailable] = useState(true);
    
    /* navigate to page2 */
    const navigate = useNavigate();
    const handleClick = () => {
        /* store timed socket in case user reload the page */
        sessionStorage.setItem("key", props.id);
        navigate('/page2', { state: { item: props }});
    }

    useEffect(() => {

        if (props.stock === 0) {
            setAvailable(false);
        } else {
            setAvailable(true);
        }
    }, [props.stock]);

    /* update buy now button if product unavailable, price = 0 */

    return (
        <>
            <div className="centerProduct"> 
                <div className="productCard">

                    <div className="productTitle">
                        <h1>{props.name}</h1>
                    </div>

                    <div className="productDescription">
                        <p>{props.description}</p>
                    </div>

                    <div className="productPrice">
                        <p>{props.price} €</p>
                    </div>

                    <button className={isAvailable ? "isAvailable" : "notAvailable"}  disabled={!isAvailable} onClick={handleClick}>
                        {isAvailable ? "Buy Now" : "Unavailable"}
                    </button>
                    
                </div>
            </div>  
        </>
    )
}