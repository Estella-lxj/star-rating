import { react, useState } from "react";
import { FaStar } from "react-icons/fa";
import './StarRating.css';

function StarRating() {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);


    return (
        <div class='container'>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                    <label>
                        <input
                            type="radio"
                            name="rating" v
                            alue={ratingValue}
                            onClick={() => setRating(ratingValue)} />
                        <FaStar
                            className="star"
                            color={ratingValue <= (hover || rating) ? "yellow" : "gray"}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(0)}
                        />
                    </label>
                )
            })}
        </div>
    )
}

export default StarRating;