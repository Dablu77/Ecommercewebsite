import React from "react";
import { Link } from "react-router-dom";
import "./Slider.css";

function Slider() {
    return (
        <>
            <section class="slider">
                <ul id="autoWidth" className="cs-hidden">
                    <li className="item-a">
                        <div className="box">
                            <div className="slide-video">
                                <video controls>
                                    <source src="ImageHead/video2.mp4" type="video/mp4" />
                                </video>
                            </div>

                            <div className="detail-box">
                                <div className="type">
                                    <Link to="/">
                                        <i class="fa-solid fa-user-tie"></i> Name😎
                                    </Link>
                                    <span>Video title Online Quick Shorts🥰</span>
                                </div>

                                <Link to="/" className="play">
                                    <i class="fa-solid fa-camera"></i>
                                </Link>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
        </>
    );
}

export default Slider;
