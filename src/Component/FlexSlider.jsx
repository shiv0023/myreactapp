// FlexSliderComponent.jsx
import React, { useEffect } from 'react';
import 'flexslider/flexslider.css';
import 'flexslider';
import images from "../Images/index ";
const FlexSliderComponent = () => {
    useEffect(() => {
        window.$('.flexslider').flexslider({
            // FlexSlider options go here
        });
    }, []);

    return (
        <div className="flexslider ">
            <ul className="slides">
                <li>
                    <img src={images.images} alt="Slide 1" />
                </li>
                <li>
                    <img src={images.images1} alt="Slide 2" />
                </li>
                <li>
                    <img src={images.images2} alt="Slide 2" />
                </li> <li>
                    <img src={images.images3} alt="Slide 2" />
                </li>
                {/* Add more slides as needed */}
            </ul>
        </div>
    );
};

export default FlexSliderComponent;
