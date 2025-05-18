
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Product(props) {
    // This component is used to display the product information and the buy now button

    // Update buynow button if product unavailable -> price = 0 
    const [isAvailable, setAvailable] = useState(true);

    const navigate = useNavigate();
    const handleClick = () => {
        // Store a timed socket in case the user reload the page and navigate to Page2.jsx
        sessionStorage.setItem("key", props.id);
        navigate('/page2', { state: { item: props } });
    }

    useEffect(() => {

        if (props.stock === 0) {
            setAvailable(false);
        } else {
            setAvailable(true);
        }
    }, [props.stock]);

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

                    <button className={isAvailable ? "isAvailable" : "notAvailable"} disabled={!isAvailable} onClick={handleClick}>
                        {isAvailable ? "Buy Now" : "Unavailable"}
                    </button>

                </div>
            </div>
        </>
    )
}