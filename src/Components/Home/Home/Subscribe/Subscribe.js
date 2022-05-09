import React from 'react';

const Subscribe = () => {
    return (
        <div className='container mt-5 mb-5 shadow border'>
            <h2 style={{ color: 'green' }} className='text-center mt-5'>Subscribe</h2>
            <hr className='mx-auto' style={{ color: 'green', width: '200px' }} />
            <p className='text-center'>Subscribe Our newsstaller to stay updated every moment.</p>
            <div className="d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <input className='text-center mt-2' type="email" style={{ width: '100%', height: '40px' }} />

                    </div>
                    <div className="col-md-6 col-12">
                        <button className='button-color mb-5 ms-3 mt-2'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;