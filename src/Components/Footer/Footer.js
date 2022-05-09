import React from 'react';

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <footer className='mt-5'>
            <div className='text-white' style={{ backgroundColor: 'green' }}>
                <div className='container'>
                    <h3 className=' text-center py-3'>Organic Fruits</h3>
                    <div className='row'>
                        <div className="col-md-6 col-12">
                            <p>Mirpur-10,Dhaka</p>
                            <p>+9-881245751</p>
                            <p>support@organic.com</p>
                        </div>
                        <div className="col-md-6">
                            <h4>About the Company</h4>
                            <p>Organic gives you healthy life style. It gives you good opertunity to entire market. You can fell your business. </p>
                            <div className='d-flex'>
                                <p className='ps-1'><i class="fa-brands fa-facebook"></i></p>

                                <p className='ps-1'><i class="fa-brands fa-twitter"></i></p>
                                <p className='ps-1'><i class="fa-brands fa-instagram"></i></p>
                                <p className='ps-1'> <i class="fa-brands fa-youtube"></i></p></div>


                        </div>
                    </div>
                </div>
            </div>
            <p className='text-center'><small>copyright @ {year}</small></p>
        </footer>
    );
};

export default Footer;