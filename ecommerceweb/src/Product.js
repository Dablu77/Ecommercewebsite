import React from "react"
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    console.log("this is the basket >>> ", basket);

    const addToBasket = () => {

        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };
    return (
        <div className='Product'>
            <div className='Product_info'>
                <p>{title}</p>
                <p className='Product_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='Product_rating'>
                    {Array(rating).fill().map((_, i) => (
                        <p>&#11088;</p>
                    ))}
                </div>
            </div>

            <img src={image} alt='' />

            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product;
