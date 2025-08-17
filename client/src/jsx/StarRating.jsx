
export default function StarRating(props){
    return(
        <>
            <div className="flex gap-0.5 w-fit m-1">
                {[... Array(5)].map((_,i) => (
                <img className="w-4"
                    key={i}
                    src={i <props.nbStars ? "./starFull.svg" : "./starEmpty.svg"}
                />
                ))}
            </div>
        </>
    );
}