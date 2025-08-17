import { Link } from "react-router-dom";
import React, {useState} from 'react';

export default function ProductCard(props) {

    const [like, setLike] = useState(false);
    const updateLike = () => {setLike(prev => !prev);};

    return (
        <>
                <div className='w-[300px] flex flex-col items-center m-4 text-white'>
                    <div className='relative group w-full cursor-pointer'>

                        {/* Like button */}
                        <button onClick={updateLike} className="absolute top-2 right-2 transform translate-x-2 opacity-0 
                         group-hover:translate-x-0 group-hover:opacity-100 
                         transition-all duration-500 ease-out">

                            <img className="nav-button" 
                            src={like ? "/likeProduct.svg" : "/unlikeProduct.svg"} alt="like" />
                        </button>


                        <Link to={`/product/${props.id}`}>
                            {/* Image */}
                            <img src={props.image} alt={props.name} className="w-full h-auto object-cover"/>

                            {/* Title + Price */}
                            <h3>{props.title}</h3>
                            <p>{props.nbPrice}€</p>

                            {/* Description*/}
                            <p className="italic text-sm mt-1 text-gray-600 
                                        opacity-0 -translate-y-2 
                                        group-hover:opacity-100 group-hover:translate-y-0 
                                        transition-all duration-500 ease-out">
                                {props.description}
                            </p>
                        </Link>
                        
                    </div>
                </div>
        </>
    )
}
