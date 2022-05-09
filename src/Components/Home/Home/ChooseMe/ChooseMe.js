import React from 'react';
import photo from '../../../../photo/pexels-tima-miroshnichenko-6169033.jpg'

const ChooseMe = () => {
    return (
        <div className='container border shadow mt-5'>

            <div className='row'>
                <div className="col-md-6 col-12">
                    <img className='py-5 img-fluid' src={photo} alt="photo" />
                </div>
                <div className="col-md-6 col-12 my-auto">
                    <h3 style={{ color: 'green' }} className=' mt-4 mb-4'>Why Choose us? </h3>
                    <p>We provide formaline free fruits all over the world. You can see our customer review that can inspire you to make good relationship with us. You can distribute your product with us. We always try to make happy customer. Our production delivered in different state.  </p>
                </div>



            </div>

        </div>
    );
};

export default ChooseMe;