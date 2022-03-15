import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img
                    className="checkout-ad"
                    src="ImageHead/image9.webp"
                    alt="img"
                />
                <div>
                    <h2 className="checkout_title">Your shopping Basket</h2>
                    {/* { Basket} */}
                    {/* { Basket} */}
                    {/* { Basket} */}
                    {/* { Basket} */}

                </div>

            </div>

            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    );
}

export default Checkout;
