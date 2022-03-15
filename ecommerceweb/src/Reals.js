import React from 'react';
import Slider from './Slider';
import "./Reals.css";

function Reals() {
    return (
        <div className='slider_main'>
            <h2>Create Quick Shorts</h2>
            <section className="slider">
                <Slider />
                <Slider />
                <Slider />
            </section>
        </div>
    )
}

export default Reals;
