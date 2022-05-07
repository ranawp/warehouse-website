import React from 'react';
import './Product.css'
const Product = ({ product }) => {
    const { id, name, quantity, description, supplierName, img, } = product
    return (
        <div className='g-2 col-sm-12 col-md-6 col-lg-4 '>
            <div className="card">
                <img src={img} className="card-img-top img-fluid image" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p>Quantity:{quantity}</p>
                    <p>{description}</p>
                    <p>Supplier-Name: {supplierName}</p>
                    <button href="#" className="btn button-color">Update</button>
                </div>
            </div>
        </div>
    );
};

export default Product;