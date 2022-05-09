import React from 'react';

const Subscribe = () => {
    return (
        <div className='container mt-5 mb-5 shadow border'>
            <h2 style={{ color: 'green' }} className='text-center mt-5'>Subscribe</h2>
            <hr className='mx-auto' style={{ color: 'green', width: '200px' }} />
            <p className='text-center'>Subscribe Our newsstaller to stay updated every moment.</p>
            <div className="d-flex justify-content-center"><input className='text-center' type="email" style={{ width: '30%', height: '40px' }} />
                <button className='button-color mb-5 ms-3'>Submit</button></div>
        </div>
    );
};

export default Subscribe;