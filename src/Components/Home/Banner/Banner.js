import React from 'react';
import banner from '../../../photo/img-10.jpg'
import './Banner.css'
const Banner = () => {
    return (
        <div>
            <img className='banner' src={banner} alt="warehouse-banner" />
        </div>
    );
};

export default Banner;