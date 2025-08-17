
import React, {useState} from 'react';

import StarRating from "./StarRating"

export default function Product(props) {

    const [like, setLike] = useState(false);

    const updateLike = () => {
        setLike(prev => !prev);
        
    };

    return (
        <>
            <div className='flex flex-col justify-center items-center p-4'>
                <div className='bg-white rounded-lg p-2 w-[350px]'>

                    {/* Image */}
                    <div>
                        <img className="w-[200px] mx-auto" src={props.image} alt={props.name}/>
                    </div>

                    {/* Title */}
                    <div className="font-bold text-left p-1">
                        <h3>{props.title}</h3>
                    </div>

                    {/* Price */}
                    <div className="p-1 font-semibold">
                        <p>{props.nbPrice}€</p>
                    </div>

                    {/* Reviews */}
                    <div className="flex items-center">
                        <StarRating nbStars={props.nbStars} />
                        <p className="text-sm text-gray-600">{props.nbReviews} reviews</p>
                    </div>

                    {/* Description */}
                    <div className="p-1 italic text-sm text-gray-700">
                        <p>{props.description}</p>
                    </div>

                    {/* Buttons */}
                    <div className="flex items-center gap-2 p-2">
                        <button onClick={updateLike}>
                            <img className="nav-button" src={like ? "/likeProduct.svg" : "/unlikeProduct.svg"} alt="like" />
                        </button>
                        <button className="flex-1 w-60 mx-auto border border-blue-950 text-blue-950 hover:bg-blue-950 hover:text-white font-semibold py-2 rounded-full transition-all cursor-pointer">Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}