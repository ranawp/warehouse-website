import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner from '../../../photo/img-10.jpg'
import banner1 from '../../../photo/banner1.jpg'
import banner2 from '../../../photo/banner2.jpg'
import './Banner.css'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div>
            {/* <img className='banner' src={banner} alt="warehouse-banner" /> */}
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-height"
                        src={banner1}
                        alt="First slide"

                    />
                    <Carousel.Caption>
                        <h3>We Provide 100% hygenic food</h3>
                        <p>Customer satisfection is our main target.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-height"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Furits makes you more healthy.</h3>
                        <p>Everbody needs proper nutration.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-height"
                        src={banner}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>We deliverd with safety.</h3>
                        <p> Fruits heal your body naturally.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;