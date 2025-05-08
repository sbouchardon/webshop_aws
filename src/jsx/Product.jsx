
export function Product(props) {
    return (
        <>
            <div className="centerProduct"> 
                <div className="productInfo">

                    <div className="productInfoTitle">
                        <h1>{props.name}</h1>
                    </div>

                    <div className="productInfoPrice">
                        <p>{props.price} €</p>
                    </div>

                    <div className="productInfoDescription">
                        <p>{props.description}</p>
                    </div>

                    <div className="productInfoImage">
                        <img src={props.image} alt={props.name+'.png'} />
                    </div>
                </div>
            </div>  
        </>
    )
}