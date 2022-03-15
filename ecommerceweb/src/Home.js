import React from "react";
import "./Home.css";
import Product from "./Product";

export function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img
                    className="home_image"
                    src="ImageHead/header.webp"
                    alt="img"
                />

                <div className="home_row">
                    <Product
                        id="12321341"
                        title='The lean startup I am not sure how to calculate if it is one hour or less between a dispatch date and the current time using the JS Date object'
                        price={25.90}
                        rating={5}
                        image='ImageHead/image1.png' alt='img'


                    />
                    <Product
                        id="49538094"
                        title='ZoomInfo Technologies Inc. is an American subscription-based software as a service company'
                        price={250.90}
                        rating={4}
                        image='ImageHead/image2.png' alt='img'
                    />

                </div>

                <div className="home_row">

                    <Product
                        id="77396883"
                        title='ZoomInfo Technologies Inc. is an American subscription-based software as a service company'
                        price={277.90}
                        rating={3}
                        image='ImageHead/image5.png' alt='img'

                    />
                    <Product
                        id="49538034"
                        title='ZoomInfo Technologies Inc. is an American subscription-based software as a service company'
                        price={280.90}
                        rating={4}
                        image='ImageHead/image6.png' alt='img'

                    />
                    <Product
                        id="97965344"
                        title='ZoomInfo Technologies Inc. is an American subscription-based software as a service company'
                        price={2570.90}
                        rating={6}
                        image='ImageHead/image7.png' alt='img'

                    />


                </div>
                <div className="home_row">
                    <Product
                        id="49538094"
                        title='ZoomInfo Technologies Inc. is an American subscription-based software as a service company'
                        price={2500.90}
                        rating={4}
                        image='ImageHead/image3.png' alt='img'

                    />

                    <Product
                        id="49538094"
                        title='ZoomInfo Technologies Inc. is an American subscription-based software as a service company'
                        price={2500.90}
                        rating={4}
                        image='ImageHead/image3.png' alt='img'

                    />

                </div>
                <div className="home_row">
                    <Product
                        id="49538094"
                        title='ZoomInfo Technologies Inc. is an American subscription-based software as a service company'
                        price={2500.90}
                        rating={4}
                        image='ImageHead/image8.png' alt='img'

                    />
                    <Product
                        id="49538094"
                        title='ZoomInfo Technologies Inc. is an American subscription-based software as a service company'
                        price={2500.90}
                        rating={4}
                        image='ImageHead/image8.png' alt='img'

                    />
                    <Product
                        id="49538094"
                        title='ZoomInfo Technologies Inc. is an American subscription-based software as a service company'
                        price={2500.90}
                        rating={4}
                        image='ImageHead/image8.png' alt='img'

                    />
                    <Product
                        id="49538094"
                        title='ZoomInfo Technologies Inc. is an American subscription-based software as a service company'
                        price={2500.90}
                        rating={4}
                        image='ImageHead/image8.png' alt='img'

                    />


                </div>
            </div>
        </div>
    );
};
