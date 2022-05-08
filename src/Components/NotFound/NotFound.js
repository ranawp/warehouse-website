import React from 'react';
import notfound from '../../photo/notfound.jpg'

const NotFound = () => {
    return (
        <div>
            <img className='mx-auto d-flex img-fluid' src={notfound} alt="" />
        </div>
    );
};

export default NotFound;